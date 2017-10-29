/**
 * Created by liao on 2017/10/29.
 */
define(['jquery','underscore','backbone','backbone-validation-amd'],function ($,_,Backbone) {
    var formView = Backbone.View.extend({
        el:'#grade',

        events:{
            'click #signUpButton':function (e) {
                e.preventDefault();
            }
        },
        initialize:function () {
            Backbone.Validation.bind(this);
        }
    })
    return {};
});