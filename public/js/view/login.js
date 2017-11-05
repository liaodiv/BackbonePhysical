/**
 * Created by 27353 on 2017/10/12.
 */
define(["backbone","jquery", "view/alertBox"],function (Backbone,$,AlertBox) {
    var loginView = Backbone.View.extend({
        el:"#login",
        events:{
            'click button[type="submit"]':'login',
            'keypress #Pwd':"loginOnEnter"
        },
        initialize:function () {
            $("#loginout").click(function () {
                this.loginout();
            }.bind(this));
        }
        ,
        login:function () {

            var loginData = {};
            this.$el.children('input').each(function (i , el) {
                if($(el).val() != ''){
                    loginData[el.id] = $(el).val();
                }
            });

            console.log(JSON.stringify(loginData));
            $.post('/login',loginData ,function (data,textStatus,jqX) {
               /* console.log('Get response');
                console.log(textStatus);
                console.log(data);*/
                console.log(data);
                if(data.state === "success"){
                    this.setCookie("username",loginData.UserName,3);
                    var user = this.getCookie("username");
                    this.editNav(user);
                    $('body').append( new AlertBox("登陆成功"+user).el);
                    //alert("Welcome again " + user);
                    if(typeof this.callback === 'function'){
                        this.callback();
                        this.callback = null;
                    }

                    this.hide();
                }
            }.bind(this));

        },
        loginout:function () {
            $('body').append( new AlertBox("登出成功").el);
            this.setCookie("username", "", -1);
         /*   router.navigate("#", {trigger: true, replace: true});*/
        },
        display:function () {
            $("#myModal").modal({
                keyboard:true//当按下esc键时，modal框消失
            });
        },
        hide:function () {
            $('#myModal').modal('hide')
        },
        /**
         * 使用cookoe存储登录信息，
         * @param cname
         * @param value
         * @param hour
         */
        setCookie:function (cname,cvalue,hour) {
            var d = new Date();
            d.setTime(d.getTime()+ (hour * 60 * 60 * 1000));
            var expires = "expires="+d.toGMTString();
            document.cookie = cname+"="+cvalue+"; "+expires+"; path=/";
        },
        getCookie:function(cname){
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name)==0) return c.substring(name.length,c.length);
            }
            return "";
        },
        checkCookie:function(callback) {
            var user = this.getCookie("username");
            if (user != "") {
                this.editNav(user);
                if( typeof callback === "function") {
                    callback();
                }

                return true;
            }
            else {
                this.display();
                this.callback = callback;
                return false;
            }
        },
        editNav:function (user) {
            $("#nav-username").text(user);
            /*app.admin = user;*/
        },
        loginOnEnter:function (event) {
            if( event.which !== 13  ){
                return ;
            }
            this.login();
        }

    });
    return loginView;
});