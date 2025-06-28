// providers/Providers.tsx
"use client";

import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store/store";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

interface ProvidersProps {
  children: ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}

export default function Providers({ children, messages, locale }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
    </ReduxProvider>
  );
}
