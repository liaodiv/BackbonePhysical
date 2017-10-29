/**
 * Created by liao on 2017/10/28.
 */
define(['jquery','underscore','backbone']
    ,function ($,_,Backbone) {
    var User  =Backbone.Model.extend({
        schema:{
            title:      { type: 'Select', options: ['', 'Mr', 'Mrs', 'Ms'] },
            name:       'Text',
            email:      { validators: ['required', 'email'] },
            birthday:   'Date',
            password:   'Password',
            notes:      { type: 'List', itemType: 'Text'
            }
        }
    })
    return User;
});