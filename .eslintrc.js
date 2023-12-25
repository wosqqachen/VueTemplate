module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "prettier/prettier": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript/interface-name-prefix": 0,
    "@typescript-eslint/interface-name-prefix": ["off"],
    //配置camelcase选项
    "@typescript-eslint/camelcase": [0, { properties: "never" }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-inferrable-types": ["off"], // 关闭类型推断
    "no-irregular-whitespace": "off", // 这禁止掉 空格报错检查
    "@typescript-eslint/no-this-alias": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/no-use-before-define": ["off"],
    "vue/multi-word-component-names": "off"
  }
};
