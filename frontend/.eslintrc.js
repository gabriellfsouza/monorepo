module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
      "no-unused-vars": [
        "error",{
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      }],
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-param-reassign': 'off',
      'no-console':'off',
    },settings: {
      'import/resolver': {
        'babel-plugin-root-import': {
          rootPathSuffix: 'src',
        },
      },
    },
};
