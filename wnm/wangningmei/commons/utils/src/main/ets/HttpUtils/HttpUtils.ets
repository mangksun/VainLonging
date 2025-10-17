

import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { fileIo, fileUri } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
// import ResponseData from 'musicinfocommon';
// import MusicInfo from 'musicinfocommon';
import json from '@ohos.util.json';

const TAG: string = 'HttpUtils';
const IMAGE_URL: string = 'https://music-api.gdstudio.xyz/api.php?types=search&source=kuwo&count=1&name=晴天';
const RESOURCE_URL: string = 'https://music-api.gdstudio.xyz/api.php?types=search&source=kuwo&count=1&name=晴天';

/**
 * The class of header.
 */
class Header {
  contentType: string;

  constructor(contentType: string) {
    this.contentType = contentType;
  }
}

/**
 * The HttpUtils provides the capability of accessing the network through HTTP.
 */
export class HttpUtils {
  httpRequest: http.HttpRequest;

  constructor() {
    this.httpRequest = http.createHttp();
  }

  /**
   * The method of initiating a GET request through HTTP.
   */
  // async getHttpRequest(cacheDir: string): Promise<string> {
    async getHttpRequest() {
    let responsePictureUri: string = '';
    await this.httpRequest.request(IMAGE_URL, { method: http.RequestMethod.GET })
      .then((data: http.HttpResponse) => {
        console.log("network" + JSON.stringify( data.result));
        // let filePath = cacheDir + '/test.svg';
        // let file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
        // responsePictureUri = fileUri.getUriFromPath(filePath);
        // fileIo.writeSync(file.fd, data.result as ArrayBuffer);
        // fileIo.closeSync(file.fd);
      })
    // return responsePictureUri;
  }

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