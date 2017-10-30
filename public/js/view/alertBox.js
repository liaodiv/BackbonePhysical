/**
 * Created by 27353 on 2017/10/17.
 */
define(["backbone"],function (Backbone) {
    var alertBox = Backbone.View.extend({
        tagName:"div",

        template:_.template('<div class="alertBox">' +
            '<strong><%= message %></strong>'+
            '</div>'),
        initialize:function (message) {
            var element =this.render(message);
            _.delay(
                this.remove.bind(this)
            ,2000)
            return element;
        },
        render:function (message) {
            this.$el.html(this.template({"message":message}))
            return this;
        }
    });
    return alertBox
})