import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme, type Theme } from "@/lib/theme-context";
import { useTranslation } from "react-i18next";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();
  const { t } = useTranslation();
  const themes: Theme[] = ["dark", "light", "system"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={className ?? ""} variant="ghost" size="icon-lg">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-140 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-140 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            {t(`common.${theme}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
