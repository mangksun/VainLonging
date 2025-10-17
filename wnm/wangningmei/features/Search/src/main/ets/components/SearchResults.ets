import { http } from '@kit.NetworkKit'

interface SearchResultItem {
  id: string;
  name: string;
  artist: Array<string>;
  album: string;
  pic_id: string;
  url_id: string;
  lyric_id: string;
  source: string;
}

@Component
export struct SearchResults {
  @State loading: boolean = false;
  @State errorMsg: string = '';
  @State results: Array<SearchResultItem> = [];

  private httpRequest: http.HttpRequest = http.createHttp();
  private readonly apiBase: string = 'https://music-api.gdstudio.xyz/api.php';

  aboutToAppear(): void {
    const keyword = AppStorage.get<string>('SearchKeyword') ?? '';
    if (!keyword) {
      this.errorMsg = '请输入关键字';
      return;
    }
    this.fetchResults(keyword);
  }

  aboutToDisappear(): void {
    this.httpRequest.destroy();
  }

  private buildPicUrl(picId: string): string {
    const url = `${this.apiBase}?types=pic&source=kuwo&size=300&id=${encodeURIComponent(picId)}`;
    return url;
  }

  private async fetchResults(keyword: string) {
    this.loading = true;
    this.errorMsg = '';
    const url = `${this.apiBase}?types=search&source=kuwo&count=20&name=${encodeURIComponent(keyword)}`;
    try {
      const resp = await this.httpRequest.request(url, { method: http.RequestMethod.GET });
      const text = String(resp.result);
      const data = JSON.parse(text) as Array<SearchResultItem>;
      this.results = Array.isArray(data) ? data : [];
    } catch (e) {
      this.errorMsg = '搜索失败，请稍后重试';
    } finally {
      this.loading = false;
    }
  }

  build() {
    Column({ space: 12 }) {
      Row() {
        SymbolGlyph($r('sys.symbol.chevron_left'))
          .fontSize(24)
          .onClick(() => {
            const stack = AppStorage.get<NavPathStack>('PathStack');
            stack?.pop();
          })
        Text('搜索结果')
          .fontSize(20)
          .fontWeight(FontWeight.Medium)
          .margin({ left: 8 })
      }
      .width('100%')
      .padding({ top: 12, bottom: 8 })

      if (this.loading) {
        Row() {
          LoadingProgress()
          Text('正在搜索...').margin({ left: 8 })
        }.width('100%').justifyContent(FlexAlign.Center).padding(16)
      } else if (this.errorMsg) {
        Text(this.errorMsg).fontColor(Color.Red).padding(16)
      } else if (this.results.length === 0) {
        Text('没有找到相关歌曲').padding(16)
      } else {
        List() {
          ForEach(this.results, (item: SearchResultItem) => {
            ListItem() {
              Row() {
                Image(this.buildPicUrl(item.pic_id))
                  .width(48)
                  .height(48)
                  .borderRadius(6)
                  .objectFit(ImageFit.Cover)

                Column() {
                  Text(item.name).fontSize(16).fontWeight(FontWeight.Medium)
                  Text(item.artist.join(' / ')).fontSize(12).fontColor('#666666')
                }.margin({ left: 12 }).layoutWeight(1)

                SymbolGlyph($r('sys.symbol.chevron_right')).fontSize(20)
              }
              .width('100%')
              .padding({ left: 12, right: 12, top: 10, bottom: 10 })
            }
          }, (item: SearchResultItem) => item.id)
        }
        .divider({ strokeWidth: 0.5, color: '#eeeeee' })
        .edgeEffect(EdgeEffect.None)
        .height('100%')
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.White)
  }
}


