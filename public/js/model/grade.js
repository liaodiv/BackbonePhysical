/**
 * Created by 27353 on 2017/10/30.
 */
define(['jquery','underscore','backbone'],
    function ($,_,Backbone) {
    var grade = Backbone.Model.extend({
        validation:{
            id:{
                required:true,
                msg:'学号未输入'
            },
            name:{
                required:true,
                msg:'姓名未输入'
            },
            sex:{
                required:true,
                msg:'请选择姓名'
            },
            height:{
                required:true,
                msg:'身高未输入'
            },
            weight:{
                required:true,
                msg:'体重未输入'
            },
            lung:{
                required:true,
                msg:'肺活量未输入'
            },
            frun:{
                required:true,
                msg:'50米未输入'
            },
            jump:{
                required:true,
                msg:'跳高未输入'
            },
            zuowei:{
                required:true,
                msg:'坐位体前屈未输入'
            }


        }

    })
    return grade;
});