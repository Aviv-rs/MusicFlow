export interface ArtistPreview {
  id: string;
  name: string;
  image: string;
}

export interface Song {
  id: string;
  name: string;
  album: string;
  duration: string;
}

export interface Artist extends ArtistPreview {
  biography: string;
  topSongs: Song[];
}
