import { ListData } from '../viewmodel/ListData'
import { ListDataViewModel } from '../viewmodel/ListDataViewModel'
//PageOne.ets
@Builder
export function GridShowBuilder(name: string, listData: ListData[]) {
  GridShow({ name, listData});
}
// @Entry
@Component
export struct GridShow {
  pathInfos: NavPathStack = new NavPathStack();
  @State listData: ListData[] = [];
  @State templistData: ListData[] = new ListDataViewModel().getRecentlyPlayedList();
  @State title: string = '';
  name: string = '';

  @Builder
  GridShowTitle(){
    Row({space: '15vp'}){
      SymbolGlyph($r('sys.symbol.arrow_left'))
        .fontSize(25)
        // .fontWeight(FontWeight.Bold)
        .margin({left: '20vp'})
        .onClick(()=>{
          this.pathInfos.pop()
        })
      Text(this.title)
        .fontSize('25vp')
        .fontColor(Color.Black)
        // .fontWeight(FontWeight.Bold)
    }
    .alignItems(VerticalAlign.Center)

  }

  aboutToAppear(): void {
    if(this.listData[0].name == '0'){
      this.title = '最近播放'
      this.listData.shift()
    }else if (this.listData[0].name == '1'){
      this.title = '最近热门'
      this.listData.shift()
    }else if (this.listData[0].name == '2'){
      this.title = '最近发行'
      this.listData.shift()
    }else {
      this.title = '为您推荐'
      this.listData.shift()
    }
  }

  build() {
    NavDestination() {
      Column() {

        Divider()
          .color(Color.Gray)
          .margin({left: 16, right: 16})
        Grid() {
          ForEach(this.listData, (item: ListData) => {

            GridItem() {
              Column(){
                Image($r(item.pic))
                  .width('100%')
                  // .height('160vp')
                  .objectFit(ImageFit.Contain)
                  .borderRadius('12vp')
                  .border({ width: 1, color: Color.Gray})
                // .margin({ left: '12vp' })
                Column(){
                  Text(item.name)
                    .fontSize('18vp')
                    .fontColor(Color.Black)
                    .textOverflow({ overflow: TextOverflow.Ellipsis })
                    .maxLines(1)
                  // .textAlign(TextAlign.Start)
                  Text(item.getStandardArtist(item.artist))
                    .fontSize('13vp')
                    .fontColor(Color.Gray)
                    .textOverflow({ overflow: TextOverflow.Ellipsis })
                    .maxLines(1)
                }
                // .height(31)
                .alignItems(HorizontalAlign.Start)
                .margin({top: '8vp'})
              }
              .clip(true)
              // .height('250vp')
              .width('100%')
              .alignItems(HorizontalAlign.Start)
            }
            // .margin()
          }, (item: ListData) => JSON.stringify(item))
        }
        .padding({left: '12vp',right: '12vp'})
        .columnsGap('12vp')
        .rowsGap('20vp')
        .columnsTemplate('1fr 1fr')
        .layoutDirection(GridDirection.Row)
        .scrollBar(BarState.Off)
      }
      .size({ width: '100%', height: '100%' })
    }
    .title(this.GridShowTitle)
    .hideBackButton(true)
    .hideTitleBar(false)

    .onReady((ctx: NavDestinationContext) => {
      // NavDestinationContext获取当前所在的导航控制器
      this.pathInfos = ctx.pathStack;
    })
  }
}