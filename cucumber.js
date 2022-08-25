const common = [
  '--require-module ts-node/register',
  '--require-module tsconfig-paths/register',
  'features/**/*.feature',
  '--require **/steps/**/*.step.ts',
  '--require e2e/po/**/*.ts',
  '--require hooks/**/*.ts',
  '--format-options \'{ "snippetInterface" :"async-await"}\'',
  '--format summary',
  '--format @cucumber/pretty-formatter',
  '--format cucumber-console-formatter',
  '--publish-quiet'        // Load custom formatter
].join(' ');

module.exports = {
default: common
};

