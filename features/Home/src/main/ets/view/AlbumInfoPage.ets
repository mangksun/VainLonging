import { HttpUtils, SongItem ,MediaService} from 'utils'
import json from '@ohos.util.json';


@Builder
export function AlbumInfoPageBuilder(name: string,album: string) {
  AlbumInfoPage({ name, album });
}

@Entry
@Component
export struct AlbumInfoPage {
  // @Consume('navStack') AlbumInfoNavStack: NavPathStack;
  @StorageLink('songList') songList: SongItem[] = [];
  @State album: string = '曹操'
  @State albumSongs: Array<SongItem> = [];
  @State name: string = ''
  //专辑封面url
  @State albumCover: string = ''
  @State artist: string[] = [];
  colorArray: ResourceColor[] = [Color.Red as ResourceColor];
  color: string = '#0033FF'



  @Builder
  AlbumInfoHead() {
      Column(){
        //title部分用于页面控制
        Row(){
          SymbolGlyph($r('sys.symbol.arrow_left'))
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
            .fontColor(this.colorArray)
            .margin({left: '20vp'})
            .onClick(()=>{

            })
          SymbolGlyph($r('sys.symbol.dot_grid_1x2'))
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
            .fontColor(this.colorArray)
            .margin({right: '20vp'})
            .onClick(()=>{

            })

        }
        .width('100%')
        .margin({top: '20vp'})
        .justifyContent(FlexAlign.SpaceBetween)

        Column(){
          Image(this.albumCover)
            .width(250)
            .height(250)
            .borderRadius(10)
            .margin({top: '20vp'})
            .shadow(ShadowStyle.OUTER_DEFAULT_XS)
          Text(this.album)
            .fontSize(20)
            .fontWeight(FontWeight.Regular)
            .fontColor(Color.Black)
            .margin({top: '20vp'})
          Text(this.getStandardArtist(this.artist))
            .fontSize(20)
            .fontWeight(FontWeight.Regular)
            .fontColor(Color.Red)
            .margin({top: '10vp'})
        }
        Row(){
          Button('播放')
            .backgroundColor('#f0f0f4')
            // .backgroundBlurStyle(BlurStyle.Thin)
            .fontSize(18)
            .fontColor(Color.Red)
            .fontWeight(FontWeight.Regular)
            .width('164vp')
            .height(40)
            .margin({left: '20vp'})
            .borderRadius(10)
            .onClick(()=>{

            })
          Button('全部播放')
            .backgroundColor('#f0f0f4')
            // .backgroundBlurStyle(BlurStyle.Thin)
            .fontSize(18)
            .fontColor(Color.Red)
            .fontWeight(FontWeight.Regular)
            .width('164vp')
            .height(40)
            .margin({right: '20vp'})
            .borderRadius(10)
            .onClick(()=>{

            })
        }
        .width('100%')
        .margin({top: '10vp',bottom: '20vp'})
        .justifyContent(FlexAlign.SpaceBetween)
      }
      // .justifyContent(FlexAlign.SpaceBetween)
      .width('100%')


  }

  async aboutToAppear(): Promise<void> {
    console.log("跳转专辑页面成功")
    let httpUtil: HttpUtils = new HttpUtils();
    let targetUrl: string = `https://music-api.gdstudio.xyz/api.php?types=search&source=netease_album&count=20&name=${this.album}`;
    await httpUtil.RedirectSearchRequest(targetUrl).then((value: Array<SongItem>) => {
      console.log('AlbumSearchSuccessfully ' + JSON.stringify(value))
      if(value){
        this.albumSongs = value;
        this.artist = value[0].artist;
      }
    });
    this.albumCover = await httpUtil.httpPicUrlRequest(this.albumSongs[0].pic_id);

  }

  pushToSongList(item: SongItem){

    MediaService.getInstance().loadAssent(item)

  }

  build() {
    NavDestination() {
      Column() {
        List() {
          ListItem(){
            this.AlbumInfoHead()
          }
          ForEach(this.albumSongs, (item: SongItem, index) => {
            ListItem(){
              Column(){
                Row(){
                  Row(){
                    Text(`${index + 1}`)
                      .fontSize(18)
                      .margin({left: '20vp'})
                    Text(item.name)
                      .fontSize(18)
                      .margin({left: '15vp'})
                  }
                  SymbolGlyph($r('sys.symbol.dot_grid_1x2'))
                    .fontSize(18)
                    .fontWeight(FontWeight.Bold)
                    .fontColor(this.colorArray)
                    .margin({right: '20vp'})
                    .onClick(()=>{

                    })
                }
                .width('100%')
                .justifyContent(FlexAlign.SpaceBetween)

                Divider()
                  .width('80%')
                  .height(1)
              }

            }
            .width('100%')
            .height(40)
            .onClick(() => {
              this.pushToSongList(item)


            })
          })
        }
      }
      .size({ width: '100%', height: '100%' })
    }.hideTitleBar(true)
  }
  getStandardArtist(artist: string[]): string {
    let standardArtist = '';
    for (let i = 0; i < artist.length; i++) {
      standardArtist += artist[i];
      if (i !== artist.length - 1) {
        standardArtist += ',';
      }
    }
    return standardArtist;
  }
}