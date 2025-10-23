import {SearchGrid} from '../viewmodel/GridItemData'
import {SearchGridList} from '../viewmodel/SearchGridViewModel'
import { SearchResults } from './SearchResults'

//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git//https://github.com/mangksun/VainLonging.git//https://github.com/mangksun/VainLonging.git//https://github.com/mangksun/VainLonging.git

//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git//https://github.com/mangksun/VainLonging.git
//https://github.com/mangksun/VainLonging.git














@Component
export struct SearchPage {
  @State message: string = 'Hello World';
  private sgList: SearchGrid[] = new SearchGridList().getSGList()
  @State keyword: string = '';

  build() {
    Column({space: 10}) {
      Text('搜索')
        .fontColor(Color.Black)
        .fontSize(25)
        .fontWeight(FontWeight.Bold)
      TextInput({placeholder: '艺人，歌曲，歌词以及更多内容', text: this.keyword})
        // .placeholderFont('yrej')
        // .type()
        .border({width: 1})
        .fontColor(Color.Grey)
        .height('40vp')
        .width('100%')
        .borderRadius('5vp')
        // .margin({left: '10vp', right: '10vp'})
        .backgroundColor(Color.White)
        .margin({bottom: 20})
        .onChange((val: string): void => { this.keyword = val })
        .onSubmit((): void => {
          if (!this.keyword || this.keyword.trim().length === 0) {
            return;
          }
          AppStorage.setOrCreate('SearchKeyword', this.keyword.trim());
          const stack = AppStorage.get<NavPathStack>('PathStack');
          stack?.pushPath({ name: 'SearchResults' });
        })
      // Column({ space: 12 }) {
        // 用 Grid 来布局
        Grid() {
          ForEach(this.sgList, (item: SearchGrid, index: number) => {
            GridItem() {
              // 每个格子里的布局
              Stack() {
                Text()
                  .width('100%')
                  .height('80vp')
                  .backgroundColor(Color.Pink)
                  // .aspectRatio(1) // 保持正方形
                  // .objectFit(ImageFit.Cover)
                  .borderRadius(12)
                  // .border({width: 1})
                  .zIndex(0)

                Text(item.name)
                  .fontSize(16)
                  .fontColor(Color.Gray)
                  .fontWeight(FontWeight.Medium)
                  .textAlign(TextAlign.End)
                  .margin({ bottom: 15 })
                  .zIndex(1)
              }
              .alignContent(Alignment.Bottom)
              // .padding(10)
              .backgroundColor('#f2f2f2')
              .borderRadius(16)
              .width('100%')
            }
          })
        }
        .columnsGap(12) // 设置列间距
        .rowsGap(12)    // 设置行间距
        .columnsTemplate('1fr 1fr')
        // .padding({left: 12, right: 12})



      }
      .backgroundColor(Color.White)
      .margin({left: 12, right: 12})
      .justifyContent(FlexAlign.Start)
      .alignItems(HorizontalAlign.Start)

      .height('100%')


  }

  
}




