'use strict';
	module.exports = function(grunt) {
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json');
			build: {
		        tasks : 'requirejs'
		    },
		    requirejs : {
		    	
		    },
			jshint: {
				files: ['src/lastfm_search.js', 'test/**/*.js'],
				options: {
					globals: {
						jQuery: true,
						console: true
					}
				}
			},
		    qunit: {
			  files: ['test/**/*.html']
			},
		    watch : {
		    	files : ['/**/*.js', '/**/*.css', '/**/*.html'],
		    	tasks: 'build'
		    },
		});
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-qunit');
		grunt.loadNpmTasks('grunt-contrib-watch');

		grunt.registerTask('default', 'build jshint qunit');
		grunt.registerTask('test', 'jshint qunit');
	}