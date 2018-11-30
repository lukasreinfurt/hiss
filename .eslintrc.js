module.exports = {
    root: true,
    parserOptions: {
        sourceType: "module",
        parser: "babel-eslint"
    },
    env: {
        browser: true
    },
    extends: [
        "standard",
        "plugin:vue/recommended",
        "prettier",
        "prettier/standard",
        "prettier/vue"
    ],
    plugins: [
        "prettier",
        "standard",
        "vue"
    ],
    rules: {
        "vue/html-self-closing": [
            "error", {
                "html": {
                    "void": "any"
                }
            }
        ],
        "prettier/prettier": "error",
    }
  };