
/*
 * @Description: 生成随机颜色
 * @Author: 莱恩    
 * @Date: 2019-07-24 09:09:47
 * @LastEditTime: 2019-08-08 10:01:36
 * @LastEditors: Please set LastEditors
 */

function randomColor(n) {
    var rancolor = '';
    if (n == '16') {
        var rancolor = '#';
        var k = '0987654321abcdef';
        for (i = 0; i < 6; i++) {
            var num = parseInt(Math.random() * 16);
            rancolor += k[num];
        }
        return rancolor;
    } else if (n == 'rgb') {
        for (i = 0; i < 3; i++) {
            var r = parseInt(Math.random() * 256);
            var g = parseInt(Math.random() * 256);
            var b = parseInt(Math.random() * 256);
            rancolor = 'rgb(' + r + ',' + g + ' ,' + b + ')';
        }
        return rancolor;
    }
}

/*
* @Description: 生成0到9的随机验证码
* @Author: 莱恩
* @Date: 2019-07-24 11:12:11
* @LastEditTime: 2019-07-24 11:01:41
* @LastEditors: Please set LastEditors
*/

function randomyzm(n) {
    var random = '';
    var num = '0987654321zxcvbnmasdfghjklqwertyuiop';
    for (i = 0; i < n; i++) {
        var yzm = parseInt(Math.random() * num.length);
        random += num[yzm];
    }
    return random;
}
/*
 * @Description: 封装函数实现通过id查找元素
 * @Author: 莱恩
 * @Date: 2019-07-23 19:21:00
 * @LastEditTime: 2019-07-23 16:10:27
 * @LastEditors: Please set LastEditors
 */

function getid(id) {
    return document.getElementById(id);
}

/*
* @Description: 数组去重
* @Author: 莱恩
* @Date: 2019-07-26 19:43:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function norepeat(arr) {
    var newarr = [];
    arr.forEach(function (item) {
        if (newarr.indexOf(item) == -1) {
            newarr.push(item);
        }
    });
    return newarr;
}

/*
 * @Description: 封装参数变成对象
 * @Author: 莱恩
 * @Date: 2019-07-27 15:43:28
 * @LastEditTime: 2019-07-26 19:43:28
 * @LastEditors: your name
 */

function strToObj(str) {
    var obj = {};
    var arr = str.split('&');
    arr.forEach(function (item) {
        var arr2 = item.split('=');
        obj[arr2[0]] = arr2[1];
    });
    return obj;
}

/*
 * @Description: 封装对象变成参数
 * @Author: 莱恩
 * @Date: 2019-07-27 15:43:28
 * @LastEditTime: 2019-07-26 19:43:28
 * @LastEditors: your name
 */

function objToStr(obj) {
    var str = '';
    for (var key in obj) {
        str += key + '=' + obj[key] + '&';
    }
    return str.slice(0, -1);
}

