import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

export function AppHeader() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center flex-col">
      <div className="p-3 rounded-full mb-4 bg-bg-tertiary w-fit">
        <Avatar className="p-0" withInnerBorder={false}>
          <AvatarImage alt="MusicFlow logo" src="/assets/images/logo.png" />
        </Avatar>
      </div>
      <h1 className="text-3xl font-bold mb-1">{t("app.title")}</h1>
      <p className="flex flex-wrap justify-center items-center mb-8">
        <span className="text-center">{t("app.description")}</span>
      </p>
    </header>
  );
}
