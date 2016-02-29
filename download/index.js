'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  // prompting: function() {
  //   var done = this.async();
  //   this.prompt([{
  //     type: 'list',
  //     name: 'repo',
  //     message: 'Select a Repo',
  //     choices: [{
  //       name: 'Yeoman Generator Repo',
  //       value: 'generator'
  //     }, {
  //       name: 'Yeoman Yo Repo',
  //       value: 'yo'
  //     }]
  //   }], function (answers) {
  //     this.repo = answers.repo;
  //     done();
  //   }.bind(this));
  // },

  prompting: function () {
    var done = this.async();

    this.log(
      yosay('Welcome to \n' + chalk.green('Guick Generator') + '!')
    );

    this.prompt([
      {
        type: 'confirm',
        message: 'Lets begin?',
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

      this.log("Ok. See you, space cowbow.");

      done();
      return;
    }

    this.repo = 'guick';
    this.guickLocal = '.' + this.repo;

    this.remote('lennonjesus', /*this.repo*/ 'guick', (err, remote) => {
      remote.bulkDirectory('.', this.guickLocal);
      done();
    });
  }
});
