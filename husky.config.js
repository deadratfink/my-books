// eslint-disable-next-line import/no-commonjs
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged && yarn test && yarn readme && git add *.md',
  }
};
