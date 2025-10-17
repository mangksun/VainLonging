
@Builder
export function PageTempBuilder() {
  PageTemp()
}


@Entry
@Component
struct PageTemp {
  @State message: string = 'Hello World';


  build() {
    RelativeContainer() {
      Text(this.message)
        .id('PageTempHelloWorld')
        .fontSize($r('app.float.page_text_font_size'))
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        // .onClick(() => {
        //   this.message = 'Welcome';
        // })
    }
    .height('100%')
    .width('100%')
  }
}