/*
* @Description: 封装敏感词函数
* @Author: 莱恩
* @Date: 2019-07-27 15:43:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function filterStr(str) {
    var arr = ['操', '草', '垃圾', '妈蛋', '法轮功', '狗', '爸', '姨', '共产党'];
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        var reg = new RegExp(word, 'ig');
        str = str.replace(reg, '**');
    }
    return str;
}

/*
* @Description: 封装加 0 操作   
* @Author: 莱恩
* @Date: 2019-07-29 15:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function toDb(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}

/*
* @Description: 封装函数 纪元时间 转为  xx年xx月xx日xx时xx分xx秒
* @Author: 莱恩
* @Date: 2019-08-02 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function getTime(num) {
    var date = new Date(num);//获得系统时间
    var time = date.getTime();//纪元时间
    var year = date.getFullYear();//年
    var mons = date.getMonth() + 1;//月
    var day = date.getDate();//日
    var hour = date.getHours();//时
    var min = date.getMinutes();//分
    var sec = date.getSeconds();//秒
    //补0 引用上面封装函数
    // var sdate = year + '年' + toDb(mons) + '月' + toDb(day) + '日' + toDb(hour) + '时' + toDb(min) + '分' + toDb(sec) + '秒';
    toDb();
    return obj = {
        years: toDb(year),//年
        months: toDb(mons),//月
        days: toDb(day),//天
        hours: toDb(hour),//时
        mins: toDb(min),//分
        secs: toDb(sec)//秒
    };
}

function time(sec) {
    var secs = sec % 60;
    var min = parseInt(sec / 60) % 60;//分
    var hour = parseInt(sec / 60 / 60) % 24;//小时
    var day = parseInt(sec / 60 / 60 / 24);//天数

    //返回一个对象
    return {
        day: day,
        hour: hour,
        min: min,
        secs: secs
    }
}
/*
* @Description: 封装函数 css 设置 和 获取样式
* @Author: 莱恩
* @Date: 2019-08-02 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function css() {
    if (arguments.length == 2) {//长度等于2
        if (getComputedStyle(arguments[0], false)) {
            //高级浏览器
            return getComputedStyle(arguments[0], false)[arguments[1]];
        } else {
            //IE8
            return arguments[0].currenStyle[arguments[1]];
        }
    } else if (arguments.length == 3) {//长度等于3
        arguments[0].style[arguments[1]] = arguments[2];
        ////设置样式  ele.style.width = '200px'
    }
}

/*
* @Description:  正则验证
* @Author: 莱恩
* @Date: 2019-08-07 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

var checkReg = {
    email: function (str) {//邮箱
        var reg = /^[\w&%$#!\-]+@[\w&%$#!\-]+\.[a-zA-Z]+$/;
        return reg.test(str);
    },
    tel: function (str) {//手机号
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    username: function (str) {//用户名
        var reg = /^[\w\-]{5,19}$/;
        return reg.test(str);
    },
    nickname: function (str) {//昵称
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    identity: function (str) {//身份证
        var reg = /^(\d{17}|\d{14})[\dx]$/;
        return reg.test(str);
    },
    password: function (str) {//密码
        var reg = /^\S{6,20}$/;
        return reg.test(str);
    },
    birthday: function (str) {//生日
        var reg = /^\d{4}([\/\-]?)\d{1,2}\1\d{1,2}$/;
        return reg.test(str);
    },
    trim: function (str) {//空格
        var reg = /^\s+|\s+$/;
        return reg.test(str);
    }

}

/*
* @Description: 封装函数 表单验证
* @Author: 莱恩
* @Date: 2019-08-07 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function checkInput(ele, reg, inf, meg) {
    /*
        参数一：ele 要正则验证的表单
        参数二：reg 正则不同
        参数三：inf 提示信息节点不同
        参数四：meg 提示信息不同,对象
    */
    ele.onblur = function () {
        var val = ele.value.trim();
        var index = this.dataset.index;
        if (val) {
            var res = checkReg[reg](val);
            if (res) {
                inf.innerHTML = meg.success;
                inf.style.color = '#58bc58';
                ele.istrue = true;
            } else {
                inf.innerHTML = meg.failure;
                inf.style.color = 'red';
                ele.istrue = false;
            }
        } else {
            inf.innerHTML = meg.null;
            inf.style.color = 'red';
            ele.istrue = false;
        }
    }
}

/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}

