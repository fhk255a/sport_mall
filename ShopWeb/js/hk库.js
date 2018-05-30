//_this = 传进来的元素
//img = 显示的图片
function showImg(_this, img) {
    img.css('top', $(window).height() / 2 - img.height() + 'px');
    img.css('left', $(window).width() / 2 - img.width() + 'px');
    img.stop().slideDown(500);
    img.attr('src', _this.attr('src'));
}
//鼠标移入生成div
function marks(obj,_this,clName,text) {
    obj = $(obj);
    _this = $(_this);
    _this.css('position','relative');
    _this.find('.'+clName+'').css('display','block');
    obj.each(function (i) {
        if(_this.index()==i)
        {
            if(_this.find('.'+clName+'').length!=0)
            {
                _this.css('position','relative');
            }
            else{
                if(text)//如果text这个参数存在 就生成文字  不存在就执行else
                {
                    _this.css('position','relative');
                    _this.append('<div class='+clName+'></div>');
                    addText(_this,clName,text);
                }
                else{
                _this.css('position','relative');
                _this.append('<div class='+clName+'></div>');
                }
            }
        }
    });
}
//生成一块带文字的div
function addText(_this,clName,text) {
    _this.find('.'+clName+'').append('<div class='+"textNow"+'></div>');
    _this.find('.textNow').text(text);
    _this.find('.textNow').css({
        'line-height':_this.outerWidth(true)/8+'px',
        'font-size':_this.outerWidth(true)/10+'px',
        'height':_this.outerWidth(true)/8+'px',
        'margin-top':_this.outerHeight(true)/2.5+'px'
    });

}
//自动滚动条
//_this = 传进来的元素
var timer = null;
//右侧自动播放
//_this = 当前元素
function autoRoll(_this) {
    var num = _this.children().outerHeight(true);
    clearInterval(timer);
    timer = setInterval(function () {
        var t = _this.position().top;
        if (t <= -_this.outerHeight(true)) {
            _this.css('top', '0px');
        }
        else {
            _this.animate({'top': t - num + 'px'}, 500);
        }
    }, 1000);
}
//obj = 所有input输入框
//_this = 当前获取光标的输入框
//e.keyCode={8,37,39} 分别为 回退键、左键、右键
function nextFocus(obj,_this,e) {
    obj = $(obj);
    var i = _this.index();
    var re = /\d/g;
    if (e.keyCode == 8) {
        if (i == 0) {
            obj.eq(i).focus();
        }
        else {
            if (_this.val() == '') {
                obj.eq(i - 1).focus();
            }
            else {
                obj.eq(i - 1).val('');
            }
        }
    }
    if (e.keyCode == 37) {
        obj.eq(i - 1).focus();
    }
    else if (e.keyCode == 39) {
        obj.eq(i).focus();
    }
    if(re.test(_this.val())) {
        if (_this.val() == ' ') {
            _this.val('');
            obj.eq(i).focus();
        }
        if (_this.val() == '') {
            obj.eq(i - 1).focus();
        }
        else {
            obj.eq(i + 1).focus();
        }
    }
    else{
        _this.val('');
    }
}
//rollImg = 图片张数
//num = 图片对应的数字
//img = 所有的图片
var timer1 = null;
var rollImg =0;
function bannerRoll(img,num) {
    img = $(img);
    num = $(num);
    rollImg++;
    if(rollImg==img.length)
    {
        rollImg=0;
    }
    if(num)
    {
        img.eq(rollImg).css('display','block').siblings().css('display','none');
        num.eq(rollImg).css('background','#ff0036').siblings().css('background','#000000');
    }
    else{
        img.eq(rollImg).css('display','block').siblings().css('display','none');
    }
}
//_this = 当前选中元素
//objImg = 对应的img
function tabImgBanner(_this,objImg) {
    var i = $(_this).index();
    objImg.eq(i).css('display','block').siblings().css('display','none');
    _this.css('background','#ff0036').siblings().css('background','#000000');
}
//添加商品数量
//_this = 当前传进来的元素
//_maxNum = 限制的最大数额
//isAdd = 是增是减?
var isAdd;
function addNum(_this, maxNum, isAdd) {
    var val = _this.val();
    if (isAdd) {
        if (val > maxNum) {
            alert('别顶了 到头了 瞎啊');
            return;
        }
        else {
            val++;
            _this.val(val);
        }
    }
    else {
        if (val < 1) {
            alert('穷小子 到头了 没钱就别瞎逛');
            return;
        }
        else {
            val--;
            _this.val(val);
        }
    }

}
//isAct = 是否选中了商品？
var isAct = false;
//_this = obj鼠标当前单击的元素
//maxNum = input能输最大值
function isActNum(_this, maxNum, isAdd) {
    if (isAct) {
        addNum(_this, maxNum, isAdd);
    }
    else {
        alert('你见过东西都没选就添加的购物方式？');
        return;
    }
}
//obj = _this的所有lenght长度
//_this = obj鼠标当前移入的元素
//clName = className类名
function imgActive(obj, _this, clName) {
    obj = $(obj);
    _this=$(_this);
    obj.each(function (i) {
        obj.eq(i).removeClass(clName);
    });
    _this.addClass(clName);
}
//生成元素
//oldEle = 生成对象的模板
function addElement(oldEle) {
    oldEle = $(oldEle);
    var newAdd = oldEle.eq(0).clone(true);
    if(oldEle.length>=2)
    {
        return;
    }
    else{
        oldEle.after(newAdd);
    }
}
//_this = 当前传进来的元素
//clName = 需要添加减少的className
function liBorderActive(_this, clName) {
    _this = $(_this);
    _this.toggleClass(clName).siblings().removeClass(clName);
}
//obj = 当前的全部元素
//clName = 需要删除的className
function reClass(obj, clName) {
    obj = $(obj);
    obj.each(function (i) {
        obj.eq(i).removeClass(clName);
    });
}
//_this = obj鼠标当前移入的元素
//clName = className类名
//h =  _this当前元素的高度
function imgSlideText(_this) {
    _this = $(_this);
    _this.find('i').remove();
    var clName = ({
        'display': 'none',
        'position': ' absolute',
        'left': ' 0',
        'top': ' 0',
        'z-index': ' 999',
        'width': '100%',
        'height': '100%',
        'text-align': 'center',
        'font-size': '20px',
        'cursor': 'pointer',
        'color': 'rgba(255,0,54,1)',
        'background': ' rgba(125,125,125,0.2)'
    });
    var h = _this.outerHeight(true);
    _this.css('position', 'relative');
    _this.append('<i class="classI">' +
        '<h1 style=' +
        '"background: rgba(255,255,255,0.5);' +
        'line-height: ' + h + 'px">' +
        '销量NO.' + (_this.index() + 1) + '' +
        '</h1></i>');
    _this.find('.classI').css(clName);
    _this.find('i').stop().fadeIn();
}
//_this = 当前传进来的元素
function displayNone(_this) {
    _this = $(_this);
    _this.find('.small_MoveDiv').css('display', 'none');
    _this.css({'opacity': '1'});
}
//moveImg = 需要移动的小图
//bigImg = 根据小图移动的大图
//smallParent = 小图的父级
//bigParent = 大图的父级
//e = 事件对象
function imgMoving(moveImg,bigImg,e) {
    moveImg = $(moveImg);
    bigImg = $(bigImg);
    //找到元素的父级
    var smallParent = moveImg.parent();
    var bigParent = bigImg.parent();
    //定位
    var moveLeft = e.pageX -  smallParent.position().left-(moveImg.width()/2);
    var moveTop = e.pageY -  smallParent.position().top-(moveImg.height()/2);
    var bigImgX = moveLeft/(smallParent.width()-moveImg.width());
    var bigImgY = moveTop/(smallParent.height()-moveImg.height());
    //开始运动
    moveImg.css({'left':moveLeft+"px",'top':moveTop+"px"});
    bigImg.css({'left':-bigImgX*(bigImg.width()-bigParent.width())+"px"});
    bigImg.css({'top':-bigImgY*(bigImg.height()-bigParent.height())+"px"});
    //判断是否越界
    if (moveLeft >= smallParent.width() - moveImg.width()) {
        moveImg.css('left', smallParent.width() - moveImg.width() + 'px');
        bigImg.css({'left':bigParent.width()-bigImg.width()});
    }
    else if (moveLeft <= 0) {
        moveImg.css('left', 0 + 'px');
        bigImg.css({'left':0});
    }
    if (moveTop >= smallParent.height() - moveImg.height()) {
        moveImg.css('top', smallParent.height() - moveImg.height() + 'px');
        bigImg.css({'top':bigParent.height()-bigImg.height()+"px"});
    }
    else if (moveTop < 0) {
        moveImg.css('top', 0 + 'px');
        bigImg.css({'top':0});
    }
}
//obj = 元素的所有集合
//_this = 当前元素
//clName = 类名
//num = 当前评分
function starLight(obj,_this,clName) {
    var num= 0;
    num = _this.index()-1;
    obj.each(function (x) {
        x<=num?obj.eq(x).addClass(clName):obj.eq(x).removeClass(clName);
    });
    _this.one().click(function () {
        var rl = offEvent(obj,'mouseover','确定要给该商品打  '+ (num+1) +'   分数吗?');
        if(rl)
        {
            obj.off('click');
        }
    })
}
// obj = 目标对象
// event = 目标对应的事件
// str = 需要显示的内容
function offEvent(obj,event,str) {
    if(str)
    {
        if(confirm(str))
        {
            obj.off(event);
            return true;
        }
        else{
            return false;
        }
    }
    else{
        obj.off(event);
    }
}
/*
addAddTotal = 新增表单from
inputTarget = 新增的表单输入框的所有元素
iputLabel = 对应inputTarget的内容
addNew = 是由$(userAddress)克隆出来的
newSpan = 是addNew里面的span，即克隆出来的元素
acceptTarget = 负责接收新生成的表单
*/
function addFrom(form,inputTarget,iputLabel,newSpan,acceptTarget) {
    var arr = [];
    inputTarget = $(inputTarget);
    newSpan = $(newSpan);
    iputLabel = $(iputLabel);
    acceptTarget = $(acceptTarget);
    form = $(form);

    inputTarget.each(function (i) {
        arr[i] = inputTarget.eq(i).val();
    });
    newSpan.each(function (i) {
        newSpan.eq(i).text(arr[i]);
    });
    for(var i  = 0; i<inputTarget.length;i++)
    {
        if(newSpan.eq(i).text()=='')
        {
            alert('请在  \"'+iputLabel.eq(i).text().replace('：','')+'\"    输入内容');
            return;
        }
    }
    acceptTarget.eq(0).after(addNew);
    form.css('display','none');
}
//选中改变classname
//borther = _this的兄弟元素
function actText(borther,_this,clName) {
    borther = $(borther);
    _this.addClass(clName).parent(borther).siblings().find('a').removeClass(clName);
}

