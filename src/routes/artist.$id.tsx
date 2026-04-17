import { Button } from "@/components/ui/button";
import { artistDetailsQueryOptions } from "@/features/artist/api/artist.queries";
import ArtistDetails from "@/features/artist/components/ArtistDetails";
import {
  createFileRoute,
  useLocation,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
export const Route = createFileRoute("/artist/$id")({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    const data = await context.queryClient.ensureQueryData(
      artistDetailsQueryOptions(params.id),
    );
    return {
      artist: data.artist,
    };
  },
});

function RouteComponent() {
  const { artist } = Route.useLoaderData();
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

  if (!artist) return <div>Artist Details not found</div>;
  return (
    <div className="py-8 sm:py-16 lg:py-24 mx-auto max-w-7xl px-4 sm:px-6  lg:px-8">
      <Button variant="link" className="h-fit mb-8" onClick={handleBack}>
        <ArrowLeft className="size-4" />
        {t(
          canGoBack && !cameFromSearch
            ? "artist.goBack"
            : "artist.backToSearch",
        )}
      </Button>
      <ArtistDetails artist={artist} />
    </div>
  );
}
