import { useSelector, useDispatch } from "react-redux";
import { LocaleSwitcherSelect } from "../molecules/LocaleSwitcherSelect";
import { setLocale } from "@/store/localeSlice";
import { RootState } from "@/store/store";

export const LocaleSwitcher = () => {
  const locale = useSelector((state: RootState) => state.locale.value);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-700">Language:</span>
      <LocaleSwitcherSelect locale={locale} setLocale={(val: string) => dispatch(setLocale(val))} />
    </div>
  );
};
