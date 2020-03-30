module.exports = {
	env: {
		browser: true,
		node: true,
	},
	rules: {
		'for-direction': 'error',
		'getter-return': ['error', { allowImplicit: true }],
		'no-async-promise-executor': 'off',
		'no-await-in-loop': 'warn',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-console': 'off',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error', // pretty extreme to use debugger in prod
		'no-dupe-args': 'error',
		'no-dupe-else-if': 'warn', // strange case, never see it
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': 'warn',
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-misleading-character-class': 'error',
		'no-obj-calls': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		// no-useless-backreference -> 404 on ESLint website
		'require-atomic-updates': 'off', // don't use generator
		'use-isnan': 'error',
		'valid-typeof': 'error',
	},
}
