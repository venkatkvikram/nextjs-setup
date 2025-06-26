const config = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order", "stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "order/properties-alphabetical-order": true,
  },
  ignoreFiles: ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.jsx"],
};

export default config;