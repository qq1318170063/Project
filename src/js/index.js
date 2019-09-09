; $(function () {
    $('#sidebarbox').load('html/sidebar2.html');
    $('#headerbox').load('html/header2.html');
    $('#footerbox').load('html/footer2.html');
    $('#navheaderbox').load('html/nav.html');

    //底部广告
    $('.footer_colsebtn').click(function () {
        $('.footer_ad').hide();//隐藏
    });


    // $('.mycart').click(function(){
    //     window.open('../html/scart.html');
    // });
    
    //楼层
    $(".floor").hide();
    $(window).scroll(function (event) {
        //获取滚动的高度		
        let scrollTop = $(window).scrollTop();
        //判断滚动到第一个楼层的位置 .floor显示
        if (scrollTop > $(".louceng").eq(0).offset().top - 200) {
            $(".floor").stop(true).fadeIn();
        } else {
            $(".floor").stop(true).fadeOut();
        };

        $(".louceng").each(function (i) {
            if (scrollTop >= $(this).offset().top - 100) {
                $(".floor_li").eq(i).addClass("active").siblings().removeClass("active")
            }
        });
    });
    $(".floor_li").click(function () {
        //使楼层滚动到相对应的位置
        $('body,html').animate({
            scrollTop: $(".louceng").eq($(this).index()).offset().top
        }, 300)
    })


    //限时购
    let end = '2019-11-14 08:55:00';
    function settime() {
        //获取系统时间
        var nowtime = Date.now();//设置执行这行代码时的纪元毫秒数
        var endtime = Date.parse(end);//把截止时间变成纪元毫秒数
        var cha = endtime - nowtime;//时间差
        var secs = parseInt(cha / 1000);//变成秒数

        if (secs <= 0) {
            //停止计时，换图片，倒计时为空
            clearInterval(timer);
            $('.limit_time').html('00:00:00');
        } else {
            //没有到达临界值，那就显示 天，时，分，秒
            let obj = time(secs);//创建对象接收返回的数据
            let str = `剩余&nbsp;${toDb(obj.hour)} : ${toDb(obj.min)} : ${toDb(obj.secs)}`;
            $('.limit_time').html(str);
        }
    }
    settime();
    let timer = setInterval(settime, 1000);

    //公告栏
    let liSize = $(".banner_ul").find("li").length;
    if (liSize > 1) {
        setInterval(function () {
            $('.banner_ul').animate({
                marginTop: "-28px"
            }, 500, function () {
                $(this).css({ marginTop: "0" }).find("li:first").appendTo(this);
            });
        }, 3000);
    }

    let page = 1;
    let num = 12;
    function init() { //初始化页面
        $.ajax({
            type: 'get',
            url: 'api/list.php',
            data: {
                page: page,
                num: num,
            },
            success: str => {
                let arr = JSON.parse(str);
                // console.log(arr);
                data(arr);
            }
        });

    };
    init();//初始化页面入口

    function data(arr) {
        let html = arr.data.map(item => {
            item.img = item.img.split(',../');
            // console.log(item.img);
            return ` <li class="product_li">
                    <div class="product_item">
                        <img src="${item.img[1]}" alt="">
                        <p class="prdouct_p">
                            <span class="product_new">新品<br>上市</span>
                        </p>
                        <p class="prdouct_state">
                           
                            <span class="prdouct_state_span">${item.brand}</span>
                        </p>
                    </div>
                    <p class="prdouct_title">
                        <b>
                            ${item.area}
                        </b>
                        ${item.name}
                    </p>
                    <p class="product_price_item">
                        <span class="product_rmb">￥</span>
                        <span class="product_price">${item.price}</span>
                        <span class="product_oldprice"><del>￥${item.oldprice}</del></span>
                    </p>
                </li>`
        }).join('');
        $('.product_ul').html(html);
    };
    
    $('.product_ul').on('click','li',function(){
        window.open('html/list.html');
    })
});