function changeRool(obj,obk,objName,arr,agin,objwidth,time) {
    obj.find(obk).clone(true).appendTo(objName);
    var ssq = parseInt(obj.css(arr));
    var ssw = objwidth;
    function roolPic() {
        ssq -= ssw;
        if(ssq<agin){
            ssq = 0;
        }
        obj.css(arr,ssq+'px');
    }
    var timer = setInterval(roolPic,time);

    obj.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(roolPic,time);
    });
}

//点击切换菜单
function openMenu(obj1,obj2,i) {
    var itrue = true;
    obj1.onclick = function () {
        if(itrue){
            obj2.style.display = 'block';
            i.className='iconfont icon-shouqi';
            itrue = false;
        }else{
            obj2.style.display = 'none';
            i.className='iconfont icon-xiala';
            itrue = true;
        }
    }
}

//添加蒙版
function mengbang(shangpin_pic,obj) {
    $(shangpin_pic).on('mousemove',function () {
        $(this).children().find(obj).css({opacity:0.7});
        $(this).css({border:"1px solid red"})
    });
    $(shangpin_pic).on('mouseout',function () {
        $(this).children().find(obj).css({opacity:1});
        $(this).css({border:"1px solid #ccc"})
    })
}

//首页

$(function () {
    //隐藏部分出现
    hiddenAndshow($('#menu_bar_drop_down'),$('#mb_drop_down_bar'),'i','icon-xiala icon-shouqi');
    $('.mbdd_ification').hover(function () {
        marks($('.mbdd_ification'),$(this),'navDivMark');
    },function () {
        $('.navDivMark').css({'display':'none'});
    });
    //导航
    $('#mb_bar li').hover(function () {
        $(this).find('a').addClass('text-Red');
    },function () {
        $(this).find('a').removeClass('text-Red');
    });
    $('#mb_bar li').find('a').click(function () {
        actText($('#mb_bar li'),$(this),'actText-Red')
    });
})

