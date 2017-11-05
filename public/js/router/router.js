/**
 * Created by 27353 on 2017/10/29.
 */
define(['jquery','underscore','backbone','model/test','view/testView','view/grade','model/grade','view/login'],
    function ($,_,Backbone,BasicModel,BasicView,GradeView,GradeModel,Login) {
    var Router = Backbone.Router.extend({
        initialize:function () {
          this.login = new Login()
        },
        routes:{
            '':'index'
        },
        index:function () {
            //console.log('1232');
            this._render(new  GradeView({model:new GradeModel()}));
          /*  new BasicView({model:new BasicModel()})*/
        },
        _render:function (view) {
            this.login.checkCookie(function () {
                view.getuser(this.login.getCookie('username'));
                $("#grade").append(view.render().el)
            }.bind(this))
        }
    })
    return Router;
});