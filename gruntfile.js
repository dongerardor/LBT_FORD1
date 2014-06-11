module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    /*uglify:{
      my_target:{
        files: {
          //'js/ford1.js':['componentes/js/*.js']
        }//files
      }//my_target
    },//uglify*/
    compass: {
      dev: {
        config: 'config.rb'
      }//options
    },//dev
    watch:{
      options: { livereload: true },
      sass: {
        files: ['componentes/sass/*.scss'],
        tasks: ['compass:dev']
      }//,//sass
      //html: {
        //files: ['*.html']
      //}
    }//watch
  })//initConfig
  grunt.registerTask('default', 'watch');
} //exports