/**
 * Created by liao on 2017/10/23.
 */
define(['jquery','underscore','backbone','serializeObject','backbone-validation-amd'],
    function ($,_,Backbone) {
    var grade = Backbone.View.extend({
        el:'#grade',
        tempate:_.template($("#grade-template").html()),
        initialize:function () {
            Backbone.Validation.bind(this);
            this.render();
        },
        events:{
            'click #submit':'submit',
            'click input[name=optionRadios]':'sex'
        },
        submit:function (e) {
            e.preventDefault();


            var data = this.$('form').serializeObject();
            this.model.set(data,{validate:true});

        },
        sex:function (e) {
            var value = this.$el.find("input:radio:checked").val();
            console.log(this.$el.find("input:radio:checked").val());
            this.$el.find('.man,.woman').hide();
            if(value == 1 ) {
                this.$el.find('.man').show();
            }
            if(value == 2){
                this.$el.find('.woman').show();
            }
           // console.log(value);
        },
        render:function () {
            this.$el.html(this.tempate());
            return this;
        }
    })
    return grade;
});