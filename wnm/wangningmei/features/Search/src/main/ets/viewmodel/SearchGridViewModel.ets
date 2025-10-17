import { SearchGrid } from './GridItemData';

export class SearchGridList{
  getSGList(): SearchGrid[]{
    let ListDataList: Array<SearchGrid> = [];
    ListDataList.push(new SearchGrid('R&B','app.media.Justin'));
    ListDataList.push(new SearchGrid('国际流行','app.media.Justin'));
    ListDataList.push(new SearchGrid('C-Pop','app.media.Justin'));
    ListDataList.push(new SearchGrid('空间音频','app.media.Justin'));
    ListDataList.push(new SearchGrid('国语流行','app.media.Justin'));
    ListDataList.push(new SearchGrid('空间音频','app.media.Justin'));
    ListDataList.push(new SearchGrid('DJ混音精选','app.media.Justin'));
    ListDataList.push(new SearchGrid('月度音乐回忆','app.media.Justin'));
    ListDataList.push(new SearchGrid('创作与制作','app.media.Justin'));
    ListDataList.push(new SearchGrid('粤语流行','app.media.Justin'));
    ListDataList.push(new SearchGrid('嘻哈/说唱','app.media.Justin'));
    ListDataList.push(new SearchGrid('古典音乐','app.media.Justin'));

    return ListDataList;


  }

}


