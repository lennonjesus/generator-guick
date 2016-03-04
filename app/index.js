/**
* @author Lennon Jesus <lennon.jesus@gmail.com
* @license MIT
*/

'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({

  initializing: function () {

  },

  prompting: function () {
    var done = this.async();

    this.log(
      yosay('Welcome to \n' + chalk.green('Guick Generator') + '!')
    );

    var prompts = [

      {
        type: 'input',
        name: 'name',
        message: 'What is your project name?',
        default: 'configureme'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        default: 'Project Description'
      },
      {
        type: 'input',
        name: 'group',
        message: 'What is your project group?',
        default: 'org.wdn.configure'
      },
      {
        type: 'input',
        name: 'generationLanguage',
        message: 'Do you prefer java or groovy?',
        default: 'java'
      },
      {
        type: 'input',
        name: 'useWorkflow',
        message: 'Does your project going to use workflows??',
        default: 'false'
      },

      {
        type: 'input',
        name: 'guickConnectionInfoPassword',
        message: 'guickConnectionInfo.password',
        default: ''
      },
      {
        type: 'input',
        name: 'guickConnectionInfoUser',
        message: 'guickConnectionInfo.user',
        default: 'sa'
      },
      {
        type: 'input',
        name: 'guickConnectionInfoDialect',
        message: 'guickConnectionInfo.dialect',
        default: 'org.hibernate.dialect.Oracle10gDialect'
      },
      {
        type: 'input',
        name: 'guickConnectionInfoDriverName',
        message: 'guickConnectionInfo.driverName',
        default: 'oracle.jdbc.driver.OracleDriver'
      },
      {
        type: 'input',
        name: 'guickConnectionInfoUrl',
        message: 'guickConnectionInfo.url',
        default: 'jdbc:oracle:thin:@localhost:1521:xe'
      },

      {
        type: 'input',
        name: 'generatedDatasourceInfoPassword',
        message: 'generatedDatasourceInfo.password',
        default: ''
      },
      {
        type: 'input',
        name: 'generatedDatasourceInfoUser',
        message: 'generatedDatasourceInfo.user',
        default: 'sa'
      },
      {
        type: 'input',
        name: 'generatedDatasourceInfoDialect',
        message: 'generatedDatasourceInfo.dialect',
        default: 'org.hibernate.dialect.Oracle10gDialect'
      },
      {
        type: 'input',
        name: 'generatedDatasourceInfoDriverName',
        message: 'generatedDatasourceInfo.driverName',
        default: 'oracle.jdbc.driver.OracleDriver'
      },
      {
        type: 'input',
        name: 'generatedDatasourceInfoUrl',
        message: 'generatedDatasourceInfo.url',
        default: 'jdbc:oracle:thin:@localhost:1521:xe'
      },

      {
        type: 'input',
        name: 'tablePrefix',
        message: 'What is your project table prefix?',
        default: 'TB'
      },

    ];

    this.prompt(prompts, function (props) {
      this.props = props;

      this.fs.copyTpl(
        this.templatePath('guick.json.tpl'),
        this.destinationPath(props.name + '/guick.json'),

        {
          group: props.group,
          name: props.name,
          description : props.description,
          guickConnectionInfoPassword: props.guickConnectionInfoPassword,
          guickConnectionInfoUser: props.guickConnectionInfoUser,
          guickConnectionInfoDialect: props.guickConnectionInfoDialect,
          guickConnectionInfoDriverName: props.guickConnectionInfoDriverName,
          guickConnectionInfoUrl: props.guickConnectionInfoUrl,
          generatedDatasourceInfoPassword: props.generatedDatasourceInfoPassword,
          generatedDatasourceInfoUser: props.generatedDatasourceInfoUser,
          generatedDatasourceInfoDialect: props.generatedDatasourceInfoDialect,
          generatedDatasourceInfoDriverName: props.generatedDatasourceInfoDriverName,
          generatedDatasourceInfoUrl: props.generatedDatasourceInfoUrl,
          generationLanguage: props.generationLanguage,
          tablePrefix: [

          ],
          useWorkflow: props.useWorkflow,
          tables: [

          ]
        }

      );

      done();
    }.bind(this));
  }

});
