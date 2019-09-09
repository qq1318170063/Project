function extend(obj1, obj2) {
    for (var key in obj1) {
        obj2[key] = obj1[key];
    }
}
function magniglass(opt) {
    //默认参数
    var defaultopt = {
        scal: 2, //大图放大倍数(选填，默认是2倍)
        speed: 1//小图运动的图片个数(选填，默认是一次动一张图)
    }
    extend(opt, defaultopt);//用默认参数
    //1.找节点
    var commodity = document.getElementById(defaultopt.ele);//整个大盒子
    // console.log(commodity)
    var Large = commodity.getElementsByClassName('Large')[0];//原图
    var enlargement = commodity.getElementsByClassName('enlargement')[0];//放大图
    var mix = commodity.getElementsByClassName('mix')[0];//小图Ul
    var imgArr = defaultopt.imglist;

    //2.渲染数据原图以及放大图到页面
    var datu = `<img src="${imgArr[0]}" alt=""> <div class="magnify"></div>`;//原图
    var fangdatu = `<img src="${imgArr[0]}" alt="">`;//放大图
    Large.innerHTML = datu;//原图
    enlargement.innerHTML = fangdatu;//放大图

    //3.渲染小图
    var html = imgArr.map(function (item) {
        return `<li><img src="${item}" alt=""></li>`;
    }).join('');
    mix.innerHTML = html;

    //4.经过原图：出现大图可视区和遮罩
    var magnify = commodity.getElementsByClassName('magnify')[0];//遮罩
    // console.log(magnify);
    Large.onmouseover = function () {//滑入原图
        magnify.style.display = 'block';//遮罩出现
        enlargement.style.display = 'block';//放大图的盒子出现
    }
    Large.onmouseout = function () {//滑出原图
        magnify.style.display = 'none';//遮罩隐藏
        enlargement.style.display = 'none';//放大图的盒子隐藏
    }

    //5.在原图区域滑动，遮罩跟着鼠标移动（坐标应该放置在遮罩中间位置、临界值设置）
    var movePic = enlargement.getElementsByTagName('img')[0];//滑动时放大比例的图
    // console.log(movePic)
    Large.onmousemove = function (ev) {//鼠标滑动时
        // console.log(ev.pageX)
        //遮罩跟着鼠标移动
        var lefts = ev.pageX - commodity.offsetLeft - magnify.offsetWidth / 2;
        var tops = ev.pageY - commodity.offsetTop - magnify.offsetHeight / 2;
        //  tops  = 鼠标的y坐标 - 外层盒子到顶部的距离 -  遮罩高度的一半就是鼠标的中心
        
        if (lefts <= 0) {//遮罩宽度临界值
            lefts = 0;
        } else if (lefts >= Large.offsetWidth - magnify.offsetWidth) {
            lefts = Large.offsetWidth - magnify.offsetWidth;//大盒子宽-小盒子宽
        }
        if (tops <= 0) {//遮罩高度临界值
            tops = 0;
        } else if (tops >= Large.offsetHeight - magnify.offsetHeight) {
            tops = Large.offsetHeight - magnify.offsetHeight;//大盒子高-小盒子高
        }
        magnify.style.left = lefts + 'px';
        magnify.style.top = tops + 'px';

        //6.大图运动：最大运动距离 * 水平或垂直的比例系数(适用于矩形)

        //设置放大的比例倍数
        movePic.style.width = Large.offsetWidth * defaultopt.scal + 'px';
        movePic.style.height = Large.offsetHeight * defaultopt.scal + 'px';


        var scalx = lefts / (Large.offsetWidth - magnify.offsetWidth);//0-1比例系数
        var scaly = tops / (Large.offsetHeight - magnify.offsetHeight);//0-1比例系数
        // console.log(scalx);
        movePic.style.left = (Large.offsetWidth - movePic.offsetWidth) * scalx + 'px';
        movePic.style.top = (Large.offsetHeight - movePic.offsetHeight) * scaly + 'px';
        //yangshi.top = (原图高度-图片的高度)*比例系数+'px';



    }

    //7.小图切换大图
    mix.onmousemove = function (ev) {
        if (ev.target.tagName.toLowerCase() == 'img') {//点击那张小图获取到节点
            // console.log(ev.target);
            var src = ev.target.src;
            Large.children[0].src = enlargement.children[0].src = src;
            //Large下的第一张的src = enlargement下的第一张的src=被点击的那张src
        }
    }



    //8.点击左右按钮可以切换小图位置
    var mains = commodity.getElementsByClassName('mains')[0];//小图的盒子
    var leftinput = commodity.getElementsByClassName('leftinput')[0];//左键上一张
    var rightinput = commodity.getElementsByClassName('rightinput')[0];//右键下一张



    // 每一张图的宽度
    var iW = (mix.children[0].offsetWidth + 10);
    (function () {
        if (imgArr.length < 5) {
            mix.style.width = mains.offsetWidth + 'px'//计算witdh的宽度 给mix
        } else {
            mix.style.width = (iW * imgArr.length) + 'px'//计算witdh的宽度 给mix
        }
    })();
    // console.log(iW)//60  li的宽度+ 10 的magin = 70

    rightinput.onclick = function () {//右键下一张
        move(-iW);
        // leftinput.style.background = 'rgb(247, 81, 81)';
    }

    leftinput.onclick = function () {//左键上一张

        move(iW);
        // rightinput.style.background = 'rgb(247, 81, 81)';
        // leftinput.style.cursor = 'no-drop';
    }

    function move(speed) {
        left = mix.offsetLeft + speed * defaultopt.speed;
        // console.log(mix.offsetWidth)
        if (left <= mains.offsetWidth - mix.offsetWidth) {
            left = mains.offsetWidth - mix.offsetWidth;
            // leftinput.style.background = 'bule';
            // rightinput.style.background = '#ccc';
            rightinput.style.cursor = 'no-drop';//临界点右鼠标禁止点击
            leftinput.style.cursor = 'pointer';//鼠标改成可点击的样式
        } else if (left >= 0) {
            left = 0;
            // rightinput.style.background = 'bule';
            // leftinput.style.background = '#ccc';
            rightinput.style.cursor = 'pointer';//鼠标改成可点击的样式
            leftinput.style.cursor = 'no-drop';//鼠标禁止点击
        }

        mix.style.left = left + 'px';
    }
}