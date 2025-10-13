

import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { fileIo, fileUri } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

import json from '@ohos.util.json';
import { SongItem } from '../viewmodel/SongItem';
import { UrlResponse } from '../viewmodel/UrlResponse';
import { Lyric } from '../viewmodel/Lyric';

const TAG: string = 'HttpUtils';


/**
 * The HttpUtils provides the capability of accessing the network through HTTP.
 */
export class HttpUtils {
  httpRequest: http.HttpRequest;
  // targetUrl: string = '';
  curMusicSource: string = 'netease';
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
    async httpSearchRequest(targetUrl: string): Promise<SongItem[]> {
      let responseSongList: SongItem[] = [];
        await this.httpRequest.request(targetUrl, { method: http.RequestMethod.GET })
          .then((data: http.HttpResponse) => {
            // if(data.result.toString().includes(`<html><meta charset=\\"utf-8\\" />`)){
            //   console.log('httpsearch: ' + '即将重定向');
            //   let RedirectString: string | undefined= data.result.toString().match(this.regex)?.toString();
            //   if(RedirectString){
            //     return this.Redirect(RedirectString)
            //   }
            //   return responseSongList;
            // }else{
              // let songs = JSON.stringify(data.result) as Array<MusicInfo>
              console.log('httpsearch: ' + "获取数据成功，数据：" + JSON.stringify(data.result));
              responseSongList = JSON.parse(data.result as string);
              // return responseSongList;
            // }
            console.log("Get Result Successfully" + JSON.stringify(data.result));

          })
          .catch((err: Error) => {
            hilog.info(0x0000, TAG, JSON.stringify(err));
          });
      return responseSongList;
    }


  /**
   * 获取歌曲音频文件url
   */
  async httpUrlRequest(url_id: string): Promise<string> {
    let AudioUrl: string = '';
    let RequestUrl: string = 'https://music-api.gdstudio.xyz/api.php?types=url&br=999' +'&source=' + this.curMusicSource + '&id=' + url_id;
    await this.httpRequest.request(RequestUrl, { method: http.RequestMethod.GET })
      .then((data: http.HttpResponse) => {
        console.log("Get Result Successfully" + JSON.stringify(data.result));
        // let songs = JSON.stringify(data.result) as Array<MusicInfo>

        let tempUrl: UrlResponse = JSON.parse(data.result as string);
        AudioUrl = tempUrl.url;
        return AudioUrl;
      })
      .catch((err: Error) => {
        hilog.info(0x0000, TAG, JSON.stringify(err));
      });
    return AudioUrl;
  }


  /**
   * 获取专辑封面url
   */
  async httpPicUrlRequest(pic_id: string): Promise<string> {
    let PictureUrl: string = '';
    let RequestUrl: string = 'https://music-api.gdstudio.xyz/api.php?types=pic&size=500' +'&source=' + this.curMusicSource + '&id=' + pic_id;
    await this.httpRequest.request(RequestUrl, { method: http.RequestMethod.GET })
      .then((data: http.HttpResponse) => {
        console.log("Get Result Successfully" + JSON.stringify(data.result));
        let tempUrl: UrlResponse = JSON.parse(data.result as string);
        PictureUrl = tempUrl.url;
      })
      .catch((err: Error) => {
        hilog.info(0x0000, TAG, JSON.stringify(err));
      });
    return PictureUrl;
  }
  /**
     * 获取歌词
     */
  async httpLyricRequest(lyric_id: string): Promise<Lyric> {
    let lyric: Lyric = new Lyric('','')
    let RequestUrl: string = 'https://music-api.gdstudio.xyz/api.php?types=lyric' +'&source=' + this.curMusicSource + '&id=' + lyric_id;
    await this.httpRequest.request(RequestUrl, { method: http.RequestMethod.GET })
      .then((data: http.HttpResponse) => {
        console.log("Get Result Successfully" + JSON.stringify(data.result));
        lyric = JSON.parse(data.result as string);
      })
      .catch((err: Error) => {
        hilog.info(0x0000, TAG, JSON.stringify(err));
      });
    return lyric;
  }

  /**
   * 将 音频id/专辑图id/歌词id 转换为实际 音频url/专辑图url/歌词字符串
   */
  async convertUrlAndStore(songItem: SongItem): Promise<SongItem> {
    let SongItem: SongItem = songItem;
    console.log('1httpsearch: ' + "开始转换");
    SongItem.url_id = await this.httpUrlRequest(songItem.url_id);
    console.log('1httpsearch: ' + "获取音频url成功" + SongItem.url_id);
    SongItem.pic_id = await this.httpPicUrlRequest(songItem.pic_id);
    console.log('1httpsearch: ' + "获取专辑图url成功" + SongItem.pic_id);
    SongItem.lyric = await this.httpLyricRequest(songItem.lyric_id);
    console.log('1httpsearch: ' + "获取歌词成功" + JSON.stringify(SongItem.lyric));

    return SongItem;
  }

  async RedirectSearchRequest(RedirectUrl: string): Promise<SongItem[]>{
    let responseSongList: SongItem[] = [];
    //`&btwaf=${RedirectString}`
    await this.httpRequest.request(RedirectUrl, { method: http.RequestMethod.GET })
      .then((data: http.HttpResponse) => {
          // let songs = JSON.stringify(data.result) as Array<MusicInfo>
        if(data.result.toString().includes('<html><meta charset="utf-8" />')){
          console.log("重定向检测成功")
          console.log("重定向检测成功" + JSON.stringify(data.result))
          let RedirectString: string | undefined= data.result.toString().match(this.regex)?.toString();
          console.log("重定向检测成功" + RedirectString)
          //   if(RedirectString){
          //     return this.Redirect(RedirectString)
          //   }
        }else{
          responseSongList = JSON.parse(data.result as string);
          console.log('httpsearch: ' + "重定向获取数据成功" + JSON.stringify(data.result));
        }


      })
      .catch((err: Error) => {
        hilog.info(0x0000, TAG, JSON.stringify(err));
      });
    return responseSongList;

  }
//   if(data.result.toString().includes(`<html><meta charset=\\"utf-8\\" />`)){
//   console.log('httpsearch: ' + '即将重定向');
//   let RedirectString: string | undefined= data.result.toString().match(this.regex)?.toString();
//   if(RedirectString){
//     return this.Redirect(RedirectString)
//   }
//   return responseSongList;
// }else{
//   // let songs = JSON.stringify(data.result) as Array<MusicInfo>
//   console.log('httpsearch: ' + "获取数据成功，数据：" + JSON.stringify(data.result));
//   responseSongList = JSON.parse(data.result as string);
//   return responseSongList;
// }

  /**
   * The method of initiating a POST request through HTTP.
   */
  // async postHttpRequest(): Promise<MusicInfo[]> {
  //   let responseData: Array<MusicInfo> = [];
  //   await this.httpRequest.request(RESOURCE_URL,
  //     {
  //       method: http.RequestMethod.POST, extraData: {
  //       'types':'search',
  //       'source':'kuwo',
  //       'count':'1',
  //       'name':'晴天'
  //     },
  //       header: new Header('application/json;charset=UTF-8')
  //     }).then((data: http.HttpResponse) => {
  //     let result: ResponseData = JSON.parse(data.result as string);
  //     responseData = result.value.list;
  //     console.log("Response: " + data.result as string);
  //   }).catch((err: Error) => {
  //     hilog.info(0x0000, TAG, JSON.stringify(err));
  //   });
  //   return responseData;
  // }

  /**
   * The method of destroying httpRequest.
   */
  destroyHttpRequest() {
    this.httpRequest.destroy();
  }
}