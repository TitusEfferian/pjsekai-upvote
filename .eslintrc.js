module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ],
        // suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        "react/jsx-key": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        // allow jsx syntax in js files (for next.js project)
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ] //should add ".ts" if typescript project
    }
}