/**
 * Created by 27353 on 2017/10/30.
 */
_.extend(Backbone.Validation.callbacks, {
    valid:function (view, attr, selector) {

    },
    invalid: function(view, attr, error, selector) {
        var control = view.$('[' + selector + '=' + attr + ']');
        var group = control.parent(".form-group");
        group.addClass('has-error');

        var target = group.find(".help-block");
        target.text(error);
    }
})
