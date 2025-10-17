import { ListData } from './ListData';

export class ListDataViewModel {


  getListDataList(): ListData[] {
    let ListDataList: Array<ListData> = [];
    ListDataList.push(new ListData('','逆光',['孙燕姿'],'https://y.gtimg.cn/music/photo_new/T002R300x300M000000P3l050Olt27.jpg'));
    ListDataList.push(new ListData('', '偷故事的人', ['张惠美'], 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vt8C105tVY0.jpg'));
    // ListDataList.push(new ListData('', '十二新作', ['周杰伦'], 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg'));
    ListDataList.push(new ListData('', 'Prisoner of Love', ['宇多田光 (宇多田ヒカル)'], 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003d8ORP4BHlMj.jpg'));
    ListDataList.push(new ListData('', 'E-SIDE 2', ['YOASOBI (ヨアソビ)'], 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024sRRn3KsAXK.jpg'));
    ListDataList.push(new ListData('', 'First Love', ['宇多田光 (宇多田ヒカル)'], 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002SwRbo2GrlLp.jpg'));
    ListDataList.push(new ListData('','勇气',['梁静茹'],'https://p3.music.126.net/PavIMxZq16K7-0fSF5n-yg==/109951163240604120.jpg?param=300y300'));
    ListDataList.push(new ListData('', '失眠症候群', ['颜人中'], 'https://p3.music.126.net/8DkTnzi7jdjWGYl4qbwLCg==/109951164517295956.jpg?param=300y300'));
    ListDataList.push(new ListData('', '渡 The Crossing', ['薛之谦'], 'https://p3.music.126.net/fNbj5uDwltSDLbETdnEYYQ==/109951163069265719.jpg?param=300y300'));
    ListDataList.push(new ListData('', '我要快乐', ['张惠美'], 'https://p3.music.126.net/lmxB0id70BnxR849m1V-2A==/109951171942873077.jpg?param=300y300'));
    ListDataList.push(new ListData('', '沈香学', ['ずっと真夜中でいいのに。'], 'https://p3.music.126.net/K91EJHEHhOie6daCAnM2Tw==/109951168661764575.jpg?param=500y500'));
    ListDataList.push(new ListData('', 'DAWN', ['Aimer'], 'https://p3.music.126.net/-NpYyW2ejTr7kcb-BxwsSg==/109951166919049170.jpg?param=500y500'));
    ListDataList.push(new ListData('', 'Penny Rain', ['Aimer'], 'https://p3.music.126.net/5u3oshzBoleNka04BlelwA==/109951166919062729.jpg?param=500y500'));
    ListDataList.push(new ListData('', '半熟宣言', ['杨丞琳'], 'https://p3.music.126.net/xgqaL3g1WV3r-y7SDGuDZA==/109951170708260156.jpg?param=500y500'));
    ListDataList.push(new ListData('', '自定义', ['许嵩'], 'https://p3.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg?param=500y500'));
    ListDataList.push(new ListData('', 'BOOTLEG', ['米津玄師', 'ELAIZA'], 'https://p3.music.126.net/IeyCexR3Hg9NnVY9TDCD3w==/109951166530781958.jpg?param=500y500'));
    ListDataList.push(new ListData('', '年华', ['刘若英'], 'https://p3.music.126.net/7O6b7GhKZhjPHkw5J3LF8w==/109951163351828303.jpg?param=500y500'));
    ListDataList.push(new ListData('', 'Autumn Variations', ['Ed Sheeran'], 'https://p3.music.126.net/dVLXwk83H_lXToVHNv5ldw==/109951168944758007.jpg?param=500y500'));
    ListDataList.push(new ListData('', '我要的幸福', ['孙燕姿'], 'https://p3.music.126.net/1HJILQwc62AfvcXkGgVJHQ==/109951165549820772.jpg?param=500y500'));
    // ListDataList.push(new ListData('', '我要的幸福', ['孙燕姿'], 'https://p3.music.126.net/1HJILQwc62AfvcXkGgVJHQ==/109951165549820772.jpg?param=500y500'));
    // ListDataList.push(new ListData('', '我要的幸福', ['孙燕姿'], 'https://p3.music.126.net/1HJILQwc62AfvcXkGgVJHQ==/109951165549820772.jpg?param=500y500'));
    // ListDataList.push(new ListData('', '我要的幸福', ['孙燕姿'], 'https://p3.music.126.net/1HJILQwc62AfvcXkGgVJHQ==/109951165549820772.jpg?param=500y500'));
    // ListDataList.push(new ListData('', '我要的幸福', ['孙燕姿'], 'https://p3.music.126.net/1HJILQwc62AfvcXkGgVJHQ==/109951165549820772.jpg?param=500y500'));
    // ListDataList.push(new ListData('', '我要的幸福', ['孙燕姿'], 'https://p3.music.126.net/1HJILQwc62AfvcXkGgVJHQ==/109951165549820772.jpg?param=500y500'));
    return ListDataList;
  }

  RandomItem(List: ListData[], count: number): ListData[] {
    let ListDataList: Array<ListData> = List;
    for(let i = 0; i < ListDataList.length; i++){
      let index = Math.floor(Math.random() * ListDataList.length);
      let exchangeItem: ListData = ListDataList[i];
      ListDataList[i] = ListDataList[index];
      ListDataList[index] = exchangeItem;
    }
    return ListDataList.slice(0, count);
  }

  getFeaturedRecommendationsList(List: ListData[], count: number): ListData[] {
    let ListDataList: Array<ListData> = [];
    ListDataList = this.RandomItem(List, count);
    return ListDataList;
  }

  getRecentlyPlayedList(List: ListData[], count: number): ListData[] {
    let ListDataList: Array<ListData> = [];
    ListDataList.push(new ListData('0','',[],''));
    ListDataList = this.RandomItem(List, count);
    return ListDataList;
  }


  getPopularList(List: ListData[], count: number): ListData[] {
    let ListDataList: Array<ListData> = [];
    ListDataList.push(new ListData('1','',[],''));
    ListDataList = this.RandomItem(List, count);
    return ListDataList;
  }

  getNewReleasesList(List: ListData[], count: number): ListData[] {
    let ListDataList: Array<ListData> = [];
    ListDataList.push(new ListData('2','',[],''));
    ListDataList = this.RandomItem(List, count);
    return ListDataList;
  }

  getRecommendList(List: ListData[], count: number): ListData[] {
    let ListDataList: Array<ListData> = [];
    ListDataList.push(new ListData('3','',[],''));
    ListDataList = this.RandomItem(List, count);
    return ListDataList;
  }

  getHisMoreList(): ListData[] {
    let ListDataList: Array<ListData> = [];
    ListDataList.push(new ListData('','',[],''));
    ListDataList.push(new ListData('The Story Of The Wind And I','The Story Of The Wind And I',['Ado', '周杰伦'],'app.media.wind_and_I'));
    ListDataList.push(new ListData('铃芽之旅', 'Suzume(feat.Toaka)', ['RADWIMPS'], 'app.media.gaomu'));
    ListDataList.push(new ListData('铃芽之旅1', 'Suzume(feat.Toaka)', ['RADWIMPS'], 'app.media.gaomu'));
    ListDataList.push(new ListData('铃芽之旅2', 'Suzume(feat.Toaka)', ['RADWIMPS'], 'app.media.gaomu'));
    ListDataList.push(new ListData('铃芽之旅3', 'Suzume(feat.Toaka)', ['RADWIMPS'], 'app.media.gaomu'));
    ListDataList.push(new ListData('铃芽之旅4', 'Suzume(feat.Toaka)', ['RADWIMPS'], 'app.media.gaomu'));
    return ListDataList;
  }

}
