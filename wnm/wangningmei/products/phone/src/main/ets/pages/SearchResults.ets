import { SearchResults } from 'search'

@Entry
@Component
struct SearchResultsPage {
  build() {
    Column() {
      SearchResults()
    }
    .width('100%')
    .height('100%')
  }
}
