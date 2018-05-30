$(function () {

    $('.star1').find('i').mouseover(function () {
        starLight($('.star1').find('i'),$(this),'starActive');
    }).end().parent().find('.star2').find('i').mouseover(function () {
        starLight($('.star2').find('i'),$(this),'starActive');
    });
    $('.eva_Main_Down').find('li').click(function () {
        imgActive($('.eva_Main_Down').find('li'),$(this),'pjActive');
    });
    $('.eva_Submit').click(function () {
        var s = $('.eva_Textarea').find('textarea').val();
        if(s=="")
        {
            alert('评价不能为空');
        }
        else{
            if(s.replace(/(^\s*)|(\s*$)/g,'') == "")
            {
                alert('评价不能全为空');
            }
            else
            {
                if(  s.length<15)
                {
                    alert('评价不能少于15个字符');
                }
                else{
                    var sure = offEvent($('.eva_Submit'),'click','是否确认提交评论，提交后不可修改');
                    if(sure)
                    {
                        $('.eva_Textarea').find('textarea').attr('readonly','true');
                        window.location.href = "../ShopWeb/评价详情页.html";
                    }
                }
            }
        }
    });
    $('.eva_Text').find('input').click(function () {
        if($(this).is(':checked'))
        {
            inputId = $(this).index();
            switch(inputId)
            {
                case 0:
                    $(this).siblings('span').text('好评');
                    break;
                case 1:
                    $(this).siblings('span').text('中评');
                    break;
                case 2:
                    $(this).siblings('span').text('差评');
                    break;
            }
        }
    });

});


