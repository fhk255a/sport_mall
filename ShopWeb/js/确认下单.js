$(function () {

    $('#Management_address_ul').find('input').click(function () {
        $(this).parent().addClass('management_add_send').siblings().removeClass('management_add_send');;
        $(this).parent().find('p').css({'display':'block'}).end().siblings().find('p').css({'display':'none'});
        $(this).parent().find('a').css({'display':'block'}).end().siblings().find('a').css({'display':'none'});

    })
})