/**
 * Created by 27353 on 2017/10/29.
 */
define(['jquery','underscore','backbone','backbone-validation-amd','serializeObject'],
    function ($,_,Backbone) {
    var BasicView = Backbone.View.extend({
        el:'#grade',
        template:_.template($('#basic-template').html()),
        initialize:function () {
            Backbone.Validation.bind(this);
           this.render();
        },
        events:{
            'click #submit': 'submit'
        },
        submit:function (e) {
            e.preventDefault();
            this.$('alert').hide();

            var  data = this.$('form').serializeObject();
            console.log(data);
            if( this.model.set(data,{validate:true})){
                this.$('.alert-success').fadeIn();
            }else{
                this.$('.alert-error').fadeIn();
            }

        },
        render:function () {
            this.$el.html(this.template({legend:'Basic example'}))

            return this;
        }
    })
    return BasicView;
});