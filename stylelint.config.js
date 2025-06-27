module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order", "stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "order/properties-alphabetical-order": true,
  },
  ignoreFiles: ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.jsx", "src/app/[locale]/globals.css"],
};