/*
* @Description: 封装 弹窗居中
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function Center(ele) {//弹窗居中
    var iLeft = (window.innerWidth - ele.offsetWidth) / 2;
    var iTop = (window.innerHeight - ele.offsetHeight) / 2;
    ele.style.left = iLeft + 'px';
    ele.style.top = iTop + 'px';
}

/*
* @Description: 封装 回到顶部
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function BackTop(ele) {

    window.onscroll = function () {
        var scrollTop = window.scrollY;//获取滚动距离
        if (scrollTop >= 300) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    }

    ele.onclick = function () {
        var scrollTop = window.scrollY;//获得滚动距离
        var timer = setInterval(function () {
            scrollTop -= 20;
            if (scrollTop <= 0) {
                clearInterval(timer);//关闭计时器
            }
            window.scrollTo(0, scrollTop);
        }, 10);
    }
}


/*
* @Description: 封装 楼层跳跃
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function Floorjump(ele, btn) {
    for (var i = 0; i < ele.length; i++) {
        ele[i].style.height = window.innerHeight + 'px';
    }
    //绑定事件
    for (i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onclick = function () {
            //排他
            for (var i = 0; i < btn.length; i++) {
                btn[i].className = '';
            }
            this.className = 'active';
            var num = this.index;
            window.scrollTo(0, num * window.innerHeight + 1);
        }
    }
    //楼层滚动，按钮也跟着高亮显示
    window.onscroll = function () {
        var scrollTop = window.scrollY;
        for (i = 0; i < ele.length; i++) {
            if (scrollTop >= ele[i].offsetTop) {//临界值
                //排他
                for (j = 0; j < btn.length; j++) {
                    btn[j].className = '';
                }
                btn[i].className = 'active';
            }
        }
    }
}

/*
* @Description: 封装 吸顶菜单
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function Ceiling(ele) {
    var iTop = ele.offsetTop;
    window.onscroll = function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= iTop) {
            ele.className = 'fix';
        } else {
            ele.className = '';
        }
    }
}

/*
* @Description: 封装 吸底菜单
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function Suctionbottom(ele) {
    var iTop = ele.offsetTop;
    window.onscroll = function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= iTop) {
            ele.style.display = 'block';
        }
    }
}

/*
* @Description: 封装 手风琴
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function Accordion(ele, long) {
    for (i = 0; i < ele.length; i++) {
        ele[i].istrue = true;
        ele[i].onclick = function () {
            var now = this.nextElementSibling;
            if (this.istrue) {
                startMove(now, { 'height': long });
            } else {
                startMove(now, { 'height': 0 });
            }
            this.istrue = !istrue;
        }
    }
}

/*
* @Description: 封装 侧栏广告
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function SidebarAds(ele, width) {
    ele.onmouseover = function () {
        startMove(ele, { 'right': 0 });
    }
    ele.onmouseout = function () {
        startMove(ele, { 'right': -width });
    }
}

/*
* @Description: 封装 下拉菜单
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function Pullmenu(btn, ele) {
    var istrue = true;
    btn.onclick = function (ev) {
        if (istrue) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
        istrue = !istrue;
        ev.stopPropagation();//阻止冒泡
    }
    document.onclick = function () {
        ele.style.display = 'none';
        istrue = true;
    }
}

/*
* @Description: 封装 选项卡 点击事件
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function TabOnclick(ele, con) {
    for (i = 0; i < ele.length; i++) {
        ele[i].index = i;
        ele[i].onclick = function () {
            for (i = 0; i < ele.length; i++) {
                ele[i].className = '';
                con[i].style.display = 'none';
            }
            this.className = 'active';
            con[this.index].style.display = 'block';
        }
    }
}

/*
* @Description: 封装 选项卡 鼠标滑入事件
* @Author: 莱恩
* @Date: 2019-08-11 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function Tabonmousemove(ele, con) {
    for (i = 0; i < ele.length; i++) {
        ele[i].index = i;
        ele[i].onmousemove = function () {
            for (i = 0; i < ele.length; i++) {
                ele[i].className = '';
                con[i].style.display = 'none';
            }
            this.className = 'active';
            con[this.index].style.display = 'block';
        }
    }
}

/*
* @Description: 封装 ajax
* @Author: 莱恩
* @Date: 2019-08-13 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

function Ajax(opt) {
    //默认参数
    let defaultData = {
        data: '',
        asyn: true,
        failure: null
    }

    Object.assign(defaultData, opt);//用默认参数

    let xhr = new XMLHttpRequest();
    if (defaultData.type.toLowerCase() == 'get') {
        //get方式
        if (defaultData.data) {
            defaultData.data = objToStr(defaultData.data);
            defaultData.url += '?' + defaultData.data;
        }
        xhr.open('get', defaultData.url, defaultData.asyn);
        xhr.send(null);
    } else if (defaultData.type.toLowerCase() == 'post') {
        //post方式
        xhr.open('post', defaultData.url, defaultData.asyn);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        defaultData.data = objToStr(defaultData.data);
        xhr.send(defaultData.data);
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                //成功了
                let data = xhr.responseText;
                defaultData.success(data);//实参
            } else {
                //失败
                if (defaultData.failure) {
                    //写了这个回调
                    defaultData.failure(xhr.status);
                }
            }
        }
    }
}

/*
* @Description: 封装 cookie
* @Author: 莱恩
* @Date: 2019-08-13 19:45:28
* @LastEditTime: 2019-07-26 19:43:28
* @LastEditors: your name
*/

//设置 cookie
function setCookie(key, val, iDay) {
    //key 键名, val 键值, iDay 失效时间
    let str = key + '=' + val + ';path=/';
    if (iDay) {
        let date = new Date();
        date.setDate(date.getDate() + iDay);
        str += ';expires=' + date;
    }
    document.cookie = str;
}

//获取cookie
function getCookie(key) {
    let str = document.cookie;
    let arr = str.split('; ');
    for (let ele of arr) {
        let arr2 = ele.split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}

//删除cookie
function removeCookie(key) {
    setCookie(key,'', -1);
}