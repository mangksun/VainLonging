import { ListData } from '../viewmodel/ListData'
import { ListDataViewModel } from '../viewmodel/ListDataViewModel'




// @Entry
@Component
export struct ListItemHuge {
  @State listData: ListData[] = new ListDataViewModel().getListDataList();
  private scrollerForHugeList: Scroller = new Scroller();
  @Consume('navStack') listHugeNavStack: NavPathStack;
  @State centerIndex: number = 0
  @State myOffset: number = 6
  @State listWidthHuge: number = 252.2
  @State listOffsetHuge: number = 0

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
    List({ space: '6vp' ,scroller: this.scrollerForHugeList}) {
      ListItem()
      // .backgroundColor(Color.Red)
        .height('100%')
        .width('6vp')
      ForEach(this.listData, (item: ListData) => {
        ListItem() {
          Column() {
            Image(item.pic)
              .width('100%')
              // .height('100%')
              .objectFit(ImageFit.Contain)
              .border({ width: 1, color: Color.White })
            Column({ space: '5vp' }) {
              Text(item.album)
                .fontSize('18vp')
                .fontColor(Color.White)
                .textAlign(TextAlign.Center)
                .textOverflow({ overflow: TextOverflow.Ellipsis })
              // .maxLines(1)
              Text(item.artist.join(' & ').toString())
                .fontSize('15vp')
                .fontColor('#DCDCDC')
                .textAlign(TextAlign.Center)
                .textOverflow({ overflow: TextOverflow.Ellipsis })
                .maxLines(1)
            }
            .width('100%')
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
          .width('65%')
          .alignItems(HorizontalAlign.Center)

          // .justifyContent(FlexAlign.Center)

        }
        //listitem组件参数
        .clip(true)
        .backgroundColor('#003153')
        .backgroundBlurStyle(BlurStyle.Thin)
        .borderRadius('16vp')
        .height('100%')
        .onClick(() => {
          this.listHugeNavStack.pushPathByName('AlbumInfoPage', item.album.replace(/\s/g, "%20"));
        })
      }, (item: ListData) => JSON.stringify(item))
      ListItem()
      // .backgroundColor(Color.Red)
        .height('100%')
        .width('6vp')
    }
    //list组件参数
    // .clip(true)
    .chainAnimation(true)
    .edgeEffect(EdgeEffect.None)
    .listDirection(Axis.Horizontal)
    .scrollBar(BarState.Off)
    .width('100%')
    .height('360vp')
    .onTouch((event: TouchEvent) => {
      if (event.type === TouchType.Down) {
        this.listOffsetHuge = this.scrollerForHugeList.currentOffset().xOffset
        console.info(`this.currentOffset ${this.listOffsetHuge}`)
      }
      if (event.type === TouchType.Up || event.type === TouchType.Cancel) {
        let curOffset: number = this.scrollerForHugeList.currentOffset().xOffset - this.listOffsetHuge
        let targetOffsetHuge = this.listOffsetHuge

        //不超过一个列表项宽度处理
        if (Math.abs(curOffset) < this.listWidthHuge / 3) {
          targetOffsetHuge = this.listOffsetHuge
        } else if (curOffset > 0) {
          targetOffsetHuge = this.listOffsetHuge + this.listWidthHuge + this.myOffset
        } else if (curOffset < 0) {
          targetOffsetHuge = this.listOffsetHuge - this.listWidthHuge - this.myOffset
        }
        console.info(`targetOffset ${targetOffsetHuge} listOffset ${curOffset} `)
        this.scrollerForHugeList.scrollTo({
          xOffset: targetOffsetHuge,
          yOffset: 0,
          animation: true
        })
      }

    })
  }
}