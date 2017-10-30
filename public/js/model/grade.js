/**
 * Created by 27353 on 2017/10/30.
 */
define(['jquery', 'underscore', 'backbone'],
    function ($, _, Backbone) {
        var grade = Backbone.Model.extend({
            defaults: {
                sex: ''
            },
            validation: {
                id: [{
                    required: true,
                    msg: '学号未输入'
                },{
                    length:11,
                    msg:'学号不存在'
                }],
                name: {
                    required: true,
                    msg: '姓名未输入'
                },
                sex: {
                    required: true,
                    msg: '请选择姓名'
                },
                height: [{
                    required: true,
                    msg: '身高未输入'
                },{
                    range:[130,250],
                    msg:'身高输入有误'
                }],
                weight: [{
                    required: true,
                    msg: '体重未输入'
                },{
                    range:[40,150],
                    msg:'体重输入有误'
                }],
                lung: [{
                    required: true,
                    msg: '肺活量未输入'
                },{
                    range:[1000,10000],
                    msg:'肺活量输入有误'
                }],
                frun: [{
                    required: true,
                    msg: '50米未输入'
                },{
                    range:[0,20],
                    msg:'50米输入值有误'
                }],
                jump: [{
                    required: true,
                    msg: '跳远未输入'
                },{
                    range:[0,3],
                    msg:'跳远输入有误'
                }],
                zuowei: [{
                    required: true,
                    msg: '坐位体前屈未输入'
                },{
                    range:[-30,40],
                    msg:'输入值有误'
                }],
                onerun:[{
                    required:false
                }],
                ytxs:[{
                    required:false,
                },{
                    range:[0,50]
                }],
                ywqz:[{
                    required:false,
                },{
                    range:[0,100]
                }]



            }

        })
        return grade;
    });