$(function () {
    zhuce(
        {
            use : $('.user input'),
            u : $('.user_hint'),
            obj : $('.pwd'),
            h : $('.password_hint'),
            reobj :$('.repwd'),
            j : $('.confirm_hint'),
            ZC : $('.register a'),
            mobile : $('.iphone input'),
            m : $('.iphone_hint'),
            yanzheng : $('.iphone_IC button'),
            num : $('.iphone_IC_hint'),
            sj : $('.iphone_IC_hint span')
        }
    )

});
function zhuce(json) {
    var use = json.use;
    var u = json.u;
    var obj = json.obj;
    var h = json.h;
    var reobj = json.reobj;
    var j = json.j;
    var ZC = json.ZC;
    var mobile = json.mobile;
    var m = json.m;
    var yanzheng = json.yanzheng;
    var num = json.num;
    var sj = json.sj;
    var act = json.act;
    var user_Boolean = false;
    var password_Boolean = false;
    var varconfirm_Boolean = false;
    var iphone_hint = false;
    var s = 0;
    $(use).blur(function () {
        if ((/^[\u4e00-\u9fa5]{3,14}$|^[\dA-Za-z_]{6,28}$/).test($(use).val())){
            $(u).html("✔").css("color",'green');
            user_Boolean = true;
        }
        else {

            $(u).html("×").css("color","red");
            user_Boolean = false;
        }
    });
    // 密码
    $(obj).blur(function () {
        if((/^[a-z0-9_-]{6,16}$/).test($(obj).val())){
            $(h).html("✔").css("color",'green');
            password_Boolean = true;
        }else {
            $(h).html("×").css("color","red");
            password_Boolean = false;
        }
    });
    // 确认密码
    $(reobj).blur(function () {
        if($(obj).val() === $(reobj).val()){
            $(j).html("✔").css("color",'green');
            varconfirm_Boolean = true;
        }else {
            $(j).html("×").css("color","red");
            varconfirm_Boolean = false;
        }
    });
    // 手机号码
    $(mobile).blur(function () {
        if((/^1[34578]\d{9}$/).test($(mobile).val())){
            $(m).html("✔").css("color",'green');
            iphone_hint = true;
            s = 1;
        }
        else {
            $(m).html("×").css("color","red");
            iphone_hint = false;
            s = 0;
        }
    });
    //手机验证码
    $(yanzheng).click(function () {
            $(this).css({display:'none'});
            $(num).css({display:"block"});
            var time =60;
            var sj=null;
            sj = setInterval(function () {
                time-=1;
                if(time >0){
                    $(num).html(time+'秒后重发')
                }else {
                    // time = 5;
                    clearInterval(sj);
                    $(yanzheng).css({display:"block"});
                    $(num).css({display:'none'});
                }

            },1000);
            $(num).html(time+'秒后重发');

    });
    // 点击注册
    $(ZC).click(function () {
        if(user_Boolean === true && password_Boolean === true && varconfirm_Boolean === true && iphone_hint === true ){
            alert('注册成功');
            $(this).attr("href",'dengluye.html')
        }
        else if(user_Boolean === false){
            alert("注册名不规范")
        }
        else if(password_Boolean === false){
            alert("请输入密码")
        }
        else if(varconfirm_Boolean ===false){
            alert("请确认密码一致")
        }
        else if(iphone_hint === false){
            alert("请确认手机号码正确")
        }
    });
    //点击登录
    $(act).click(function () {
        if(user_Boolean === true && password_Boolean === true){
            $(this).attr("href","首页home_page.html")
        }
        else if(user_Boolean === false){
            alert("请填写用户名")
        }
        else if(password_Boolean === false){
            alert("请确认密码")
        }
    })
}