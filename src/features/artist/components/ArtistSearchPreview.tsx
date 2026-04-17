import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { ArtistPreview } from "../dto/artist.model";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "@tanstack/react-router";

export function ArtistSearchPreview({ artist }: { artist: ArtistPreview }) {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <Card className="relative w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        id="artist-image"
        src={artist.image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover object-top"
      />
      <CardHeader>
        <CardTitle>{artist.name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button
          asChild
          variant={"outline"}
          className="w-full border-tertiary bg-tertiary/10 hover:bg-tertiary/20 dark:border-bg-primary dark:bg-primary/20 dark:hover:bg-primary/30"
        >
          <Link
            to="/artist/$id"
            params={{ id: artist.id }}
            state={{
              fromEntryPoint: { name: "/search", query: location.search.query },
            }}
          >
            {t("search.viewArtist")}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
