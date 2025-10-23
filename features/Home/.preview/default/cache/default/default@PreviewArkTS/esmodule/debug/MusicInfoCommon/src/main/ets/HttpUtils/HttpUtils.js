import http from '@ohos:net.http';
import fileIo from '@ohos:file.fs';
import fileUri from '@ohos:file.fileuri';
import hilog from '@ohos:hilog';
const TAG = 'HttpUtils';
const IMAGE_URL = 'https://img2.kuwo.cn/star/albumcover/500/s3s94/93/211513640.jpg';
const RESOURCE_URL = 'https://music-api.gdstudio.xyz/api.php?types=search&source=kuwo&count=1&name=晴天';
/**
 * The class of header.
 */
class Header {
    constructor(contentType) {
        this.contentType = contentType;
    }
}
/**
 * The HttpUtils provides the capability of accessing the network through HTTP.
 */
export class HttpUtils {
    constructor() {
        this.httpRequest = http.createHttp();
    }
    /**
     * The method of initiating a GET request through HTTP.
     */
    async getHttpRequest(cacheDir) {
        let responsePictureUri = '';
        await this.httpRequest.request(IMAGE_URL, { method: http.RequestMethod.GET })
            .then((data) => {
            let filePath = cacheDir + '/test.svg';
            let file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
            responsePictureUri = fileUri.getUriFromPath(filePath);
            fileIo.writeSync(file.fd, data.result);
            fileIo.closeSync(file.fd);
        });
        return responsePictureUri;
    }
    /**
     * The method of initiating a POST request through HTTP.
     */
    async postHttpRequest() {
        let responseData = [];
        await this.httpRequest.request(RESOURCE_URL, {
            method: http.RequestMethod.POST, extraData: {
                'types': 'search',
                'source': 'kuwo',
                'count': '1',
                'name': '晴天'
            },
            header: new Header('application/json;charset=UTF-8')
        }).then((data) => {
            let result = JSON.parse(data.result);
            responseData = result.value.list;
            console.log("Response: " + data.result);
        }).catch((err) => {
            hilog.info(0x0000, TAG, JSON.stringify(err));
        });
        return responseData;
    }
    /**
     * The method of destroying httpRequest.
     */
    destroyHttpRequest() {
        this.httpRequest.destroy();
    }
}
//# sourceMappingURL=HttpUtils.js.map