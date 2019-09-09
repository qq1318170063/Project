$(function () {
    $('.sidecart_content').click(function(){
        window.open('scart.html');
    });

    $('.backtop').css('visibility','hidden');//进入页面就隐藏
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            //当滚动到200px的时候，盒子显示，否则隐藏
            $('.backtop').css('visibility','visible'); //不加这个属性就不占位置 上面盒子会掉下来;
        }
        else {
            $('.backtop').css('visibility','hidden');
        }
    });
    $(".backtop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});


$('.sidebar_common').mousemove(function () {
    $(this).css('background-color', '#EC3E7D');
    $(this).find('.myaccount').show();
    $(this).find('.myaccount').stop().animate({
        right: 38,
        opacity: 1,
    }, 300)
}).mouseout(function () {
    $('.sidebar_common').css('background-color', '');
    $('.myaccount').stop().animate({
        right: 70,
        opacity: 0
    }, 300)
    $('.myaccount').hide();
});

$('.sidebar_service').mousemove(function () {
    $(this).css('background-color', '#EC3E7D');
    $(this).find('.sidebar_aimg').show();
    $(this).find('.sidebar_aimg').stop().animate({
        right: 88,
        opacity: 1,
    }, 200)
}).mouseout(function () {
    $('.sidebar_service').css('background-color', '');
    $('.sidebar_aimg').hide();
    $('.sidebar_aimg').stop().animate({
        right: 120,
        opacity: 0
    }, 200)

    
});
