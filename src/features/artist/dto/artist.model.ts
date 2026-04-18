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
  youtubeLink?: string;
  image?: string;
}

export interface Artist extends ArtistPreview {
  imageSmall: string;
  imageMedium: string;
  biography: string;
  genre: string;
  topSongs: Song[];
}

export type ArtistDetailsError = "topSongsError" | "unknown";
