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
		// react 함수형 컴포넌트 정의 방식 선언
		'react/function-component-definition': [
			2,
			{ namedComponents: ['arrow-function', 'function-declaration'] },
		],
	},
	settings: {
		'import/resolver': {
			node: {
				moduleDirectory: ['src', 'node_modules'],
			},
		},
	},
};
