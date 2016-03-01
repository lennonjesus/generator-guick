'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

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

    this.log('This task will create a new guick project and initialize your ' + chalk.blue('guick.json') + ' config file.')

    this.prompt([
      {
        type: 'confirm',
        message: 'Do you wish to continue?' ,
        name: 'continue'
      },
      {
        type: 'string',
        message: 'What is your project name?' ,
        name: 'projectName'
      }
    ], function (answers) {

      this.continue = answers.continue;
      this.projectName = answers.projectName;

      done();

    }.bind(this));
  },

  writing: function () {
    var done = this.async();

    if (!this.continue) {

      this.log("Ok. See you, space cowbow.");

      done();
      return;
    }

    mkdirp(this.projectName, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Project folder successfully created.');

      }
    });

  },

  end: function () {

    this.composeWith('guick:init');

  }

});
