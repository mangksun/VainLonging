@Entry
@Component
export struct MyMusicLib {



  build() {
      Column({space: 30}) {
        Text('资源库')
          .fontColor(Color.Black)
          .fontSize(25)
          .fontWeight(FontWeight.Bold)


          List({space:20}){
            ListItem(){
              Row(){
                SymbolGlyph($r('sys.symbol.music'))
                  .fontColor([Color.Red])
                  .fontSize(24)
                Text('播放列表')
                  .fontSize(24)
                  .width(330)
              }
            }
            .border({ width: { bottom: 0.5 }, color: 'black' }) // 底部边框
            ListItem(){
              Row(){
                SymbolGlyph($r('sys.symbol.mic'))
                  .fontColor([Color.Red])
                  .fontSize(24)
                Text('艺人')
                  .fontSize(24)
                  .width(330)
              }
            }
            .border({ width: { bottom: 0.5 }, color: 'black' }) // 底部边框
            ListItem(){
              Row(){
                SymbolGlyph($r('sys.symbol.save'))
                  .fontColor([Color.Red])
                  .fontSize(24)
                Text('专辑')
                  .fontSize(24)
                  .width(330)
              }
            }
            .border({ width: { bottom: 0.5 }, color: 'black' }) // 底部边框
            ListItem(){
              Row(){
                SymbolGlyph($r('sys.symbol.play_fill'))
                  .fontColor([Color.Red])
                  .fontSize(24)
                Text('歌曲')
                  .fontSize(24)
                  .width(330)
              }
            }
            .border({ width: { bottom: 0.5 }, color: 'black' }) // 底部边框
            ListItem(){
              Row(){
                SymbolGlyph($r('sys.symbol.arrow_down_circle'))
                  .fontColor([Color.Red])
                  .fontSize(24)
                Text('已下载')
                  .fontSize(24)
                  .width(330)
                  .border({ width: { bottom: 0.5 }, color: 'black' }) // 底部边框
              }
            }

          }
        Text('最近添加')
          .fontColor(Color.Black)
          .fontSize(24)
          .fontWeight(FontWeight.Bold)



        }
        .backgroundColor(Color.White)
        .margin({left: 12, right: 12})
        .justifyContent(FlexAlign.Start)
        .alignItems(HorizontalAlign.Start)

        .height('100%')



  }
}
