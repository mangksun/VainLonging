import { common } from '@kit.AbilityKit'
// import { HttpUtils } from 'musicinfocommon'
import { MusicInfo } from 'musicinfocommon'
import { ListItemSmall } from './ListItemSmall'
import { ListItemHuge } from './ListItemHuge'
@Builder
export function HomePageBuilder() {
  HomePage()
}
@Entry
@Component
export struct HomePage {
  @State message: string = 'Hello World';


  pathStack: NavPathStack = new NavPathStack();
  @State httpGridItems: Array<MusicInfo> = [];
  @State pictureUri: string = '';
  private scrollerForScroll: Scroller = new Scroller();
  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  private applicationContext = this.context.getApplicationContext();
  private cacheDir = this.applicationContext.filesDir;
  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  async aboutToAppear(): Promise<void> {
  //   let httpUtil: HttpUtils = new HttpUtils();
  //   await httpUtil.postHttpRequest().then((value: Array<MusicInfo>) => {
  //     this.httpGridItems = value;
  //   });
  //   await httpUtil.getHttpRequest()
  //   //   .then((value: string) => {
  //   //   this.pictureUri = value;
  //   // })
  //   ;
  //   httpUtil.destroyHttpRequest();
  }

  @Builder
  NavigationMenus() {
    Row() {
      SymbolGlyph($r('sys.symbol.gearshape'))
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 14, right: 16 })
    }
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

            Column() {
              Row({space: 5}){
                Text('最近播放')
                  .fontSize(25)
                  .fontColor(Color.Black)
                  .margin({ top: 20,left: 16,bottom: 10})
                SymbolGlyph($r('sys.symbol.chevron_right'))
                  .fontSize(30)
                  // .fontWeight(FontWeight.Bold)
                  .margin({ top: 10 })
              }
              .justifyContent(FlexAlign.Center)
              ListItemSmall()
            }
            .alignItems(HorizontalAlign.Start)

            ListItemSmall()
            ListItemSmall()
            ListItemSmall()
            ListItemSmall()
          }
          // .margin({ bottom: 25})
        // }
      }
    }.title('主页',{
        backgroundBlurStyle: BlurStyle.Thin,
        barStyle: BarStyle.STACK,
      })
      .menus(this.NavigationMenus)
      .mode(NavigationMode.Stack)
      // .hideToolBar(true)
      .titleMode(NavigationTitleMode.Free)
      .hideTitleBar(false)
  }
}