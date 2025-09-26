const js = require('@eslint/js')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')

module.exports = [
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            '**/dist/**',
            './dist/**',
            '.output/**',
            'coverage/**',
            '.git/**',
            '*.min.js',
            'public/**',
            'build/**',
        ],
    },
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx, **.ts, vue}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                process: 'readonly',
                console: 'readonly',
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                self: 'readonly',
                global: 'readonly',
                URL: 'readonly',
                Response: 'readonly',
                Headers: 'readonly',
                fetch: 'readonly',
                $fetch: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                sessionStorage: 'readonly',
                requestAnimationFrame: 'readonly',
                Element: 'readonly',
                SVGElement: 'readonly',
                MathMLElement: 'readonly',
                Event: 'readonly',
                IntersectionObserver: 'readonly',
                defineNuxtConfig: 'readonly',
            },
        },
        plugins: { '@typescript-eslint': tsPlugin },
        rules: {
            'comma-dangle': ['error', 'always-multiline'],
            'array-bracket-newline': [
                'error', {
                    multiline: true,
                    minItems: 3,
                },
            ],
            'object-curly-newline': [
                'error', {
                    multiline: true,
                    minProperties: 5,
                },
            ],  
            'eol-last': ['error', 'always'],
            'semi': ['error', 'never'],
            'indent': [
                'error', 4, { 'SwitchCase': 1 },
            ],
            'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn', {
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            'no-undef': 'off',
            'no-empty': ['warn', { allowEmptyCatch: true }],
            'no-useless-escape': 'warn',
            'no-constant-condition': 'warn',
            'getter-return': 'warn',
            'no-case-declarations': 'warn',
            'no-constant-binary-expression': 'warn',
            'no-async-promise-executor': 'warn',
            'no-control-regex': 'off',
            'no-prototype-builtins': 'warn',
            'no-setter-return': 'warn',
            "no-restricted-imports": ["error", {"paths": []}],
        },
    },
]
