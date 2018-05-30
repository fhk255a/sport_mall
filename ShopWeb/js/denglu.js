$(function () {
    $('.scan_code').click(function () {
        $('.login_Interface').css({display:'none'});
        $('.scan_code_login').css({display:"block"});
    })
    $('.account_number,.scan_code_login button').click(function () {
        $('.login_Interface').css({display:'block'});
        $('.scan_code_login').css({display:"none"});
    })
    zhuce({
        //u = 关闭png
        //h = 正确png
            use : $('.user input[type="text"]'),
            u : $('.user_hint'),
            obj : $('.user input[type="password"]'),
            h : $('.password_hint'),
            act: $('.active a')
        });
});
