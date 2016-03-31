'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var repo = 'guick';
var guickSources = 'guick-source';

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  prompting: function () {
    var done = this.async();

    this.log(
      yosay('Welcome to \n' + chalk.green('Guick Generator') + '!')
    );

    this.log('This task will download all guick sources to ' + chalk.blue(guickSources) + ' directory.');

    this.prompt([
      {
        type: 'confirm',
        message: 'Do you wish to continue?' ,
        name: 'continue'

      }
    ], function (answers) {

      this.continue = answers.continue;

      done();

    }.bind(this));
  },

  writing: function () {
    var done = this.async();

    if (!this.continue) {

      this.log("Ok. See you, space cowboy.");

      done();
      return;
    }

    this.remote('lennonjesus', repo, (err, remote) => {
      remote.bulkDirectory('.', guickSources);

      done();
    });

  }

});
