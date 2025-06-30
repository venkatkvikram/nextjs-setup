import { useTranslations } from "next-intl";
import { Button } from "../atoms/Button";
import { Link } from "@/i18n/naviagtion";

export const NavBar = () => {
  const t = useTranslations("global");

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="flex gap-4">
        <Link href="/">
          <Button>{t("home")}</Button>
        </Link>
        <Link href="/about">
          <Button>{t("about")}</Button>
        </Link>
        <Link href="/contact">
          <Button>{t("contact")}</Button>
        </Link>
      </div>
    </nav>
  );
};
