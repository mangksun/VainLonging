import { HttpUtils, SongItem ,MediaService} from 'utils'
import { router, Router } from '@kit.ArkUI';
import { FullScreenPlayer } from './FullScreenPlayer';

@Component
export struct Player {
  @State message: string = 'Hello World';
  @StorageProp('selectIndex') @Watch('isChange')selectIndex: number = 0;
  @StorageProp('isPlay') isPlay: boolean = false;
  @StorageLink('songList') songList: SongItem[] = [];
  @StorageLink('currentTime') currentTime: number = 0;
  @StorageLink('progress') progress: number = 0;
  @StorageLink('progressMax') progressMax: number = 0;
  name: string = '暂无歌曲';
  artist: string[] = ['暂无歌曲'];
  pic: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tZMv_KFRhv9v8drA2O_0MAJ79vqp4fNNJw&s';
  isFold: boolean = true;

  aboutToAppear(): void {

  }

  build() {
    Stack(){
      Row(){
        Row() {
          Image(this.songList.length > 0 ? this.songList[this.selectIndex].pic_id : this.pic)
            .objectFit(ImageFit.Contain)
            .width(56)
            .height(56)
            .borderRadius(8)
          Column({ space: 2 }) {
            Text(this.songList.length > 0 ? this.songList[this.selectIndex].name : this.name)
              .fontSize(14)
              .fontColor('#696969')
              .fontWeight(FontWeight.Bold)
            Text(this.songList.length > 0 ? this.songList[this.selectIndex].artist.join('&').toString() : this.artist.join('&').toString())
              .fontSize(14)
              .fontColor('#696969')
          }
          .margin({left: 7})
          .alignItems(HorizontalAlign.Start)
        }
        .margin({ left: 14 })
        .height('100%')
        .alignItems(VerticalAlign.Center)
        .justifyContent(FlexAlign.Start)


        Row({space: 5}){
          SymbolGlyph($r('sys.symbol.backward_end_fill'))
            .fontSize(30)
            .onClick(() => {
              MediaService.getInstance().playPrevious()
            })
          SymbolGlyph(this.isPlay ?  $r('sys.symbol.pause_fill') : $r('sys.symbol.play_fill'))
            .fontSize(30)
            .effectStrategy(SymbolEffectStrategy.SCALE)
            .onClick(() => {
              if(this.isPlay){
                MediaService.getInstance().pause()
              }else {
                MediaService.getInstance().play()
              }
            })
          SymbolGlyph($r('sys.symbol.forward_end_fill'))
            .fontSize(30)
            .onClick(() => {
              MediaService.getInstance().playNextAuto(true)
            })
        }
        .margin({ right: 7})
        .height('100%')
        .alignItems(VerticalAlign.Center)
      }
      .margin({left: 5, right: 5, bottom: 5})
      .borderRadius(12)
      .border({width: 1,color: '#D3D3D3'})
      .backgroundColor(Color.White)
      .justifyContent(FlexAlign.SpaceBetween)
      .onClick(() => {
        this.isFold = false
        AppStorage.setOrCreate('isFold', this.isFold)

      })
      .height(70)
      .width('376vp')

      Progress({value: this.progress, total: this.progressMax})
        .width(354)
        .height(2)
        .margin({bottom: 5})
        .zIndex(1)
        .color(Color.Red)
    }
    .height(70)
    .width('376vp')
    .alignContent(Alignment.Bottom)
    }


  isChange() {
    console.log('isChange is called selectIndex:' + this.selectIndex)
  }

}

