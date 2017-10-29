/**
 * Created by liao on 2017/10/28.
 */
define(['jquery','underscore','backbone','lib/backbone-forms'],
    function ($,_,Backbone) {
        var grade = Backbone.Form.extend({
            el:'',
            tempate:_.template(
                '<form><h1>New User</h1>' +
                '<h2>Main Info</h2>' +
                '<div data-fields="title,name,birthday"></div> ' +
                '<h2>Account Info</h2>' +
                ' <h3>Email</h3>' +
                '<div data-fields="email"></div> <h3>Password</h3>' +
                '<p>Must be at least 8 characters long</p>' +
                '<div data-editors="password"></div>' +
                '</form>'),
            schema:{
                title:  { type: 'Select', options: ['Mr', 'Mrs', 'Ms'] },
                name:       'Text',
                email:      { validators: ['required', 'email'] },
                password:   'Password'
            }
        });
        return grade;
    });