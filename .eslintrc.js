module.exports = {
  env: {
    es2021: true,
    node: true,
  },

  // Add the necessary extensions.
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    //  Removes Error for "_id"
    "no-underscore-dangle": "off",
    //  Removes warning for console.error but keeps the warning for console.log
    "no-console": ["warn", { allow: ["error"] }],
  },
};
