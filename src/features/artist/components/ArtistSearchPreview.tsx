import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { ArtistPreview } from "../dto/artist.model";
import { useTranslation } from "react-i18next";

export function ArtistSearchPreview({ artist }: { artist: ArtistPreview }) {
  const { t } = useTranslation();
  return (
    <Card className="relative w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={artist.image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover object-top"
      />
      <CardHeader>
        <CardTitle>{artist.name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button variant={"outline"} className="w-full">
          {t("search.viewArtist")}
        </Button>
      </CardFooter>
    </Card>
  );
}
