/**
 * Created by 27353 on 2017/10/23.
 */
require.config({
    baseUrl:"./js",
    paths:{
        'jquery':'lib/jquery.min',
        'bootstrap':'lib/bootstrap.min'
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

require(["jquery","lib/underscore","lib/backbone","bootstrap"],
    function ($,_,Bacbone) {

    });