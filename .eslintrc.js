module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "globals": {
        "document": true,
        "global": true,
        "window": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};