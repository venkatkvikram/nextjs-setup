"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import { LocaleSwitcherSelect } from "../molecules/LocaleSwitcherSelect";
import { setLocale } from "@/store/localeSlice";
import { RootState } from "@/store/store";
import { useRouter, usePathname } from "@/i18n/navigation";

export const LocaleSwitcher = () => {
  const locale = useSelector((state: RootState) => state.locale.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Sync Redux store with current locale from URL on mount
  useEffect(() => {
    if (currentLocale && currentLocale !== locale) {
      dispatch(setLocale(currentLocale));
    }
  }, [currentLocale, locale, dispatch]);

  const handleLocaleChange = (newLocale: string) => {
    // Update Redux store
    dispatch(setLocale(newLocale));
    // Navigate to the new locale route
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-700">Language:</span>
      <LocaleSwitcherSelect locale={locale} setLocale={handleLocaleChange} />
    </div>
  );
};
