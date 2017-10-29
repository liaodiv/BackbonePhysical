/**
 * Created by liao on 2017/10/23.
 */
define(['jquery','underscore','backbone'],
    function ($,_,Backbone) {
    var BasicModel = Backbone.Model.extend({
        validation: {
            firstName: {
                required: true,
                msg: 'Please provide your first name'
            },
            lastName: {
                required: true,
                msg: 'please provide you last name'
            },
            email:[{
                required:true,
                msg:'Please provide your email'
            },{
                pattern:'email',
                msg:'Email provided is not correct'
            }]

        }
    })
    return BasicModel;
});