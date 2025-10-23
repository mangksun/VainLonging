

import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { fileIo, fileUri } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

import json from '@ohos.util.json';
import { SongItem } from '../viewmodel/SongItem';
import { UrlResponse } from '../viewmodel/UrlResponse';
import { Lyric } from '../viewmodel/Lyric';


/**
 * The HttpUtils provides the capability of accessing the network through HTTP.
 */
export class HttpUtils {
  httpRequest: http.HttpRequest;
  // targetUrl: string = '';
  MusicSource: string = 'netease';
  TAG: string = 'HttpUtils'
  //const lrcLineRegex: RegExp = new RegExp('\\[\\d{2,}:\\d{2}((\\.|:)\\d{2,})\\]', 'g');
  regex: RegExp = new RegExp('/btwaf=(\\d+)/', 'g');
  // url_id: string = '';
  // lyric_id: string = '';
  // pic_id: string = '';



  constructor() {
    this.httpRequest = http.createHttp();
  }

  /**
   * 获取 歌曲/专辑 搜索结果
   */
    async normalSearchRequest(name: string): Promise<SongItem[]> {
      let responseSongList: SongItem[] = [];
        await this.httpRequest.request(`https://music-api.gdstudio.xyz/api.php?types=search&source=${this.MusicSource}&count=20&name=${name}`, { method: http.RequestMethod.GET })
          .then((data: http.HttpResponse) => {
              responseSongList = JSON.parse(data.result as string);
              console.log(this.TAG + 'normalSearch: ' + "获取数据成功，数据：" + JSON.stringify(data.result));
              console.log(this.TAG + 'http: normalSearch: ' + "数据解析结果:" + JSON.stringify(responseSongList));
          })
          .catch((err: Error) => {
            hilog.info(0x0000, this.TAG, JSON.stringify(err));
          });
      return responseSongList;
    }


  /**
   * 获取歌曲音频文件url
   */
  async httpAudioUrlRequest(url_id: string): Promise<string> {
    this.MusicSource = AppStorage.get('musicsource')!
    let AudioUrl: string = '';
    let RequestUrl: string = 'https://music-api.gdstudio.xyz/api.php?types=url&br=999' +'&source=' + this.MusicSource + '&id=' + url_id;
    await this.httpRequest.request(RequestUrl, { method: http.RequestMethod.GET })
      .then((data: http.HttpResponse) => {
        let tempUrl: UrlResponse = JSON.parse(data.result as string);
        AudioUrl = tempUrl.url;
        console.log(this.TAG + 'AudioUrlRequest: ' + "数据解析结果:" + JSON.stringify(AudioUrl));
        return AudioUrl;
      })
      .catch((err: Error) => {
        hilog.info(0x0000, this.TAG, JSON.stringify(err));
      });
    return AudioUrl;
  }


  /**
   * 获取专辑封面url
   */
  async httpPicUrlRequest(pic_id: string): Promise<string> {
    this.MusicSource = AppStorage.get('musicsource')!
    let PictureUrl: string = '';
    let RequestUrl: string = 'https://music-api.gdstudio.xyz/api.php?types=pic&size=500' +'&source=' + this.MusicSource + '&id=' + pic_id;
    await this.httpRequest.request(RequestUrl, { method: http.RequestMethod.GET })
      .then((data: http.HttpResponse) => {
        let tempUrl: UrlResponse = JSON.parse(data.result as string);
        PictureUrl = tempUrl.url;
        console.log(this.TAG + 'AudioUrlRequest: ' + "数据解析结果:" + JSON.stringify(PictureUrl));
      })
      .catch((err: Error) => {
        hilog.info(0x0000, this.TAG, JSON.stringify(err));
      });
    return PictureUrl;
  }
  /**
     * 获取歌词
     */
  async httpLyricRequest(lyric_id: string): Promise<Lyric> {
    this.MusicSource = AppStorage.get('musicsource')!
    let lyric: Lyric = new Lyric('','')
    let RequestUrl: string = 'https://music-api.gdstudio.xyz/api.php?types=lyric' +'&source=' + this.MusicSource + '&id=' + lyric_id;
    await this.httpRequest.request(RequestUrl, { method: http.RequestMethod.GET })
      .then((data: http.HttpResponse) => {
        lyric = JSON.parse(data.result as string);
        console.log(this.TAG + 'LyricRequest: ' + "数据解析结果:" + JSON.stringify(lyric));
      })
      .catch((err: Error) => {
        hilog.info(0x0000, this.TAG, JSON.stringify(err));
      });
    return lyric;
  }

  /**
   * 将 音频id/专辑图id/歌词id 转换为实际 音频url/专辑图url/歌词字符串
   */
  async convertUrlAndStore(songItem: SongItem): Promise<SongItem> {
    this.MusicSource = AppStorage.get('musicsource')!
    let SongItem: SongItem = songItem;
    console.log('1httpsearch: ' + "开始转换");
    SongItem.url_id = await this.httpAudioUrlRequest(songItem.url_id);
    console.log('1httpsearch: ' + "获取音频url成功" + SongItem.url_id);
    SongItem.pic_id = await this.httpPicUrlRequest(songItem.pic_id);
    console.log('1httpsearch: ' + "获取专辑图url成功" + SongItem.pic_id);
    SongItem.lyric = await this.httpLyricRequest(songItem.lyric_id);
    console.log('1httpsearch: ' + "获取歌词成功" + JSON.stringify(SongItem.lyric));

    return SongItem;
  }

  async albumSearchRequest(album: string): Promise<SongItem[]>{
    let responseSongList: SongItem[] = [];
    //重定向新增表项记录: `&btwaf=${RedirectString}`
    await this.httpRequest.request(`https://music-api.gdstudio.xyz/api.php?types=search&source=${this.MusicSource}_album&count=20&name=${album}`, { method: http.RequestMethod.GET })
      .then((data: http.HttpResponse) => {
          responseSongList = JSON.parse(data.result as string);
        console.log(this.TAG + 'albumSearch: ' + "获取数据成功，数据：" + JSON.stringify(data.result));
        console.log(this.TAG + 'albumSearch: ' + "数据解析结果:" + JSON.stringify(responseSongList));
      })
      .catch((err: Error) => {
        hilog.info(0x0000, this.TAG, JSON.stringify(err));
      });
    return responseSongList;

  }

  destroyHttpRequest() {
    this.httpRequest.destroy();
  }
}