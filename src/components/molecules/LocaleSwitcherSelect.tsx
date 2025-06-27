import { Select } from "../atoms/Select";
import { locales } from "../../i18n/routing";

export const LocaleSwitcherSelect = ({
  locale,
  setLocale,
}: {
  locale: string;
  setLocale: (val: string) => void;
}) => <Select options={locales} value={locale} onChange={(e) => setLocale(e.target.value)} />;
