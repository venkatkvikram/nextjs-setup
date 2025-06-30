// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "bugfix",
        "chore",
        "docs",
        "style",
        "refactor",
        "test",
        "ci",
        "infra",
        "setup",
      ],
    ],
    "subject-case": [0],
  },
};
