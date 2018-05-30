$(function () {

    $('.address_Set li').click(function () {
        liBorderActive($(this),'showRightIcon');
        imgActive($('.address_Set li a'),$(this).find('a'),'text-red');
    }).hover(function () {
        $(this).find('a').addClass('text-blue');
    },function () {
        $(this).find('a').removeClass('text-blue');
    });
    $('.add_btn').find('button').click(function () {
        $('.addAddTotal').css('display','block');
        addNew = $('.add_AddMain').eq(0).clone();
        //每次点克隆一次
    });
    $('.add_AddBtn').click(function () {
        addFrom($('.addAddTotal'),$('.addAddTotal li input'),$('.addAddTotal li label'),addNew.find('.userAddress span'),$('.add_AddMain'));
        $('.numberNow').text($('.add_AddMain .userAddress').length);
    });
    $('.closeIcon').click(function () {
        addNew=null;
        //每次点击让克隆的失效
        $('.addAddTotal').css('display','none');
    });


});

var addNew=null;

