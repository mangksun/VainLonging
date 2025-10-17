import { HomePage } from 'home'
import { MyMusicLib } from 'mymusiclib'
import {SearchPage, SearchResults} from 'search'
@Entry
@Component
struct Index {
  pathStack: NavPathStack = new NavPathStack();
  private scrollerForScroll: Scroller = new Scroller();
  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  private tabsController: TabsController = new TabsController();
  @State currentIndex: number = 0;

  @Builder
  tabBuilder(title: ResourceStr, targetIndex: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      Image(this.currentIndex === targetIndex ? selectedImg : normalImg)
        .size({ width: 25, height: 25 })
      Text(title)
        .fontColor(this.currentIndex === targetIndex ? '#FF0000' : '#6B6B6B')
        .fontSize(12)
    }
    .width('100%')
    .height(30)
    .justifyContent(FlexAlign.Center)
    .onClick(() => {
      this.currentIndex = targetIndex;
      this.tabsController.changeIndex(this.currentIndex);
    })
  }

  // 全局设置一个NavPathStack
  aboutToAppear(): void {
    AppStorage.setOrCreate("PathStack", this.pathStack);
  }

  @Builder
  NavigationMenus() {
      Row() {
        SymbolGlyph($r('sys.symbol.gearshape'))
          .fontSize(24)
          .margin({top: 14, right: 16})
    }
  }


  build() {
    Column() {
      Navigation(this.pathStack) {
        Tabs({ barPosition: BarPosition.End, index: this.currentIndex, controller: this.tabsController }) {
          TabContent() {
            HomePage()
          }.tabBar(this.tabBuilder('首页', 0, $r('app.media.house_fill'), $r('app.media.house')))

          TabContent() {
            MyMusicLib()
          }.tabBar(this.tabBuilder('资源库', 1, $r('app.media.lib_fill'), $r('app.media.lib')))

          TabContent() {
            SearchPage()
          }
          .tabBar(this.tabBuilder('搜索', 2, $r('app.media.search_fill'), $r('app.media.search')))
          .bindContentCover(true)

          TabContent() {
            Text('我的')
              .fontSize(30)
              .fontWeight(FontWeight.Bold)
          }.tabBar(this.tabBuilder('我的', 3, $r('app.media.face_smiling'), $r('app.media.face')))
        }
        .onAnimationStart((index: number, targetIndex: number) => {
          this.currentIndex = targetIndex;
        })
        .layoutWeight(1)
        .barPosition(BarPosition.End)
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F1F3F5')
    .backgroundBlurStyle(BlurStyle.Thin)
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])
  }
}