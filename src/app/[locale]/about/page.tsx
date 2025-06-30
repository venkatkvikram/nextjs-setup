import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link className="text-blue-900 underline cursor-pointer" href="/">
        Home
      </Link>
    </>
  );
}
