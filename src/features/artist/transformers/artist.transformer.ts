import type { ArtistDto, SongDto } from "../dto/artist.dto";
import type { Artist, ArtistPreview, Song } from "../dto/artist.model";

export const transformArtistPreview = (artist: ArtistDto): ArtistPreview => {
  return {
    id: artist.strMusicBrainzID,
    name: artist.strArtist,
    image: artist.strArtistThumb + "/medium",
  };
};

export const transformArtist = (
  artist: ArtistDto,
  topSongs: Song[],
  imageSize?: "medium" | "small",
): Artist => {
  return {
    id: artist.strMusicBrainzID,
    name: artist.strArtist,
    image: artist.strArtistThumb + (imageSize ? `/${imageSize}` : ""),
    imageSmall: artist.strArtistThumb + "/small",
    imageMedium: artist.strArtistThumb + "/medium",
    biography: artist.strBiography,
    topSongs,
    genre: artist.strGenre,
  };
};

export const transformSong = (song: SongDto): Song => {
  const totalDurationSeconds = +song.intDuration / 1000; // convert ms string to mm:ss

  const durationMinutes = Math.floor(totalDurationSeconds / 60);
  const durationSeconds = Math.floor(totalDurationSeconds % 60);

  const duration = `${durationMinutes.toString().padStart(2, "0")}:${durationSeconds.toString().padStart(2, "0")}`;

  const youtubeVideoID = song.strMusicVid?.includes("youtube")
    ? song.strMusicVid.split("v=")[1]
    : null;

  const imagePlaceholder = `${import.meta.env.BASE_URL}assets/images/song-placeholder.png`;
  const image = youtubeVideoID
    ? `https://img.youtube.com/vi/${youtubeVideoID}/default.jpg`
    : imagePlaceholder;

  return {
    id: song.idTrack,
    name: song.strTrack,
    album: song.strAlbum,
    duration,
    youtubeLink: song.strMusicVid,
    image,
  };
};
