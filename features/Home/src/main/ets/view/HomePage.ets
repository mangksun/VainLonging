import { common } from '@kit.AbilityKit'
import { HttpUtils, SongItem } from 'utils'
// import { MediaService } from 'utils'
// import { MusicInfo } from 'musicinfocommon'
import { ListData } from '../viewmodel/ListData'
import { ListDataViewModel } from '../viewmodel/ListDataViewModel'
import { ListItemSmall } from '../components/ListItemSmall'
import { ListItemHuge } from '../components/ListItemHuge'
import { songList } from '../viewmodel/songList'
@Builder
export function HomePageBuilder() {
  HomePage()
}
// @Entry
@Component
export struct HomePage {
  @StorageLink('musicsource') MusicSource: string = 'netease';
  recentlyList: ListData[] = new ListDataViewModel().getRecentlyPlayedList(new ListDataViewModel().getListDataList(), 10)
  @Provide('navStack') pathStack: NavPathStack = new NavPathStack();
  private scrollerForScroll: Scroller = new Scroller();
  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  private applicationContext = this.context.getApplicationContext();
  private cacheDir = this.applicationContext.filesDir;
  private colorArray: ResourceColor[] = [Color.Black as ResourceColor];
  private customPopup: boolean = false;
  @State rotateAngle: number = 0;
  isRotated = false;

  async aboutToAppear(): Promise<void> {
    AppStorage.setOrCreate('songList', songList);
    AppStorage.setOrCreate('musicsource', this.MusicSource);

    let httpUtil: HttpUtils = new HttpUtils();

  }

  @Builder
  NavigationMenus() {
    Row() {
      Button() {
        SymbolGlyph($r('sys.symbol.gearshape'))
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
          .fontColor(this.colorArray)
          .rotate({ angle: this.rotateAngle})
          .transform({x: '50%', y: '50%'})
      }
      .margin({ top: 14, right: 16 })
      .backgroundColor(Color.Transparent)
      .onClick(() => {
        animateTo({
          duration: 400,
          curve: Curve.EaseOut
        }, () => {
          this.rotateAngle = this.isRotated ? 0 : -90; // 切换角度
          this.isRotated = !this.isRotated;           // 切换状态
        });
        this.customPopup = !this.customPopup
        console.log('customPopup', this.customPopup)
      })
      .bindPopup(this.customPopup, {
        builder: this.PopupBuilder, // Bubble content
        placement: Placement.TopRight, // The pop position of the bubble
        onStateChange: (e) => {
          if (!e.isVisible) {
            this.customPopup = false;
          }
        }
      })
    }
  }

  @Builder
  PopItem(icon : string, title: string, clickHandler: () => void )  {
    Row() {
      SymbolGlyph($r(icon))
        .fontSize(30)

      Text(title)
        .fontSize(16)
        .fontColor(Color.Black)
        .margin({ top: 10, left: 16 })

        .onClick(() => {
          clickHandler()
          // this.MusicSource = 'netease';
          // AppStorage.setOrCreate('musicsource', this.MusicSource);
        })
    }
  }
  @Builder
  PopupBuilder() {
    Row({ space: 2 }) {
      Text('保存数据')
        .fontSize(16)
        .opacity(0.9)
    }
    .width(200)
    .height(50)
    .padding(16)
  }

  @Builder
  StandardList(title: string, listData: ListData[]){
    Column() {
      Row({space: 5}){
        Text(title)
          .fontSize(25)
          .fontColor(Color.Black)
          .margin({ top: 20,left: 16,bottom: 10})
        SymbolGlyph($r('sys.symbol.chevron_right'))
          .fontSize(30)
          // .fontWeight(FontWeight.Bold)
          .margin({ top: 10 })
      }
      .justifyContent(FlexAlign.Center)
      .onClick(() => {
        switch (title){
          case '最近播放':
            this.pathStack.pushPathByName("GridShow", this.recentlyList);
            break;
          case '最新发行':
            this.pathStack.pushPathByName("GridShow", new ListDataViewModel().getNewReleasesList(new ListDataViewModel().getListDataList(), 10));
            break;
          case '为您推荐':
            this.pathStack.pushPathByName("GridShow", new ListDataViewModel().getRecommendList(new ListDataViewModel().getListDataList(), 10));
            break;
          case '最近热门':
            this.pathStack.pushPathByName("GridShow", new ListDataViewModel().getPopularList(new ListDataViewModel().getListDataList(), 10));
        }
      })
      ListItemSmall({listData})
    }
    .alignItems(HorizontalAlign.Start)
  }

  build() {
    Navigation(this.pathStack) {
      // Column() {
        Scroll(this.scrollerForScroll) {
          Column({ space: 20}) {
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank()
              .height(92)
              // .backgroundColor(Color.Red)
              .width('100%')
            // Blank()
            //   .height(10)
            //   .width('388vp')
            //   .backgroundColor(Color.Red)
            Column() {
              Divider()
                .color(Color.Gray)
                .margin({left: 16, right: 16})
              Text('精选推荐')
                .fontSize(25)
                .fontColor(Color.Black)
                .margin({ top: 20,left: 16,bottom: 10})
              Blank()
                .height(10)
              ListItemHuge()
            }
            .alignItems(HorizontalAlign.Start)

            this.StandardList('最近播放', new ListDataViewModel().getRecentlyPlayedList(new ListDataViewModel().getListDataList(), 10))
            this.StandardList('最近热门', new ListDataViewModel().getPopularList(new ListDataViewModel().getListDataList(), 10))

            Column() {
              Row({space: 5}){
                Image('https://img2.kuwo.cn/star/albumcover/500/s4s75/99/2508427700.jpg')
                  .width(40)
                  .height(40)
                  .borderRadius('6vp')
                  .margin({ top: 20,bottom: 10,left: 15})
                Column(){
                  Text('您最近经常听他的歌')
                    .fontSize(12)
                    .fontColor(Color.Gray)
                    .margin({ top: 20})
                  Text('陶喆')
                    .fontSize(24)
                    .fontColor(Color.Black)
                    .margin({ bottom: 10})
                }.justifyContent(FlexAlign.End)
                .alignItems(HorizontalAlign.Start)

              }
              .justifyContent(FlexAlign.End)

              ListItemSmall()
            }
            .alignItems(HorizontalAlign.Start)

            this.StandardList('最新发行', new ListDataViewModel().getNewReleasesList(new ListDataViewModel().getListDataList(), 10))

            this.StandardList('为您推荐', new ListDataViewModel().getRecommendList(new ListDataViewModel().getListDataList(), 10))
            Blank()
              .height(70)
          }
          .alignItems(HorizontalAlign.Start)

      }
    }.title('主页',{
        backgroundBlurStyle: BlurStyle.Thin,
        barStyle: BarStyle.STACK,
        backgroundColor: Color.White,
      })
      .menus(this.NavigationMenus())
      .mode(NavigationMode.Stack)
      // .hideToolBar(true)
      .titleMode(NavigationTitleMode.Free)
      .hideTitleBar(false)
  }
}