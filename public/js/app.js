/**
 * Created by 27353 on 2017/10/23.
 */
require.config({
    baseUrl:"./js",
    paths:{
        'jquery':'lib/jquery.min',
        'bootstrap':'lib/bootstrap.min',
        'backbone':'lib/backbone',
        'underscore':'lib/underscore'
    },
    shim:{
        'lib/underscore':{
            exports:'_'
        },
        'lib/backbone':{
            deps:["lib/underscore","jquery"],
            exports:'Backbone'
        },
        bootstrap:{
            deps:["jquery"]
        }
    }
})

require(["jquery","underscore","backbone","view/formView","model/user","bootstrap","lib/backbone-forms"],
    function ($,_,Backbone,FormView,User) {
  /*      var user = new User({
            schema: {
                title: 'Mr',
                name: 'Sterling Archer',
                email: 'sterling@isis.com',
                birthday: new Date(1978, 6, 12),
                password: 'dangerzone',
                notes: [
                    'Buy new turtleneck',
                    'Call Woodhouse',
                    'Buy booze'
                ]
            }
        });*/
       /* var formView = new FormView({
            model:user
        });*/
       var user = new User();
       var formView = new Backbone.Form({
           model:user
       });

        $("#grade").append(formView.render().el)

    });