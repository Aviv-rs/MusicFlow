import axios from "axios";
import type { ArtistDto } from "../dto/artist.dto";
import type { SongDto } from "../dto/artist.dto";
import type { ArtistPreview, Song } from "../dto/artist.model";

const BASE_URL = "https://www.theaudiodb.com/api/v1/json/123";

export const artistApi = {
  searchArtists: async (
    query: string,
  ): Promise<{ artists: ArtistPreview[] | null }> => {
    const response = await axios.get<{ artists: ArtistDto[] }>(
      `${BASE_URL}/search.php?s=${query}`,
    );

    if (!response.data.artists || response.data.artists.length === 0) {
      return { artists: null };
    }
    const artists = response.data.artists.map((artist) => ({
      id: artist.idArtist,
      name: artist.strArtist,
      image: artist.strArtistThumb + "/medium",
    }));

    return { artists };
  },
  getTopSongsForArtist: async (
    artistId: string,
  ): Promise<{ songs: Song[] }> => {
    const response = await axios.get<{ songs: SongDto[] }>(
      `${BASE_URL}/track-top10-mb.php?s=${artistId}`,
    );
    const songs = response.data.songs.map((song) => ({
      id: song.idTrack,
      name: song.strTrack,
      album: song.strAlbum,
      duration: song.intDuration,
    }));

    return { songs };
  },
};
