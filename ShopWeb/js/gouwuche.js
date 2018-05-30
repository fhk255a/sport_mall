$(function () {
    // 全选和取消全选
    $('input[name= "check_all"]').click(function () {
        if (this.checked === true) {
            $('.check1 input').each(function () {
                this.checked = true;
            })
        } else {
            $('.check1 input').each(function () {
                this.checked = false;
            })
        }
        TotalPrice()
    });
    $('input[name="yoga"]').click(function () {
        var aaa = 0;
        $('input[name="yoga"]').each(function (i) {
            if ($('input[name="yoga"]').eq(i).is(":checked")) {
                aaa += 1;
                if (aaa === 4) {
                    $('input[name="check_all"]').prop("checked", true);
                } else {
                    $('input[name="check_all"]').prop("checked", false);
                }
            }
        });
        TotalPrice();
    });
    // 加的效果
    $(".add").click(function () {
        var n = $(this).prev().val();
        var num = parseInt(n) + 1;
        if (num === 0) {
            return;
        }
        $(this).prev().val(num);
        TotalPrice();
    });
    //减的效果
    $(".reduce").click(function () {
        var n = $(this).next().val();
        var num = parseInt(n) - 1;
        if (num === 0) {
            return
        }
        $(this).next().val(num);
        TotalPrice()
    });
    $('.remove').click(function () {
        $(this).parents('.num2').remove();
        TotalPrice();
    });
    function TotalPrice() {
        var allprice = 0; //总价
        var number = 0;
        $('.num2').find("input[name='yoga']").each(function() { //循环店铺里面的商品
            if ($(this).is(":checked")) { //如果该商品被选中
                var num = parseInt($(this).parents(".num2").find(".number input").val()); //得到商品的数量
                var price = parseFloat($(this).parents(".num2").find(".unit_price1 span").text()); //得到商品的单价
                console.log(num);
                var total = parseFloat($(this).parents(".num2").find(".subtotal1 span").text()); //计算单个商品的总价
                var tot =price * num;
                total = tot.toFixed(2);
                allprice+=tot;
                number +=num;
            }
            $(this).closest(".num2").find(".subtotal1 span").text(total); //显示被选中商品的店铺总价
        });
        $('.total i span,.price_top').text(allprice.toFixed(2));
        $('.sum i').text(number)
    }
});