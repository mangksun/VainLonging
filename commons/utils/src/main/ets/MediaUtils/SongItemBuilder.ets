
import { common } from '@kit.AbilityKit';
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { SongItem } from '../viewmodel/SongItem';
import { Logger } from './Logger';
import { HttpUtils } from '../HttpUtils/HttpUtils'

export default class SongItemBuilder {
  private context: common.UIAbilityContext | undefined = AppStorage.get('context');
  // private realUrl?: resourceManager.RawFileDescriptor;
  private songItem: SongItem | null = null;

  public async build(songItem: SongItem): Promise<SongItem> {

    let httpUtil: HttpUtils = new HttpUtils();
    this.songItem = await httpUtil.convertUrlAndStore(songItem)
    console.log('SongItemBuilder get songData success ' + JSON.stringify(this.songItem))
    // if (!this.context) {
    //   return this.songItem;
    // }
    // let rawfileFd = await this.context.resourceManager.getRawFd(songItem.src)
    //   .catch((error: BusinessError) => {
    //     Logger.error(`resourceManager error code ${error.code} message ${error.message}`);
    //   })
    // if (rawfileFd) {
    //   this.realUrl = rawfileFd;
    // } else {
    //   Logger.error('get rawfileFd failed')
    // }
    // Logger.info('MediaAssetBuilder build realUrl:' + this.realUrl);

    return this.songItem;
  }

  public getRealUrl(): string | undefined{
    Logger.info(`url ${this.songItem?.url_id}`)
    console.log(`realurl ${this.songItem?.url_id}`)
    return this.songItem?.url_id;
  }

  public async release(): Promise<void> {
    if (this.songItem !== null) {
    }
    this.songItem = null;
  }
}