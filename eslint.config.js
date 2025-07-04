import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript")];

// Add ignores property for ESLint v9+
eslintConfig.ignores = ["node_modules/", ".next/", "dist/", "coverage/", "*.config.js"];

export default eslintConfig;
