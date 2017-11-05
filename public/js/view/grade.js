/**
 * Created by liao on 2017/10/23.
 */
define(['jquery','underscore','backbone','view/alertBox','serializeObject','backbone-validation-amd'],
    function ($,_,Backbone,AlertBox) {
    var grade = Backbone.View.extend({
        /*el:'#grade',*/
        tempate:_.template($("#grade-template").html()),
        initialize:function () {
            Backbone.Validation.bind(this);
            this.render();
            this.user = null;
        },
        events:{
            'click #submit':'submit',
            'click input[name=sex]':'sex',
            'click #reset':'reset'
        },
        submit:function (e) {
            e.preventDefault();


            var data = this.$('form').serializeObject();
            console.log(data);
            if(this.model.set(data,{validate:true})){
                this.success(this.model.toJSON())
            };

        },
        getuser:function (user) {
            this.user = user;
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
        },
        success:function (data) {

            data.user = this.user;
            console.log(data);
            $.post('/postgrade',data,function (data,textStatus,jqXt) {
                if(data.state === 'OK'){
                    $('body').append( new AlertBox("提交成功").el);
                }else {
                    $('body').append( new AlertBox("提交失败").el);
                }
            });


            this.render();

        },
        reset:function (e) {
            e.preventDefault();
            this.render();
        }
    })
    return grade;
});