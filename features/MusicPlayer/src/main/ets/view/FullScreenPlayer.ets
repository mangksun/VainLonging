/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { common } from '@kit.AbilityKit';
import { util } from '@kit.ArkTS';
import { SongItem } from 'utils'
import { LrcEntry } from '../lyric/LrcEntry';
import { parseKrcLyric, parseLrcLyric } from '../lyric/LrcUtils';
import LrcView from '../lyric/LrcView';
import { LyricScrollEffect, LyricTopPosition } from '../lyric/LyricConst';
import { LyricFile } from '../lyric/LyricConst';

const TAG = 'LyricsComponent';

@Builder
export function FullScreenPlayerBuilder() {
  FullScreenPlayer();
}

@Component
export struct FullScreenPlayer {
  @StorageLink('progress') time: number = 0;
  @StorageLink('isFoldFull') isFoldFull: boolean = false;
  @State progress: number = 0.01;
  @State progressText: string = '';
  @State lyricScrollEffect: LyricScrollEffect = LyricScrollEffect.Line;
  @State mLrcEntryList: Array<LrcEntry> = [];
  @StorageLink('songList') songList: SongItem[] = [];
  @StorageProp('selectIndex') @Watch('getLrcEntryList') selectIndex: number = 0;
  private context: common.UIAbilityContext | undefined = AppStorage.get('context');
  @StorageLink('isPlay') isPlay: boolean = false;
  // @Link isShowControl: boolean;
  // @Link isTablet: boolean;
  @State intervalID: number = 0;
  @State pageShowTime: number = 0;

  aboutToAppear() {
    this.getLrcEntryList();
    console.log('成功构建大屏播放器')
  }


  getLrcEntryList() {
    this.mLrcEntryList = [];
    // if (!this.context) {
    //   return;
    // }
    let standString: string | undefined= this.songList[this.selectIndex].lyric!.lyric.toString();
    console.log('HttpUtils ' + standString)
    if(standString){
      this.mLrcEntryList = parseLrcLyric(standString);
      console.log('成功跳转到大屏' + JSON.stringify(this.mLrcEntryList))
    }


  }

  build() {
    Column() {
      LrcView({
        lyricMilliSecondsTime: this.time,
        mLrcEntryList: this.mLrcEntryList,
        lyricScrollEffect: this.lyricScrollEffect,
        lyricTopPosition: LyricTopPosition.Middle
      })
        .layoutWeight(1)

    }.width('100%')
    .height('100%')
  }
}