//obj1:点击对象；obj2:点击后出现的对象；obk:obj1的子元素；
//obkName:opj1的子元素的属性名，用于替换属性
function hiddenAndshow(obj1,obj2,obk,obkName){
    obj1.click(function () {
        obj2.toggle();
        obj1.find(obk).toggleClass(obkName);
    })
}

//isDisplay = 来控制div的生成个数
//_this = 当前的元素
//e = 事件对象
//clName = 设置好的样式
// var isDisplay = 0;
// function addElement(_this, e) {
//     // var isDisplay=0;
//     isDisplay++;
//     _this = $(_this);
//     if (isDisplay < 2) {
//         var clName = ({
//             'display': 'block',
//             'position': 'absolute',
//             'width': '100px',
//             'height': '100px',
//             'background': 'rgba(255,255,255,0.5)'
//         });
//         var oDiv = '<div class="small_MoveDiv"></div>';
//         // _this.css({'position': 'relative', 'opacity': '0.8'});
//         _this.one().append(oDiv);
//         _this.find('.small_MoveDiv').css(clName);
//         _this.mousemove(function (e) {
//             movesi(_this, e);
//         });
//     }
//     else {
//         _this.find('.small_MoveDiv').css({'display': 'block', 'cursor': 'crosshair'});
//         _this.css({'opacity': '0.8'});
//         _this.mousemove(function (e) {
//             movesi(_this, e);
//         });
//     }
// }

//_this = 当前传进来的元素
//e = 事件对象
//pageX . pageY = 鼠标坐标值
// function movesi(_this, e) {
//     var x = e.pageX - _this.position(true).left;
//     var y = e.pageY - _this.position(true).top;
//     var oBox = _this.find('.small_MoveDiv');
//     oBox.css({
//         'left': x - oBox.outerWidth() / 2 + 'px',
//         'top': y - oBox.outerHeight() / 2 + 'px'
//     });
//     if (oBox.position().left >= _this.outerWidth() - oBox.outerWidth()) {
//         oBox.css('left', _this.outerWidth() - oBox.outerWidth() + 'px');
//     }
//     if (oBox.position().left < 0) {
//         oBox.css('left', 0 + 'px');
//     }
//     if (oBox.position().top >= _this.outerHeight() - oBox.outerHeight()) {
//         oBox.css('top', _this.outerHeight() - oBox.outerHeight() + 'px');
//     }
//     if (oBox.position().top < 0) {
//         oBox.css('top', 0 + 'px');
//     }
//     console.log(_this.position(true).left);
// }
