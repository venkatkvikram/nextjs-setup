import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],
  defaultLocale: "en",
  // pathnames: {
  //   "/contact": {
  //     en: "/contact-me",
  //     fr: "/contactez-moi",
  //   },
  // },
});

export const locales = ["en", "fr"];
