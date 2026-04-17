import axios from "axios";
import type { ArtistDto } from "../dto/artist.dto";
import type { SongDto } from "../dto/artist.dto";
import type { Artist, ArtistPreview, Song } from "../dto/artist.model";
import {
  transformArtist,
  transformArtistPreview,
  transformSong,
} from "../transformers/artist.transformer";

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
    const artists = response.data.artists.map(transformArtistPreview);

    return { artists };
  },
  getArtistDetails: async (
    artistId: string,
  ): Promise<{ artist: Artist | null }> => {
    const artistResponsePromise = axios.get<{ artists: ArtistDto[] }>(
      `${BASE_URL}/artist-mb.php?i=${artistId}`,
    );

    const topSongsResponsePromise = artistApi.getTopSongsForArtist(artistId);

    const [artistResponse, topSongsResponse] = await Promise.all([
      artistResponsePromise,
      topSongsResponsePromise,
    ]);

    if (
      !artistResponse.data.artists ||
      artistResponse.data.artists.length === 0
    ) {
      return { artist: null };
    }
    const artist = artistResponse.data.artists[0];

    return { artist: transformArtist(artist, topSongsResponse.songs) };
  },
  getTopSongsForArtist: async (
    artistId: string,
  ): Promise<{ songs: Song[] }> => {
    const response = await axios.get<{ track: SongDto[] }>(
      `${BASE_URL}/track-top10-mb.php?s=${artistId}`,
    );

    if (!response.data.track || response.data.track.length === 0) {
      return { songs: [] };
    }
    const songs = response.data.track.map(transformSong);

    return { songs };
  },
};
