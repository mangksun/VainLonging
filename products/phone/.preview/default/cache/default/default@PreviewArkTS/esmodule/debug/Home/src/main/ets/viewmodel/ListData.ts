export default class ListData {
    //歌曲名
    public name: string;
    //专辑名
    public album: string;
    public artist: string[];
    //专辑封面url
    public pic: string;
    constructor(name: string, album: string, artist: string[], pic: string) {
        this.name = name;
        this.album = album;
        this.artist = artist;
        this.pic = pic;
    }
    public getStandardArtist(artist: string[]): string {
        let standardArtist = '';
        for (let i = 0; i < artist.length; i++) {
            standardArtist += artist[i];
            if (i !== artist.length - 1) {
                standardArtist += ',';
            }
        }
        return standardArtist;
    }
    ;
}
export { ListData };
