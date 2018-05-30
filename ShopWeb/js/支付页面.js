$(function () {
    $('.pwdWord').find('input').keyup(function (e) {
        nextFocus($('.pwdWord').find('input'),$(this),e);
    });
    $('.bank_card ul li').click(function () {
        $(this).find('input').prop("checked", true);
        $('.payment_mode2 div div').find('input').removeProp('checked');
        $('.payment_mode2 div div').find('input').prop('disabled', true);
    });
    $('.network_pay').click(function () {
        $(this).find('input').prop("checked", true);
        $('.bank_card ul li').siblings().find('input').prop("checked", false);
        $('.payment_mode2 div div').find('input').prop('disabled', false);
    });
    $('.payment_mode2 div div').click(function () {
        $(this).find('input').prop("checked", true);
    });
    $('.open_card span').click(function (){
        $('.bank_card').eq(1).toggle();
        addElement($('.bank_card'));
       $('.bank_card').eq(1).css('display')=='block'?$('.open_card span').text('收起全部∧'):$('.open_card span').text('展开全部∨');
    })
});
