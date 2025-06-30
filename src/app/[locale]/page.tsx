import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      {/* Add navigation links here if needed */}
    </div>
  );
}
