(function () {

    
    let playimages = document.getElementById('playimages');
    let smallUl = playimages.getElementsByClassName('banner_light')[0];
    let bigPic = playimages.getElementsByClassName('big_pic')[0];
    let aBigImgs = bigPic.getElementsByTagName('li');
    let timer = null;
    let zIndex = 2;//因为z-index已经有1
    let now = 0;//可视区那张图的下标
    
    //1.自动轮播：
    timer = setInterval(next, 3000);

    function next() {
        now++;
        tab();
    }

    function prev() {
        now--;
        tab();
    }

    function tab() {//切换到第now张图
        if (now > aBigImgs.length - 1) {//临界值的判断
            now = 0;
        } else if (now < 0) {
            now = aBigImgs.length - 1;
        }
        if (zIndex > aBigImgs.length) {//层级的临界值
            //达到最后一张
            for (let li of aBigImgs) {
                li.style.zIndex = 0;
            }
            zIndex = 1;
        }

        //大图轮播：

        //让底下的图片显示出来
        aBigImgs[now].style.zIndex = zIndex++;

        //渐隐渐现
        aBigImgs[now].style.opacity = 0;
        startMove(aBigImgs[now], { 'opacity': 100 });

        //高度变化
        // aBigImgs[now].style.height = 0;
        // startMove(aBigImgs[now], { 'height': 320 });

        
        //小点高亮
        //排他
        for (let ele of smallUl.children) {
            ele.style.opacity = 0.6 ;
        }
        smallUl.children[now].style.opacity = '1';
    }

    //3.鼠标移入停止轮播 移出继续播放
    playimages.onmouseover = () => {
        clearInterval(timer);
    }

    playimages.onmouseout = () => {
        clearInterval(timer);
        timer = setInterval(next, 4000);
    }

    //4.点击小点：切换大图
    for (let i = 0; i < smallUl.children.length; i++) {
        smallUl.children[i].onmouseover = () => {
            // console.log(i);
            now = i;//点击小图获取下标，替换当前的那张
            tab();
        }
    }
})();