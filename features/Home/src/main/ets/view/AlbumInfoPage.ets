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
  pathInfos: NavPathStack = new NavPathStack();
  @StorageLink('songList') songList: SongItem[] = [];
  @State album: string = ''
  @State albumSongs: Array<SongItem> = [];
  @State name: string = ''
  //专辑封面url
  @State albumCover: string = ''
  @State artist: string[] = [];
  colorArray: ResourceColor[] = [Color.Red as ResourceColor];
  color: string = '#0033FF'

@Builder
  AlbumInfoBody() {
    Column() {

      Column() {
        Image(this.albumCover)
          .width(250)
          .height(250)
          .borderRadius(10)
          .margin({ top: '20vp' })
          .shadow(ShadowStyle.OUTER_DEFAULT_SM)
        Text(this.album.replace(/%20/g, " "))
          .fontSize(20)
          .fontWeight(FontWeight.Regular)
          .fontColor(Color.Black)
          .margin({ top: '20vp' })
        Text(this.artist.join(' & ').toString())
          .fontSize(20)
          .fontWeight(FontWeight.Regular)
          .fontColor(Color.Red)
          .margin({ top: '10vp' })
        Row() {
          Button('播放')
            .backgroundColor('#f0f0f4')
            // .backgroundBlurStyle(BlurStyle.Thin)
            .fontSize(18)
            .fontColor(Color.Red)
            .fontWeight(FontWeight.Regular)
            .width('164vp')
            .height(40)
            .margin({ left: '20vp' })
            .borderRadius(10)
            .onClick(() => {

            })
          Button('全部播放')
            .backgroundColor('#f0f0f4')
            // .backgroundBlurStyle(BlurStyle.Thin)
            .fontSize(18)
            .fontColor(Color.Red)
            .fontWeight(FontWeight.Regular)
            .width('164vp')
            .height(40)
            .margin({ right: '20vp' })
            .borderRadius(10)
            .onClick(() => {

            })
        }
        .width('100%')
        .margin({ top: '10vp', bottom: '20vp' })
        .justifyContent(FlexAlign.SpaceBetween)

      }
      .width('100%')

      Divider()
        .width('95%')
        .height(1)
        .color(Color.Black)
    }
    .width('100%')
    .alignItems(HorizontalAlign.End)

  }

  @Builder
  AlbumInfoHead() {
      Column(){
        //title部分用于页面控制
        Row(){
          Image($r('app.media.arrow_left'))
            .size({width: 25, height: 25})
            .margin({left: '20vp'})
            .onClick(()=>{
              this.pathInfos.pop()
            })
          Image($r('app.media.dot_grid_1x2'))
            .size({width: 25, height: 25})
            .margin({right: '20vp'})
            .onClick(()=>{

            })
        }
        .width('100%')
        .justifyContent(FlexAlign.SpaceBetween)
      }
      .width('100%')
  }

  async aboutToAppear(): Promise<void> {
    console.log("跳转专辑页面成功")
    let httpUtil: HttpUtils = new HttpUtils();
    // let targetUrl: string = `https://music-api.gdstudio.xyz/api.php?types=search&source=tencent_album&count=20&name=${this.album}`;
    await httpUtil.albumSearchRequest(this.album).then((value: Array<SongItem>) => {
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
      Column(){
        this.AlbumInfoHead()
        List() {
          ListItem(){
            this.AlbumInfoBody()
          }
          ForEach(this.albumSongs, (item: SongItem, index) => {
            ListItem(){
              Row(){
                Column(){
                  Text(`${index + 1}`)
                    .fontSize(18)
                    .fontColor('#696969')
                }
                .width('13%')
                .padding({left: '18vp'})
                .alignItems(HorizontalAlign.Center)

                Column(){
                  Row(){
                    Text(item.name)
                      .fontSize(18)
                      .fontWeight(FontWeight.Regular)
                    SymbolGlyph($r('sys.symbol.dot_grid_1x2'))
                      .fontSize(18)
                      .fontWeight(FontWeight.Bold)
                      .margin({right: '10vp'})
                      .onClick(()=>{

                      })
                  }
                  .width('100%')
                  .height('100%')
                  .alignItems(VerticalAlign.Center)
                  .justifyContent(FlexAlign.SpaceBetween)

                  Divider()
                    .width('100%')
                    .height(0.8)
                    .color(Color.Black)

                }
                .width('87%')
                .height('100%')
                .padding({ left: '6vp' })

              }
              .height(45)
              .width('100%')

            }
            .onClick(() => {
              this.pushToSongList(item)
            })

          })
          ListItem(){
            Column(){
              Divider()
                .width('95%')
                .height(1)
                .color(Color.Black)
              Text('')
                .height(120)
            }
            .width('100%')
            .alignItems(HorizontalAlign.End)


          }
        }
        .scrollBar(BarState.Off)

      }
      .size({ width: '100%', height: '100%' })
    }
    .onReady((ctx: NavDestinationContext) => {
      // NavDestinationContext获取当前所在的导航控制器
      this.pathInfos = ctx.pathStack;
    })
    .hideTitleBar(true)
  }
}