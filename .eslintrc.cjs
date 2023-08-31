/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier'
    ],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                // singleQuote: true,
                // semi: true,
                // tabWidth: 4,
                vueIndentScriptAndStyle: true
            }
        ]
    },
    // overrides: [
    //   {
    //     files: ["cypress/e2e/**.{cy,spec,test}.{js,ts}"],
    //     extends: ["plugin:cypress/recommended"],
    //   },
    // ],
    parserOptions: {
        ecmaVersion: 'latest'
    }
};
