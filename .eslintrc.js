module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'google'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'object-curly-spacing': ['error', 'always'],
        'indent': 'off',
        'spaced-comment': ['error', 'always', {
            'line': {
                'markers': ['/'],
                'exceptions': ['-', '+'],
            },
            'block': {
                'markers': ['!'],
                'exceptions': ['*'],
                'balanced': true,
            },
        }],
    },
};
