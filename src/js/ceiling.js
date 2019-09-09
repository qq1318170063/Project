function ceiling(opt) {

    let defaultobj = {

    }

    Object.assign(defaultobj, opt);

    let pro_top = document.getElementById(defaultobj.ele);
    // console.log(pro_top)
    let iTop = pro_top.offsetTop;
    // console.log(iTop)
    window.onscroll = function () {
        let scrollTop = window.scrollY -170;
        if (scrollTop >= iTop) {
            pro_top.className = 'fix';
        } else {
            pro_top.className = '';
        }
    }
}