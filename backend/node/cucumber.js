const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const components_module = [
  ...common,
  'components/test/Api/features/**/*.feature',
  '--require components/test/Api/features/steps/*.steps.ts'
].join(' ');

module.exports = { components_module };