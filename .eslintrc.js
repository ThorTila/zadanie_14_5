module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "indent": [
            "off"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/display-name": [
            "off"
        ],
        "react/no-deprecated": [
            "off"
        ]
    },
    "plugins": [
        "react"
      ],
    "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        }
      },
    "globals": {
        "React": false,
        "ReactDOM": false,
        "ContactForm": false,
        "Contacts": false,
        "Contact": false
    },
};