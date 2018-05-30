// FHK 2018-2-2

$(function () {
    $('.evn_Recom').find('img').mouseover(function () {
        imgActive($('.evn_Recom').find('img'), $(this), 'imgBorder');
    }).mouseout(function () {
        reClass(this, 'imgBorder');
    });
    $('.evnM_L_New').find('li').mouseenter(function () {
        imgSlideText(this);
    }).mouseleave(function () {
        $(this).find('i').remove();
    });
    $('.shop_smallImg').find('li').hover(function () {
        liBorderActive(this, 'liBorderAct');
    },(function () {
        reClass(this, 'liBorderAct');
    })).click(function () {
        liBorderActive(this, 'clickNow');
    });
    $('.shop_endImg').find('a').click(function () {
        liBorderActive(this, 'smallSureAct');
        $(this).hasClass('smallSureAct') ? $('.shop_num').find('input').removeAttr("disabled") : $('.shop_num').find('input').attr('disabled', 'disabled');
    });
    $('.shop_num').find('input').click(function () {
        $('.shop_endImg').find('a').hasClass('smallSureAct') ? $(this).removeAttr("disabled") : $(this).attr('disabled', 'disabled');
    });
    $('.shopNum1').click(function () {
        isAdd = true;
        $('.shop_endImg').find('a').hasClass('smallSureAct') ? isAct = true : isAct = false;
        isActNum($('.shop_num').find('input'), 4851, isAdd);
    }).next().click(function () {
        isAdd = false;
        $('.shop_endImg').find('a').hasClass('smallSureAct') ? isAct = true : isAct = false;
        isActNum($('.shop_num').find('input'), 4851, isAdd);
    });
    var shopCopy = $('.shop_R_List').children().clone(true);
    $('.shop_R_List').append(shopCopy);
    // $('.shop_R_List').get(0).innerHTML += $('.shop_R_List').get(0).innerHTML;
    $('.shop_R_ListBox').hover(function () {
            clearInterval(timer);
        },(function () {
            autoRoll($('.shop_R_List'));
    }));
    autoRoll($('.shop_R_List'));
    $('.shop_Eva_Total img:not(.evnBigImg)').click(function (event) {
        showImg($(this), $('.evnBigImg'));
        event.stopPropagation();
    });
    $(document).click(function (event) {
        event.stopPropagation();
        $('.evnBigImg').stop().slideUp(500);
    });

    $('.shop_bigImg').hover(function () {
        $('.small_MoveImg').css('display','block');
        $('.showImgBox').css('display','block');
        $('.shop_bigImg').mousemove(function (e) {
            imgMoving($('.small_MoveImg'),$('.bigImg'),e);
        })
    },function () {
        $('.small_MoveImg').css('display','none');
        $('.showImgBox').css('display','none');
    });

    $('.evnM_R_top li').click(function () {
        $(this).addClass('activeBg').siblings().removeClass('activeBg');
        $(this).find('a').addClass('text-White').end().siblings().find('a').removeClass('text-White')
    })
});











