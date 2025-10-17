import { ListData } from '../viewmodel/ListData'
import { ListDataViewModel } from '../viewmodel/ListDataViewModel'




// @Entry
@Component
export struct ListItemHuge {
  @State listData: ListData[] = new ListDataViewModel().getListDataList();
  @State bgColor: Color = Color.Grey;

  // @Builder
  // ListItemSmall() {
  //
  //
  // }
  // 实现参考
  //     onWillStopDragging((velocity: number) => {
  //       if (velocity < 0) {
  //         // 向下滑动处理
  //       } else {
  //         // 向上滑动处理
  //       }
  //       })


  build() {
      List({space: '6vp'}) {
        ListItem()
          // .backgroundColor(Color.Red)
          .height('100%')
          .width('6vp')
        ForEach(this.listData, (item: ListData) => {
          ListItem() {
            Column() {
              Image($r(item.pic))
                .width('70%')
                // .height('100%')
                .objectFit(ImageFit.Contain)
              Column({ space: '5vp' }) {
                Text(item.name)
                  .fontSize('18vp')
                  .fontColor(Color.White)
                  .textAlign(TextAlign.Center)
                  .textOverflow({ overflow: TextOverflow.Ellipsis })
                  // .maxLines(1)
                Text(item.artist)
                  .fontSize('13vp')
                  .fontColor('#DCDCDC')
                  .textAlign(TextAlign.Center)
                  .textOverflow({ overflow: TextOverflow.Ellipsis })
                  .maxLines(1)
              }
              .width('70%')
              // .justifyContent(FlexAlign.Center)
              // .alignItems(HorizontalAlign.Center)
              .padding({
                top: '16vp',
                bottom: '16vp',
                left: '16vp',
                right: '16vp'
              })

            }
            //外层column组件参数
            .height('100%')
            // .width('70%')
            .alignItems(HorizontalAlign.Center)
            // .justifyContent(FlexAlign.Center)

          }
          //listitem组件参数
          .clip(true)
          .backgroundColor(this.bgColor)
          .backgroundBlurStyle(BlurStyle.BACKGROUND_THIN)
          .borderRadius('16vp')
          .height('100%')
        }, (item: ListData) => JSON.stringify(item))
        ListItem()
          // .backgroundColor(Color.Red)
          .height('100%')
          .width('6vp')
      }
      //list组件参数
      // .clip(true)
      .edgeEffect(EdgeEffect.None)
      .listDirection(Axis.Horizontal)
      .scrollBar(BarState.Off)
      .width('100%')
      .height('360vp')
    // .backgroundColor(Color.Red)

      }
}
