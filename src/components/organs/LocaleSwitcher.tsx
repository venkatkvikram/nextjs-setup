import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setLocale } from "../../store/localeSlice";
import { LocaleSwitcherSelect } from "../molecules/LocaleSwitcherSelect";

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
