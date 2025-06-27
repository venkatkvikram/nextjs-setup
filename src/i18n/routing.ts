import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/contact": {
      en: "/contact-me",
      fr: "/contactez-moi",
    },
  },
});

export const locales = ["en", "fr"];
