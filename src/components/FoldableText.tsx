import { useState, type CSSProperties } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const FoldableText = ({
  text,
  maxLines = 3,
  className,
}: {
  text: string;
  maxLines?: number;
  className?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const textClassName = isExpanded
    ? ""
    : `line-clamp-[var(--line-clamp-count)]`;

  return (
    <div className="relative">
      <p
        className={cn(textClassName, className)}
        style={{ "--line-clamp-count": maxLines } as CSSProperties}
      >
        {text}
      </p>
      <Button
        className="underline hover:bg-transparent inline-block p-0"
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? t("common.readLess") : t("common.readMore")}
      </Button>
    </div>
  );
};
