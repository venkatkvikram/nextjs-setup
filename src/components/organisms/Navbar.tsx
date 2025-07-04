import { useTranslations } from "next-intl";
import { Button } from "../atoms/Button";
import { Link } from "@/i18n/navigation";
import { navigation } from "@/config/navigation";

export const NavBar = () => {
  const t = useTranslations("global");

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="flex gap-4">
        {navigation.map((item) => (
          <Link key={item.path} href={item.path}>
            <Button>{t(item.labelKey)}</Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};
