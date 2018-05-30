$(function () {
   $('.ncp_1_1').hover(function () {
       liBorderActive(this,'borderClass');
       marks( $('.ncp_1_1'),$(this),'divTextnow',$(this).find('span').eq(0).text());
   },function () {
       reClass(this,'borderClass');
       $(this).find('.divTextnow').css('display','none');
   });
   $('#recommend .recommend_0_1').hover(function () {
       liBorderActive(this,'borderClass');
       marks( $('#recommend .recommend_0_1'),$(this),'divTextnow',$(this).find('span').eq(0).text());
   },function () {
       reClass(this,'borderClass');
       $(this).find('.divTextnow').css('display','none');
   });
   $('.recommend_0_d').hover(function () {
       liBorderActive(this,'borderClass');
       marks( $('.recommend_0_d'),$(this),'divTextnow',$(this).find('span').eq(0).text());
   },function () {
       reClass(this,'borderClass');
       $(this).find('.divTextnow').css('display','none');
   });
   $('.ncp_2up').hover(function () {
       liBorderActive(this,'borderClass');
       marks( $('.recommend_0_d'),$(this),'divTextnow',$(this).find('span').eq(0).text());
   },function () {
       reClass(this,'borderClass');
       $(this).find('.divTextnow').css('display','none');
   });
   $('.explosion_bs').find('div').hover(function () {
       liBorderActive(this,'borderClass');
       marks( $('.explosion_bs').find('div'),$(this),'divTextnow',$(this).find('span').eq(0).text());
   },function () {
       reClass(this,'borderClass');
       $(this).find('.divTextnow').css('display','none');
   });
   $('.hot_commodity_picS').find('div').hover(function () {
       liBorderActive(this,'borderClass');
       marks( $('.hot_commodity_picS').find('div'),$(this),'divTextnow',$(this).find('.explosion_sign span').eq(0).text());
   },function () {
       reClass(this,'borderClass');
       $(this).find('.divTextnow').css('display','none');
   });
   $(' .commodity_picS_2').hover(function () {
       liBorderActive(this,'borderClass');
       marks(  $(' .commodity_picS_2'),$(this),'divTextnow',$(this).find('span').eq(0).text());
   },function () {
       reClass(this, 'borderClass');
       $(this).find('.divTextnow').css('display', 'none');
   });
   $('.mbdd_ification').hover(function () {
       marks($('.mbdd_ification'),$(this),'navDivMark');
   },function () {
       $('.navDivMark').css({'display':'none'});
   });
   $('#Carousel').hover(function () {
       clearInterval(timer1);
   },function () {
       timer1 = setInterval(function () {
           bannerRoll($('.carousel_pic1 ul li'),$('.carousel_num li'));
       },1500);
   });
   timer1 = setInterval(function () {
       bannerRoll($('.carousel_pic1 ul li'),$('.carousel_num li'));
   },1500);

   $('.carousel_num li').click(function () {
       tabImgBanner($(this),$('.carousel_pic1 ul li'));
   }).hover(function () {
       tabImgBanner($(this),$('.carousel_pic1 ul li'));
   });


    $('#menu_bar_drop_down').click(function () {
        $('.menu_bar_bar-1 i').toggleClass('icon-xiala icon-shouqi');
        $('#mb_drop_down_bar').toggle();
    })
    //隐藏部分出现
    hiddenAndshow($('#menu_bar_drop_down'),$('#mb_drop_down_bar'),'i','icon-xiala icon-shouqi');
    //obj1:点击对象；obj2:点击后出现的对象；obk:obj1的子元素；
    //obkName:opj1的子元素的属性名，用于替换属性
    function hiddenAndshow(obj1,obj2,obk,obkName){
        obj1.click(function () {
            obj2.toggle();
            obj1.find(obk).toggleClass(obkName);
        })
    }

    changeRool($('.roll_pic1'),'img',".roll_pic1",'marginLeft','-1600','593','2000');
    changeRool($('.roll_pic2'),'img',".roll_pic2",'marginTop','-300','182','2000');
    changeRool($('.roll_pic3'),'img',".roll_pic3",'marginLeft','-1100','594','2000');
    changeRool($('.roll_pic4'),'img',".roll_pic4",'marginTop','-300','182','2000');


});