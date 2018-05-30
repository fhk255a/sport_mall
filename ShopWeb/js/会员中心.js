$(function () {
    $('.vip_center_list1_2').find('li').click(function () {
        imgActive($('.vip_center_list1_2 li a'),$(this).find('a'),'orderNav-ActiveBlue');
    });
    $('.vip_center_list1_2').find('li').hover(function () {
        $(this).find('a').addClass('orderNav-ActiveRed');
    },function () {
        $(this).find('a').removeClass('orderNav-ActiveRed');
    });
    $('.vip_center_list1_1 li').hover(function () {
        imgActive( $('.vip_center_list1_1 li'),$(this),'activeBG');
    });
    $('.vip_center_menu').find('dd').click(function () {
        liBorderActive($(this),'showRightIcon');
        imgActive($('.vip_center_menu dd').find('a'),$(this).find('a'),'text-Red');
    }).hover(function () {
        $(this).find('a').addClass('text-blue');
    },function () {
        $(this).find('a').removeClass('text-blue');
    });

    $('.vip_center_list2_2 input').click(function () {
        if(confirm('确定要确认收货吗？确认后不可恢复!'))
        {
            $('.vip_center_list2_2').remove();
        }
        else
        {
            return;
        }
    });
});