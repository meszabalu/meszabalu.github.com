'use strict';
	module.exports = function(grunt) {
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json');
		    requirejs : {
		    	options : {
		    		baseUrl: "./",
		    		dir: "./build",
		    		optimize: "uglify"
		    	}
		    },
			jshint: {
				files: ['src/lastfm_search.js', 'test/**.js'],
				options: {
					globals: {
						jQuery: true,
						console: true
					}
				}
			},
		    qunit: {
			  files: ['test/**.html']
			},
		    watch : {
		    	files : ['**.{js,css,html}'],
		    	tasks: 'requirejs'
		    },
		});
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-qunit');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-requirejs');

		grunt.registerTask('default', 'build jshint qunit');
		grunt.registerTask('test', 'jshint qunit');
	}