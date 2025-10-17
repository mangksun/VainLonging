

export default class MusicInfo {
  public id: string;
  public name: string;
  public artist: string[];
  public album: string;
  public pic_id: string;
  public url_id: string;
  public lyric_id: string;
  public source: string;


  constructor(id: string, name: string, artist: Array<string>, album: string, pic_id: string, url_id: string, lyric_id: string, source: string) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.album = album;
    this.pic_id = pic_id;
    this.url_id = url_id;
    this.lyric_id = lyric_id;
    this.source = source;
  }
}
export { MusicInfo }