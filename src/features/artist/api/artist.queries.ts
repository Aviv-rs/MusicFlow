import { queryOptions } from "@tanstack/react-query";
import { artistApi } from "./artist.api";

export const artistQueryKeys = {
  search: (query: string) => ["artist", query] as const,
  topSongs: (artistId: string) => ["artist", artistId, "top-songs"] as const,
};

export function artistSearchQueryOptions(query: string) {
  return queryOptions({
    queryKey: artistQueryKeys.search(query),
    queryFn: () => artistApi.searchArtists(query),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!query,
  });
}

export function topSongsQueryOptions(artistId: string) {
  return queryOptions({
    queryKey: artistQueryKeys.topSongs(artistId),
    queryFn: () => artistApi.getTopSongsForArtist(artistId),
  });
}
