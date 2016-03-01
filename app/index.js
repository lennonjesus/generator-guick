// In my-generator/generators/app/index.js
module.exports = require('yeoman-generator').Base.extend({
  'initializing' : function () {
    this.composeWith('guick:create');
    this.composeWith('guick:source');
  }
});
