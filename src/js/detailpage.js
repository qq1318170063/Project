;$(function () {
    $('#top').load('header.html');
    $('#navtop').load('nav.html');
    $('#right_sidebar').load('sidebar.html');

    ceiling({   //吸顶菜单
        ele: 'pro_top',
    });

    let url = decodeURI(location.search.slice(1));
    let good = strToObj(url);
    let name = getCookie('name');

    function init() { //初始化页面
        $.ajax({
            type: 'get',
            url: '../api/detailpage.php',
            data: {
                id: good.id,
                type: 'good'
            },
            success: str => {
                let arr = JSON.parse(str);
                data(arr);
                // console.log(arr);
                let gimg = arr[0].img.split(',');
                
                $('.cart_btn').click(function () { //加入购物车
                
                    let pid = arr[0].id; //调取 商品列表的信息 id
                    let img = gimg[0];
                    let num = $('.input_num').val() * 1;
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
                            name: name,
                            img: img
                        },
                        dataType: 'json',
                        success: str => {
                            // let arr = JSON.parse(str);
                            // console.log(str);
                          
                        },
                    });
                    alert('成功加入购物车')
                    window.open('scart.html');
                });
            }
        });
    }
    init();//初始化页面入口
    if (name) {  //登录状态的足迹
        $.ajax({
            type: 'get',
            url: '../api/zuji.php',
            data: {
                name: name
            },
            success: str => {
                let arr = JSON.parse(str)[0];
                let arr1 = arr.loginfoot.split(',');
                arr1.forEach((item) => {
                    creat(item);  //发送一次渲染一次
                });
            }
        });
    } else {
        let gid = localStorage.gid;
        // console.log(gid);
        let arr1 = gid.split('&');
        arr1.forEach((item) => {
            creat(item);  //发送一次渲染一次
        });
    }

    function creat(item) { //浏览记录 
        $.ajax({
            type: 'get',
            url: '../api/detailpage.php',
            data: {
                id: item,  //传过去的id是每一项，不然只有一个id
                type: 'good'
            },
            success: str => {
                let arr = JSON.parse(str)[0];
                let arrimg = arr.img.split(',');
                let html = `<li class="foot_li" data-id = "${arr.id}">
                    <a href="###" class="aimg"><img src="${arrimg[0]}" alt="" index = 'strimg' class = "bigimg"></a>
                    <div class="product_info">
                        <div class="product_name">
                            <a href="###">${arr.area}</a>
                            <p>
                                ${arr.name}
                            </p>
                            <p> ￥${arr.price}
                                <del>￥${arr.oldprice}</del>
                                </p>
                        </div>
                    </div>
                </li>`;
                $('.foot_ul').append(`${html}`);
            }
        });
    }
   

    function data(arr) {// 左边内容及放大镜
        let arrimg = arr[0].img.split(',');
        magniglass({
            ele: 'con-l',//最外层盒子的id
            imglist: arrimg,//图片
            scal: 2,//大图放大倍数(默认是2倍)
            speed: 1//小图运动的图片个数(默认是一次动一张图)
        });
        let html3 = arr.map(item => { //右边内容
            return `
                <div class="product_title">
                    <i class="iconfont">&#xe619;</i>
                    ${item.name}
                </div>
                <p class="price_p">￥${item.price}
                    <del>￥${item.oldprice}</del>
                    <span>${item.discount}</span>
                </p>
                `
        }).join('');
      
        $('.item_content').html(html3);
        let html4 = arr.map(item => {
            return `(库存量:${item.num})`;
        });
        $('.kucun').html(html4);
        let n = 1;
        $('.addbtn').click(function () { // 加按钮
            $('.input_num').val(n++);
            if(n >= arr[0].num){
                n = arr[0].num;
            }
        });

        $('.cutbtn').click(function () { //减按钮
            $('.input_num').val(n--);
            if(n <= 1){
                n = 1;
            }
        });
    };


});