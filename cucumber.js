module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['features/support/**/*.ts', 'features/step-definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'html:cucumber-report.html'],
  },
};
