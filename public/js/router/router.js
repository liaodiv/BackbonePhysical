/**
 * Created by 27353 on 2017/10/29.
 */
define(['jquery','underscore','backbone','model/test','view/testView'],
    function ($,_,Backbone,BasicModel,BasicView) {
    var Router = Backbone.Router.extend({
        routes:{
            '':'index'
        },
        index:function () {
            console.log('1232');
            new BasicView({model:new BasicModel()})
        }
    })
    return Router;
});