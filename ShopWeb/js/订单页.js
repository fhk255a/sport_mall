$(function () {
    $('.cancelEvn').click(function () {
        var isRem = offEvent($(this),'click','确定要删除订单吗？   确认后不可取消');
        if(isRem)
        $(this).parent().parent().parent().remove();
        if($('.orderPage_Shop').children().length==0)
        {
            $('.orderPage_Shop').addClass('showText');
            $('.orderPage_Shop').text('订单里面没有任何记录啦，快去买点东西吧');
        }
    });
    $('.orderPage_Nav').find('li').click(function () {
        imgActive($('.orderPage_Nav li a'),$(this).find('a'),'orderNav-Active');
    });
    $('.order_TotalSet li').click(function () {
        liBorderActive($(this),'showRightIcon');
        imgActive($('.order_TotalSet li a'),$(this).find('a'),'text-red');
    }).hover(function () {
        $(this).find('a').addClass('text-blue');
    },function () {
        $(this).find('a').removeClass('text-blue');
    });
});