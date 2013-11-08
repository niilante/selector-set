module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        quotmark: true,
        undef: true,
        unused: true,
        strict: true,
        trailing: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      grunt: {
        src: ['Gruntfile.js'],
        options: {
          globals: {
            'module': false
          }
        }
      },
      src: {
        src: ['selector-set.js']
      },
      tests: {
        options: {
          globals: {
            'SelectorSet': false,
            'SlowSelectorSet': false,
            'Benchmark': false,
            'd3': false,
            'QUnit': false,
            'testModule': false,
            'module': false,
            'test': false,
            'asyncTest': false,
            'expect': false,
            'start': false,
            'stop': false,
            'ok': false,
            'equal': false,
            'notEqual': false,
            'deepEqual': false,
            'notDeepEqual': false,
            'strictEqual': false,
            'notStrictEqual': false,
            'throws': false
          }
        },
        src: ['test/*.js']
      }
    },
    qunit: {
      all: ['test/index.html']
    },
    watch: {
      grunt: {
        files: ['<%= jshint.grunt.src %>'],
        tasks: ['jshint:grunt']
      },
      src: {
        files: ['<%= jshint.src.src %>'],
        tasks: ['jshint:src', 'qunit']
      },
      tests: {
        files: ['<%= jshint.tests.src %>', 'test/*.html'],
        tasks: ['jshint:tests', 'qunit']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('default', ['jshint']);

};
