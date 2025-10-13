

// @Entry
@Component
export struct Player {
  @State message: string = 'Hello World';

  build() {
    // Row(){
      Row(){
        Image($r('app.media.gaomu'))
          .objectFit(ImageFit.Contain)
          .width(56)
          .height(56)
          .margin({ left: 14 })
          .borderRadius(8)
        Column({space: 2}){
          Text('高木同学')
            .fontSize(14)
            .fontColor('#696969')
            .fontWeight(FontWeight.Bold)
          Text('西片太太')
            .fontSize(14)
            .fontColor('#696969')
        }
        // .width()
        .height('100%')
        .alignItems(HorizontalAlign.Start)
        .justifyContent(FlexAlign.Start)
        .margin({ left: 7})
        .padding({top: 14})

        Row({space: 5}){
          SymbolGlyph($r('sys.symbol.backward_end_fill'))
            .fontSize(30)
          SymbolGlyph($r('sys.symbol.play_fill'))
            .fontSize(30)
          // .border({width: 1, radius: 50})
          SymbolGlyph($r('sys.symbol.forward_end_fill'))
            .fontSize(30)
        }
        .margin({left: 110})

        //   .size(24)
        // .color(Color.White)
        // .margin({left: 20})
        // Text('K')
        //   .fontSize(24)
        //   // .fontColor(Color.White)
        //   .margin({left: 160})
        // Text('N')
        //   .fontSize(16)
        //   .fontColor(Color.White)
        //   .margin({left: 20})
      }
      .height(70)
      .width('376vp')
      .margin({left:6,right:6,bottom:6})
      .borderRadius(16)
      .border({width: 1,color: '#D3D3D3'})
      .backgroundColor(Color.White)
      // .backgroundBlurStyle(BlurStyle.Thin)
      .alignItems(VerticalAlign.Center)
      .justifyContent(FlexAlign.Start)
    // }
    // .alignItems(HorizontalAlign.Center)
    // .justifyContent(FlexAlign.Center)
    // .width('100%')
    // .height('100%')
  }
}
