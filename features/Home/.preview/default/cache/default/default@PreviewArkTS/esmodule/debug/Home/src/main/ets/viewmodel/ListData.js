export default class ListData {
    constructor(name, album, artist, pic) {
        this.name = name;
        this.album = album;
        this.artist = artist;
        this.pic = pic;
    }
    getStandardArtist(artist) {
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
//# sourceMappingURL=ListData.js.map