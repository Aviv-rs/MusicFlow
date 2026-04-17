import { Separator } from "@/components/ui/separator";
import type { Artist, Song } from "../dto/artist.model";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FoldableText } from "@/components/FoldableText";
import { useTranslation } from "react-i18next";

const ArtistDetails = ({ artist }: { artist: Artist }) => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="space-y-8 sm:space-y-8 lg:space-y-16">
        {/* Section Header */}

        <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl flex items-center gap-4">
          <div className="p-3 rounded-full bg-bg-tertiary w-fit">
            <Avatar className="p-0" withInnerBorder={false}>
              <AvatarImage alt="MusicFlow logo" src="/assets/images/logo.png" />
            </Avatar>
          </div>
          {t("artist.artistDetailsTitle")}
        </h2>

        {/* Portfolio Content */}
        <div className="flex gap-6 md:flex-row flex-col relative">
          {/* Left Section */}
          <div className="w-full sm:w-1/2 basis-1/2 mx-auto">
            {artist.image && (
              <img
                id="artist-image"
                sizes="(max-width: 600px) 100vw, 600px"
                srcSet={`${artist.imageSmall} 400w, ${artist.imageMedium} 800w, ${artist.image} 1200w`}
                src={artist.image}
                alt={artist.name}
                className="w-full object-cover sm:sticky sm:top-4"
              />
            )}
          </div>

          {/* Right Section */}
          <div className="space-y-6 px-6 basis-1/2">
            <h3 className="text-3xl font-medium">{artist.name}</h3>

            <FoldableText
              text={artist.biography}
              className="text-muted-foreground"
            />

            <Separator />

            <h3 className="text-2xl font-medium">
              {t("artist.topSongs", { artistName: artist.name })}
            </h3>
            <ItemGroup className="space-y-4">
              {artist.topSongs.map((song) => (
                <SongPreview key={song.id} song={song} />
              ))}
            </ItemGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistDetails;

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export function SongPreview({ song }: { song: Song }) {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item key={song.name} variant="outline" asChild role="listitem">
        <a
          href={song.youtubeLink}
          className={song.youtubeLink ? "" : "pointer-events-none"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {song.image && (
            <ItemMedia variant="image">
              <img
                src={song.image}
                alt={song.name}
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
          )}
          <ItemContent>
            <ItemTitle className="line-clamp-1">
              {song.name} -{" "}
              <span className="text-muted-foreground">{song.album}</span>
            </ItemTitle>
          </ItemContent>
          <ItemContent className="flex-none text-center">
            <ItemDescription>{song.duration}</ItemDescription>
          </ItemContent>
        </a>
      </Item>
    </div>
  );
}
