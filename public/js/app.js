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
        'backbone-validation-amd':'lib/backbone-validation-amd'
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
        }
    }
})

require(["jquery","underscore","backbone","view/formView","model/user","router/router","bootstrap","lib/backbone-forms"],
    function ($,_,Backbone,FormView,User,Router) {
      var router= new Router();
      Backbone.history.start()


    });