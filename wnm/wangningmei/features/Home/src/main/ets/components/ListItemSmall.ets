import { ListData } from '../viewmodel/ListData'
import { ListDataViewModel } from '../viewmodel/ListDataViewModel'




// @Entry
@Component
export struct ListItemSmall {
  @State listData: ListData[] = new ListDataViewModel().getListDataList();



  build() {
      List({space: '6vp'}){
        ListItem()
          .width('6vp')
          // .backgroundColor(Color.Red)
        .height('100%')
        ForEach(this.listData, (item: ListData) => {
          ListItem() {
            Column(){
              Image($r(item.pic))
                .width('100%')
                // .height('160vp')
                .objectFit(ImageFit.Contain)
                .borderRadius('12vp')
                // .margin({ left: '12vp' })
              Column(){
                Text(item.name)
                  .fontSize('18vp')
                  .fontColor(Color.Black)
                  .textOverflow({ overflow: TextOverflow.Ellipsis })
                  .maxLines(1)
                // .textAlign(TextAlign.Start)
                Text(item.artist)
                  .fontSize('13vp')
                  .fontColor(Color.Gray)
                  .textOverflow({ overflow: TextOverflow.Ellipsis })
                  .maxLines(1)
              }

              .height(31)
              .alignItems(HorizontalAlign.Start)
              .margin({top: '8vp'})

            }
            .clip(true)
            .height('100%')
            .width('100%')
            .alignItems(HorizontalAlign.Start)

          }.height('100%')
          .width('45%')
          // .backgroundColor(Color.Red)
        }, (item: ListData) => JSON.stringify(item))
        ListItem()
          .width('6vp')
          .height('100%')
      }
      .edgeEffect(EdgeEffect.None)
      .listDirection(Axis.Horizontal)
      .scrollBar(BarState.Off)
      .width('100%')
      .height(230)
      // .padding({ left: 24, right: 24 })
      // .margin({ top: '12vp' ,left: '12vp'})
      // .alignListItem(ListItemAlign.End)
    }
}
