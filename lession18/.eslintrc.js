module.exports = {
    'parser': 'babel-eslint',
    'parserOptions': {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    // 'extends': ['airbnb', 'airbnb/hooks'],
    rules: {
        semi: 1,
        quotes: [2, 'single'],
        'react/prop-types': 1,
        // 'react/jsx-max-props-per-line':2
    },
    // extends: ["prettier"]
    // "plugins": ["prettier"],
    // "rules": {
    //     "prettier/prettier": ["error"]
    // },
};