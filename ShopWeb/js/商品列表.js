$(function () {
 var isT = false;
 //底部换一换
    $('.like_right').click(function () {
        isT?$('.like_img').css({'marginLeft': '-1235px',transition:'2s'}):$('.like_img').css({'marginLeft': '0px',transition:'2s'});
        isT =!isT;
    });
    mengbang($('.content,.like_img1'),$('.img_box a img,.like_img1 div a img'));
});
