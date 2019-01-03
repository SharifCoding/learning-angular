// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  // ng e2e
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  suites: {
    // ng e2e --suite app
    app: './src/app.e2e-spec.ts',
    // ng e2e --suite add
    add: './src/add/add.e2e-spec.ts',
    // ng e2e --suite delete
    delete: './src/delete/delete.e2e-spec.ts'
  },
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};