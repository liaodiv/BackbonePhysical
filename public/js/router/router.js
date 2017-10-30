/**
 * Created by 27353 on 2017/10/29.
 */
define(['jquery','underscore','backbone','model/test','view/testView','view/grade','model/grade','view/login'],
    function ($,_,Backbone,BasicModel,BasicView,GradeView,GradeModel,Login) {
    var Router = Backbone.Router.extend({
        routes:{
            '':'index'
        },
        index:function () {
            console.log('1232');
            new  GradeView({model:new GradeModel()});
          /*  new BasicView({model:new BasicModel()})*/
        }
    })
    return Router;
});