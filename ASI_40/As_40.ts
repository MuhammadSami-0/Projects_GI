interface Album{
    singer:string;
    title:string
    tracks?:number
}
function make_album(singer: string, title: string, tracks?: number) {
    let album:Album = { singer, title };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  console.log(make_album("sami", "album_1"));
  console.log(make_album("sarim", "album_2"));
  console.log(make_album("abdullah", "album_3", 20));
  