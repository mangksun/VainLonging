
import MusicInfo from './MusicInfo';

export default class Value {
  public list: Array<MusicInfo>;

  constructor(list: Array<MusicInfo>) {
    this.list = list;
  }

}

export { Value }