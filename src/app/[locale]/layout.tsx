// app/[locale]/layout.tsx
import { AbstractIntlMessages, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Providers from "@/providers/Providers";
import { LocaleSwitcher } from "@/components/organisms/LocaleSwitcher";
import "./globals.css";
import { NavBar } from "@/components/organisms/Navbar";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages: AbstractIntlMessages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="relative min-h-screen bg-gray-50">
        <Providers messages={messages} locale={locale}>
          <div className="fixed top-0 left-0 w-full z-40">
            <NavBar />
          </div>
          <div className="fixed top-20 right-4 z-50 max-sm:top-16 max-sm:right-2">
            <LocaleSwitcher />
          </div>
          <main className="pt-28 px-4 sm:px-8 max-w-4xl mx-auto w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
