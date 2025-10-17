

export default class ListData {
  public name: string;
  public album: string;
  public artist: string;
  public pic: string;


  constructor(name: string, album: string, artist: string, pic: string) {
    this.name = name;
    this.album = album;
    this.artist = artist;
    this.pic = pic;
  }
}

export { ListData }