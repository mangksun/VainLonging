import { ListData } from '../viewmodel/ListData'
import { ListDataViewModel } from '../viewmodel/ListDataViewModel'
import { HttpUtils, SongItem } from 'utils'



// @Entry
@Component
export struct ListItemSmall {
  @State listData: ListData[] = new ListDataViewModel().getListDataList()
  private scrollerForList: Scroller = new Scroller();
  @State centerIndex: number = 0
  @State myOffset: number = 6
  @State listWidth: number = 179
  @State listOffset: number = 0
  @Consume('navStack') listSmallNavStack: NavPathStack;




  async aboutToAppear(): Promise<void> {
    this.listData.shift();

  }

  build() {
      List({ space:'6vp',scroller: this.scrollerForList},){
        ListItem()
          .width('6vp')
          // .backgroundColor(Color.Red)
          .height('100%')
        ForEach(this.listData, (item: ListData) => {
          ListItem() {
            Column(){
              Image(item.pic)
                .width('100%')
                .objectFit(ImageFit.Cover)
                .borderRadius(12)
                .border({ width: 1, color: Color.White})
                .shadow(ShadowStyle.OUTER_DEFAULT_XS)
              Column(){
                Text(item.album)
                  .fontSize('18vp')
                  .fontColor(Color.Black)
                  .width('100%')
                  .textOverflow({ overflow: TextOverflow.Ellipsis })
                  .maxLines(1)
                // .textAlign(TextAlign.Start)
                Text(item.artist.join(' & ').toString())
                  .fontSize('13vp')
                  .fontColor(Color.Gray)
                  .textOverflow({ overflow: TextOverflow.Ellipsis })
                  .maxLines(1)
              }
              .width('100%')
              .height(31)
              .alignItems(HorizontalAlign.Start)
              .margin({top: '8vp',left: '4vp'})

            }
            .clip(true)
            .height('100%')
            .width('100%')
            .alignItems(HorizontalAlign.Start)

          }
          .height('100%')
          .width('179vp')
          .onClick(() => {
            this.listSmallNavStack.pushPathByName('AlbumInfoPage', item.album.replace(/\s/g, "%20"));
          })
          // .margin({left: '12vp'})
          // .backgroundColor(Color.Red)
        }, (item: ListData) => JSON.stringify(item))
        ListItem()
          .width('6vp')
          .height('100%')
      }
      // .alignListItem(ListItemAlign.Center)
      // .visualEffect( true)
      .chainAnimation(true)
      // .scrollSnapAlign(ScrollSnapAlign.START)
      .edgeEffect(EdgeEffect.None)
      .listDirection(Axis.Horizontal)
      .scrollBar(BarState.Off)
      .width('100%')
      .height(230)
      // .onAreaChange((oldValue: Area, newValue: Area) => {
      //   this.listHeight = newValue.height as number
      //   this.listWidth = newValue.width as number
      // })
      .onTouch((event: TouchEvent) => {
        if (event.type === TouchType.Down) {
          this.listOffset = this.scrollerForList.currentOffset().xOffset
          console.info(`this.currentOffset ${this.listOffset}`)
        }
        if (event.type === TouchType.Up || event.type === TouchType.Cancel) {
          let curOffset: number = this.scrollerForList.currentOffset().xOffset - this.listOffset
          let listNum: number = Math.floor(curOffset / this.listWidth)
          let targetOffset = this.listOffset
          if (listNum > 0) {
            //向正方向滑动超过一个列表项宽度处理
            if (Math.abs(curOffset - this.listWidth) < this.listWidth / 3) {
              targetOffset = this.listOffset + this.listWidth + this.myOffset
            } else {
              targetOffset = this.listOffset + (this.listWidth + this.myOffset) * 2
            }

          } else if (listNum <= -1) {
            //向负方向滑动超过一个列表项宽度处理
            if (Math.abs(curOffset + this.listWidth) < this.listWidth / 3) {
              targetOffset = this.listOffset - this.listWidth - this.myOffset
            } else {
              targetOffset = this.listOffset - (this.listWidth + this.myOffset) * 2
            }

          } else
            //不超过一个列表项宽度处理
            if(Math.abs(curOffset) < this.listWidth / 3) {
            targetOffset = this.listOffset
          } else if (curOffset > 0) {
            targetOffset = this.listOffset + this.listWidth + this.myOffset
          } else if (curOffset < 0) {
            targetOffset = this.listOffset - this.listWidth - this.myOffset
          }
          console.info(`targetOffset ${targetOffset} listOffset ${curOffset} `)
          this.scrollerForList.scrollTo({
            xOffset: targetOffset ,
            yOffset: 0,
            animation: true
          })
        }

 })
}
}

