module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    rules: {
        camelcase: 0,
        indent: ['error', 4, {"SwitchCase": 1}],
        semi: ['error', 'always']
    },
    extends: 'standard',
};
