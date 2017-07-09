module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "plugins": [
        "mocha"
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "mocha/no-exclusive-tests": "error",
        "no-console": 0
    }
};