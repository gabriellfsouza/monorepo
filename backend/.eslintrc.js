module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "ValidationError": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "settings": {
      'import/resolver': {
        'alias':{
          'map':[
            ["~",'./src']
          ],
          extensions: ['.ts', '.js', '.jsx', '.json']
        }
      }
    },
    "rules": {
      "class-methods-use-this": "off",
      "no-underscore-dangle": "off",
      "no-unused-vars": ["error",{ "ignoreRestSiblings": true, "argsIgnorePattern": "^_" }]
    }
};
