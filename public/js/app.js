/**
 * Created by 27353 on 2017/10/23.
 */
require.config({
    baseUrl:"./js",
    paths:{
        'jquery':'lib/jquery.min',
        'bootstrap':'lib/bootstrap.min',
        'backbone':'lib/backbone',
        'underscore':'lib/underscore',
        'serializeObject':'lib/serializeObject',
        'backbone-validation-amd':'lib/backbone-validation-amd',
        'validation_bootstrap':'lib/backbone.validation.bootstrap'
    },
    shim:{
        underscore:{
            exports:'_'
        },
        backbone:{
            deps:["underscore","jquery"],
            exports:'Backbone'
        },
        bootstrap:{
            deps:["jquery"]
        },
        serializeObject:{
            deps:["jquery"]
        },
        validation_bootstrap:{
            deps:["underscore","backbone","backbone-validation-amd"]
        }
    }
})

require(["jquery","underscore","backbone","model/user","router/router","bootstrap","lib/backbone-forms","validation_bootstrap"],
    function ($,_,Backbone,User,Router) {
        /*$('#myModal').modal('toggle');*/
      var router= new Router();
      Backbone.history.start()


    });