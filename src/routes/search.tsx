import { ThemeToggle } from "@/components/ThemeToggle";
import { AppHeader } from "@/components/AppHeader";
import { ArtistSearchForm } from "@/features/artist/components/ArtistSearchForm";
import { createFileRoute } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { artistSearchQueryOptions } from "@/features/artist/api/artist.queries";
import { useState } from "react";
import { ArtistSearchPreview } from "@/features/artist/components/ArtistSearchPreview";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/search")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const artistSearchResult = useQueryClient().getQueryData(
    artistSearchQueryOptions(query).queryKey,
  );
  const hasArtistsResults =
    artistSearchResult?.artists && artistSearchResult.artists.length > 0;
  return (
    <div className="sm:p-8 sm:pt-14 px-4 pt-8 max-w-4xl mx-auto">
      <ThemeToggle className="absolute right-4 top-4" />
      <AppHeader />
      <ArtistSearchForm className="mx-auto" onSubmit={setQuery} />
      {query && (
        <div className="mt-4">
          <h2 className="text-xl sm:text-2xl font-bold my-3.5">
            {t(hasArtistsResults ? "search.resultsFound" : "search.noResults", {
              query,
            })}
          </h2>
          {hasArtistsResults &&
            artistSearchResult?.artists?.map((artist) => (
              <ArtistSearchPreview key={artist.id} artist={artist} />
            ))}
        </div>
      )}
    </div>
  );
}
