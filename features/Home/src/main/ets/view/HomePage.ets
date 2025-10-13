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
  @State listData: ListData[] = new ListDataViewModel().getListDataList();
  @State RecentlyPlayedList: ListData[] = new ListDataViewModel().getRecentlyPlayedList();
  @State FeatureRecommonedList: ListData[] = new ListDataViewModel().getFeaturedRecommendationsList();
  @State popularList: ListData[] = new ListDataViewModel().getPopularList();
  @State NewReleasesList: ListData[] = new ListDataViewModel().getNewReleasesList();
  @State recommonedList: ListData[] = new ListDataViewModel().getRecommendList();
  @State HisMoreList: ListData[] = new ListDataViewModel().getHisMoreList();


  @Provide('navStack') pathStack: NavPathStack = new NavPathStack();
  private scrollerForScroll: Scroller = new Scroller();
  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  private applicationContext = this.context.getApplicationContext();
  private cacheDir = this.applicationContext.filesDir;



  async aboutToAppear(): Promise<void> {
    AppStorage.setOrCreate('songList', songList);
    // MediaService.getInstance();

    //let responseSongList: Array<SongItem> | undefined;
    let httpUtil: HttpUtils = new HttpUtils();
    let targetUrl: string = 'https://music-api.gdstudio.xyz/api.php?types=search&source=kuwo&count=10&name=晴天';
    await httpUtil.RedirectSearchRequest(targetUrl).then((value: Array<SongItem> | undefined) => {
      if(value){
        console.log('httpSearchRequest ' + JSON.stringify(value[0].artist));
      }

    });
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
            this.pathStack.pushPathByName("GridShow", this.RecentlyPlayedList);
            break;
          case '最新发行':
            this.pathStack.pushPathByName("GridShow", this.NewReleasesList);
            break;
          case '为您推荐':
            this.pathStack.pushPathByName("GridShow", this.recommonedList);
            break;
          case '最近热门':
            this.pathStack.pushPathByName("GridShow", this.popularList);
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

            this.StandardList('最近播放', this.RecentlyPlayedList)
            this.StandardList('最近热门', this.popularList)

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

            this.StandardList('最新发行', this.NewReleasesList)

            this.StandardList('为您推荐', this.recommonedList)
          }
          .alignItems(HorizontalAlign.Start)

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