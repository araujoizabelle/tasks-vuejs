module.exports = {
    root: true,
    env: {
        // this section will be used to determine which APIs are available to us
        // (i.e are we running in a browser environment or a node.js env)
        node: true,
        browser: true
    },
    parserOptions: {
        parser: "babel-eslint",
        // specifying a module sourcetype prevent eslint from marking import statements as errors
        sourceType: "module"
    },
    extends: [
        // use the recommended rule set for both plain javascript and vue
        "eslint:recommended",
        "plugin:vue/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-multi-spaces": "error",
        "space-in-parens": "error",
        "no-multiple-empty-lines": "error",
        "no-use-before-define": "error",
        "prettier/prettier": ["error", { "endOfLine": "auto" }],
    }
};