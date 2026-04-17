import { AppHeader } from "@/components/AppHeader";
import { ArtistSearchForm } from "@/features/artist/components/ArtistSearchForm";
import {
  createFileRoute,
  stripSearchParams,
  useNavigate,
} from "@tanstack/react-router";
import { artistSearchQueryOptions } from "@/features/artist/api/artist.queries";
import { ArtistSearchPreview } from "@/features/artist/components/ArtistSearchPreview";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const defaultSearchParams = {
  query: "",
};

export const Route = createFileRoute("/search")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): { query: string } => {
    return {
      query: (search.query as string) || "",
    };
  },
  search: {
    middlewares: [stripSearchParams(defaultSearchParams)],
  },
  loaderDeps: ({ search }) => [search.query],
  loader: async ({ context, deps }) => {
    if (!deps[0]) {
      return { artistSearchResult: [] };
    }
    const data = await context.queryClient.ensureQueryData(
      artistSearchQueryOptions(deps[0]),
    );
    return { artistSearchResult: data.artists };
  },
});

function RouteComponent() {
  const { t } = useTranslation();
  const { query } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const queryClient = useQueryClient();
  const { artistSearchResult } = Route.useLoaderData();

  const hasArtistsResults = artistSearchResult && artistSearchResult.length > 0;

  const handleSearchSubmit = async (query: string) => {
    try {
      await queryClient.fetchQuery(artistSearchQueryOptions(query));
    } catch (err) {
      console.warn("Error while trying to search: ", err);
      toast.error(t("search.generalError"), { richColors: true });
    }
    navigate({ search: (prev) => ({ ...prev, query }) });
  };

  return (
    <div className="sm:p-8 sm:pt-14 px-4 pt-8 max-w-4xl mx-auto">
      <AppHeader />
      <ArtistSearchForm
        className="mx-auto"
        query={query}
        onSubmit={handleSearchSubmit}
      />

      {query && (
        <div className="mt-4">
          <h2 className="text-xl sm:text-2xl font-bold my-3.5">
            {t(hasArtistsResults ? "search.resultsFound" : "search.noResults", {
              query,
            })}
          </h2>
          {hasArtistsResults &&
            artistSearchResult.map((artist) => (
              <ArtistSearchPreview key={artist.id} artist={artist} />
            ))}
        </div>
      )}
    </div>
  );
}
