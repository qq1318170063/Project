; $(function () {
    $('#top').load('header.html');
    $('#navtop').load('nav.html');
    $('#bottom_sidebar').load('footer.html');
    $('#right_sidebar').load('sidebar.html');

    $('.sidecart').click(function () {
        window.open('scart.html');
    });


    function data(arr) {   //渲染页面
        let html = arr.data.map(item => {
            // let arrimg = arr.data[0].img.split(',');
            item.img = item.img.split(',');
            return ` <li class="show_li" data-id = "${item.id}">
                    <div class="showbox">
                        <div class="showbox_right">
                            <dl class="showbox_right_dl">
                                <dd></dd>
                                <dd></dd>
                                <dd></dd>
                                <dd></dd>
                            </dl>
                        </div>
                        <div class="showbox_item">
                            <div class="showbox_top show_deta">
                                <b><img src="../images/showimg.png" alt=""></b>
                                <dl>
                                    <dd>
                                        <i><img src="${item.brandimg}" alt=""></i>
                                        ${item.brand}
                                    </dd>
                                </dl>

                                <a href="###">
                                    <img src="${item.img[0]}" alt="">
                                </a>
                            </div>
                            <div class="show_price">
                                <span class="count_price">${item.discount}</span>
                                <span class="price">￥${item.price}</span>
                                <span class="dis_price">
                                    <del>￥${item.oldprice}</del>
                                </span>
                            </div>
                            <div class="showbox_middle">
                                <div class="showbox_info">
                                    <p class="info_p1">
                                        <b class="yew">
                                            ${item.area}
                                        </b>
                                    </p>
                                    <p class="info_p2 show_deta">
                                        
                                        <font color="#ec3e7d">防晒</font>
                                        ${item.name}
                                    </p>
                                    <p class="info_p3">
                                        ${item.weight}(毫升)
                                    </p>
                                </div>
                            </div>
                            <div class="btn_buy">
                                <a href="###" class="btn_a">
                                    <span class="btnspan"><span>加入购物车</span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>` ;
        }).join('');
        $('.show_ul').html(html);

        let total = Math.ceil(arr.total / arr.num);
        let spanstr = '';
        for (let i = 0; i < total; i++) {
            spanstr += `<a href="###" class="page_a">${i + 1}</a>`;
        }
        $('.pageview').html(`${spanstr}`);
        $('.pageview').children().eq(page - 1).addClass('active');
        max = $('.pageview').children().length;
        if (page != max) {
            $('.next').css('background-color', '#fff');
        } else {
            $('.next').css('background-color', '#999');
        }
        if (page != 1) {
            $('.prev').css('background-color', '#fff');
        } else {
            $('.prev').css('background-color', '#999');
        }
    };
    let page = 1;
    let num = 24;

    let isok = false;
    function init() { //初始化页面
        Ajax({
            type: 'get',
            url: '../api/list.php',
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
        
        $('.pageview').on('click', '.page_a', function () {
            $(this).addClass('active').siblings().removeClass('active');
            page = $(this).html();
            if (isok) {

            } else {
                init2();
            }
        });

    };
    init();//初始化页面入口
    function init2() { //初始化页面
        Ajax({
            type: 'get',
            url: '../api/list.php',
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
    }


    // 点击跳转下一页
    $('.next').click(function () {
        max = $('.pageview').children().length;
        if (page >= 1 && page < max) {
            page++;
           
            if (page >= max) {
                page == max;
                $('.next').css('background-color', '#999');
                // init();
            } else {
                $('.next').css('background-color', '#fff');
                // init();
            }
            init(); 
        }
      
    });

    // 点击跳转上一页
    $('.prev').click(function () {
        max = $('.pageview').children().length;
        if (page > 1 && page <= max) {
            page--;
            
            if (page <= 1) {
                page == 1;
                $('.prev').css('background-color', '#999');
            } else {
                $('.prev').css('background-color', '#fff');
            }
            init();
        }
    });

    // $('.show_ul').on('click', '.last_li', function () {
    //     page++;
    //     init();
    // });

    function Horder() {
        Ajax({
            type: 'get',
            url: '../api/fenye.php',
            data: {
                page: page,
                num: num,
                order: order
            },
            success: str => {
                let arr = JSON.parse(str);
                // console.log(arr)
                data(arr);
            }
        })
    }

    $('.a_order').click(function () {  //排序按钮
        isok = true;
        order = $('.a_order').attr('index');
        if (order == 'up') {
            $('.a_order').attr('index', 'down');
            $('.a_order .desc').addClass('asc').removeClass('descd');
            order = 'asc';

        } else if (order == 'down') {
            $('.a_order').attr('index', 'up');
            $('.a_order .desc').addClass('descd').removeClass('asc');
            order = 'desc';
        }
        Horder();
        $('.pageview').on('click', '.page_a', function () {
            console.log(1111);
            $(this).addClass('active').siblings().removeClass('active');
            page = $(this).html();
            Horder();
        });

    });


    //查询价格之间
    function range() {
        let price1 = $('.tex1').val().trim();
        let price2 = $('.tex2').val().trim();
      
        Ajax({
            type: 'get',
            url: '../api/prices.php',
            data: {
                page: page,
                num: num,
                price1: price1,
                price2: price2,
            },
            success: str => {
                let arr = JSON.parse(str);
                data(arr);
            }
        })
    };
    $('.price-btn').click(function () { //价格之间按钮
        range();
        $('.pageview').on('click', '.page_a', function () {
            // console.log(1111);
            $(this).addClass('active').siblings().removeClass('active');
            page = $(this).html();
            range();
           
        });
    });

    function dim() { //模糊查询
        let tex = $('.select_text').val();
        Ajax({
            type: 'get',
            url: '../api/dim.php',
            data: {
                page: page,
                num: num,
                tex: tex
            },
            success: str => {
                let arr = JSON.parse(str);
                data(arr);
            }
        });
    }

    $('.select-btn').click(function () {
        dim();
        $('.pageview').on('click', '.page_a', function () {
            page = $(this).html();
            $(this).addClass('active').siblings().removeClass('active');
            dim();
        });
    });

    let arre = [];
    $('.show_ul').on('click', '.show_deta', function () {  //点击的时候 详情页的足迹
        // let id = $(this).parent().parent().parent().attr('data-id');
        let id = $(this).closest('.show_li').attr('data-id');
        // console.log(id);
        let name = getCookie('name');
        // console.log(name);
        if (name) {
            arre.forEach(function (item, index) {
                if (item == id) {
                    arre.splice(index, 1);
                }
            });
            arre.push(id);
            // console.log(arre);
            Ajax({
                type: 'get',
                url: '../api/loginfoot.php',
                data: {
                    name: name,
                    loginfoot: arre
                },
                success: str => {
                    // console.log(str);
                }
            });
        } else {
            let gid = localStorage.gid;
            if (gid) {
                let arr1 = gid.split('&');
                arr1.forEach(function (item, index) {
                    if (item == id) {
                        arr1.splice(index, 1);
                    }
                });
                arr1.push(id);
                let pid = arr1.join('&');
                localStorage.gid = pid;
            } else {
                localStorage.gid = id;
            }
        }
        window.open('detailpage.html?id=' + id);
    });


    $('.show_ul').on('click', '.btn_a', function () {  //加入购物车
        let goodid = $(this).closest('.show_li').attr('data-id');
        Ajax({
            type: 'get',
            url: '../api/detailpage.php',
            data: {
                id: goodid,
                type: 'good'
            },
            success: str => {
                let arr = JSON.parse(str);
                // console.log(arr);
                let gimg = arr[0].img.split(',');
                let nams = getCookie('name');
                let pid = arr[0].id; //调取 商品列表的信息 id
                let img = gimg[0];
                let num = 1;
                let price = arr[0].price;
                let title = arr[0].name;
                $.ajax({
                    type: 'get',
                    url: '../api/car.php',
                    data: {
                        id: pid,
                        num: num,
                        price: price,
                        title: title,
                        name: nams,
                        img: img
                    },
                    dataType: 'json',
                    success: str => {
                        // let arr = JSON.parse(str);
                        //   console.log(str);
                    }
                });
                alert('成功加入购物车')
                window.open('scart.html');
            }
        });
    });
});
