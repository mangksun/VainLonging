import {Lyric} from './Lyric'

export default class SongItem {
  public id: string;
  public name: string;
  public artist: string[];
  public album: string;
  public pic_id: string;
  public url_id: string;
  public lyric_id: string;
  public lyric?: Lyric;
  //记录歌曲在播放列表中的索引
  public index?: number;

  public  getStandardArtist(artist: string[]): string {
    let standardArtist = '';
    for (let i = 0; i < artist.length; i++) {
      standardArtist += artist[i];
      if (i !== artist.length - 1) {
        standardArtist += ',';
      }
    }
    return standardArtist;
  }

  constructor(id: string, name: string, artist: Array<string>, album: string, pic_id: string, url_id: string, lyric_id: string, lyric?: Lyric) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.album = album;
    this.pic_id = pic_id;
    this.url_id = url_id;
    this.lyric_id = lyric_id;
    this.lyric = lyric;

    // this.source = source;
  }

}
export { SongItem }