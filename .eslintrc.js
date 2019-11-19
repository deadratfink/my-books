// Severity codes: 0 = off, 1 = warn, 2 = error
const { dependencies } = require('./package.json');

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018, // (aka 9)
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'import',
    'jsdoc',
    'filenames',
    'jest',
    'jest-async',
    'jsx-a11y',
    'jsx-max-len',
    'react',
  ],
  env: {
    browser: true,
    commonjs: true,
    'jest/globals': true,
  },
  rules: {
    'jsx-a11y/media-has-caption': 'off',
    'arrow-body-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          // React exempts
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'ignore',
      },
    ],
    'consistent-return': 'error',
    // Matches UpperCamelCase or lowerCamelCase + *.test.js or *.spec.js or *.stories.js or *.style.js or
    // *.config.js files only!
    'filenames/match-regex': [
      'error',
      '^([a-z0-9]*|[a-z.]+)([A-Z0-9][a-z0-9]*)*(\.test|\.spec|\.stories|\.style|\-staged\.config|\.config|jestrc.js)?$'
    ],
    'function-paren-newline': 'off', //['error', 'multiline'],
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/no-extraneous-dependencies': [
      'off',
      { devDependencies: ['**/*.stories.jsx'] },
    ],
    'import/prefer-default-export': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'jest-async/expect-return': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/newline-after-description': 'error',
    // 'jsdoc/require-description-complete-sentence': 'error', // TODO: discuss if needed, this can be annoying!
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
    'jsx-max-len/jsx-max-len': [
      2,
      {
        lineMaxLength: 120,
        tabWidth: 2,
        maxAttributesPerLine: 1,
      },
    ],
    'max-len': [
      'error',
      120,
      4,
      {
        ignoreUrls: true,
        ignorePattern: '^\\s<.*|\\s.*>', // Exception for JSX code!
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-case-declarations': 'error',
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prefer-template': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
      },
    ],
    'operator-linebreak': [2, 'after'],
    'react/jsx-uses-vars': 'error',
    'react/no-deprecated': 'warn',
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
    strict: ['error', 'never'],
  },
  settings: {
    // 'import/extensions': [
    //   '.js',
    //   '.jsx'
    // ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    },
    react: {
      version: dependencies.react,
    },
    jsdoc: {
      additionalTagNames: {
        customTags: ['resolve', 'reject'], // TODO any more wanted here?
      },
    },
  },
};
