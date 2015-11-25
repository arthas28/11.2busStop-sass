module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //编译less文件
    sass: {
      files: {
        expand: true,
        cwd: 'sass/',
        src: 'busStop.scss',
        dest: 'css/',
        ext: '.css'
      }
    },
    // 压缩css
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'css/busStop.css',
        dest: 'build/busStop.min.css'
      }
    },
    //监测less文件改动
    watch: {
        files: 'sass/busStop.scss',
        tasks: ['sass','cssmin']
    }
  });

  // 加载包含 'sass',cssmin','watch' 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['sass','cssmin','watch']);

};