import { useState } from "react";
import { LocaleSwitcherSelect } from "../molecules/LocaleSwitcherSelect";
import { locales } from "../../i18n/routing";

export const LocaleSwitcher = () => {
  const [locale, setLocale] = useState(locales[0]);
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-700">Language:</span>
      <LocaleSwitcherSelect locale={locale} setLocale={setLocale} />
    </div>
  );
};
