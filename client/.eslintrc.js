module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	ignorePatterns: ['node_modules/'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'import/no-extraneous-dependencies': 'off',
		'react/function-component-definition': [2, { namedComponents: ['function-declaration'] }],
		'react/destructuring-assignment': [0, 'always'],
		'default-param-last': 0,
		'func-names': ['error', 'never'],
		'no-use-before-define': [
			'error',
			{
				functions: false,
				variables: false,
			},
		],
		'react/jsx-no-bind': [
			'error',
			{
				allowArrowFunctions: true,
				allowFunctions: true,
				allowBind: true,
			},
		],
		'no-console': 'off',
		'no-alert': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				moduleDirectory: ['src', 'node_modules'],
			},
		},
	},
};
