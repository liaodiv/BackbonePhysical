/**
 * Created by liao on 2017/10/28.
 */
define(['jquery','underscore','backbone','lib/backbone-forms'],
    function ($,_,Backbone) {
        var grade = Backbone.Form.extend({
            el:'',
           // tempate:_.template($())

        });
        return grade;
    });