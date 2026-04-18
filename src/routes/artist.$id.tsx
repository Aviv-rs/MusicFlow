import { Button } from "@/components/ui/button";
import { artistDetailsQueryOptions } from "@/features/artist/api/artist.queries";
import ArtistDetails from "@/features/artist/components/ArtistDetails";
import {
  createFileRoute,
  useLocation,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import i18next from "i18next";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
export const Route = createFileRoute("/artist/$id")({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    const queryKey = artistDetailsQueryOptions(params.id).queryKey;
    const lastUpdated =
      context.queryClient.getQueryState(queryKey)?.dataUpdatedAt ?? 0;
    try {
      const { artist, errorType, error } =
        await context.queryClient.ensureQueryData(
          artistDetailsQueryOptions(params.id),
        );

      const nextUpdate =
        context.queryClient.getQueryState(queryKey)?.dataUpdatedAt ?? 0;
      const isFreshQuery = nextUpdate > lastUpdated;

      if (isFreshQuery && error) {
        console.error(error);
      }
      if (isFreshQuery && errorType === "topSongsError") {
        toast.error(i18next.t("artist.topSongsError"), {
          richColors: true,
        });
      }
      return {
        artist,
        errorType,
        error,
      };
    } catch (error) {
      console.error(error);
      return {
        artist: null,
        errorType: "unknown",
        error,
      };
    }
  },
});

function RouteComponent() {
  const { artist, error } = Route.useLoaderData();
  const router = useRouter();
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate({ from: Route.fullPath });

  const cameFromSearch = location.state?.fromEntryPoint?.name === "/search";
  const canGoBack = router.history.canGoBack();

  const handleBack = () => {
    if (canGoBack) {
      router.history.back();
    } else {
      navigate({
        to: "/search",
        search: { query: "" },
      });
    }
  };

  return (
    <div className="py-8 sm:py-16 lg:py-24 mx-auto max-w-7xl px-4 sm:px-6  lg:px-8">
      {!artist && (
        <h2 className="text-2xl font-semibold my-8">
          {t(
            error
              ? "artist.artistDetailsError"
              : "artist.artistDetailsNotFound",
          )}
        </h2>
      )}
      <Button variant="link" className="h-fit mb-8" onClick={handleBack}>
        <ArrowLeft className="size-4" />
        {t(
          canGoBack && !cameFromSearch
            ? "artist.goBack"
            : "artist.backToSearch",
        )}
      </Button>
      {artist && <ArtistDetails artist={artist} />}
    </div>
  );
}
