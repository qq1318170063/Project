$(function () {

    $('.yzmtex').blur(function () { //手机验证码
        let yzmtex = $('.yzmtex').val();
        if (yzmtex == 1234) {
            $('.message').eq(4).html('验证通过');
        } else {
            $('.message').eq(4).html('验证错误');
        }

    });

    $.idcode.setCode();
    $('.txtVerification').blur(function () { //随机验证码
        if ($('.txtVerification').val = $.idcode.validateCode()) {
            $('.message').eq(3).html('验证码正确');
        } else {
            $('.message').eq(3).html('验证码错误');
        }
    });
    let isok = false;
    $('#phone').blur(function () {
        let phone_email = $('.phone_email').val();
        // if ((/^1[3456789]\d{9}$/).test(phone_email) == true) {
        //     $('.reg_none').show();
        //     $('.message').eq(0).html('');
        // } else {
        //     $('.message').eq(0).html(`<i class="iconfont">&#xe649;</i>` + '请填写手机号,最少11个字符');
        // }
        $.ajax({
            type: 'get',
            url: '../api/checkname.php',
            data: {
                name: phone_email
            },
            success: str => {
                if (str == 'yes' && (/^1[3456789]\d{9}$/).test(phone_email)) {
                    $('.reg_none').show();
                    $('.message').eq(0).html('可以注册');
                    isok = true;
                } else {
                    $('.message').eq(0).html('手机号已被注册或格式错误');
                    $('.reg_none').hide();
                    isok = false;
                }
            }
        });
    });

    $('.pwd').blur(function () {  //密码 
        if ($('.phone_email').val()) {
            let pwd = $('.pwd').val();
            if (!pwd) {
                $('.message').eq(1).html('请填写密码');
            } else if (pwd.length < 6 || pwd.length > 16) {
                $('.message').eq(1).html('请输入6-16位数字或字母');
            }
            else if ((/^[0-9]*$/).test(pwd) == true) {
                $('.message').eq(1).html('弱');
            } else if ((/^[a-zA-Z0-9_\u4e00-\u9fa5]{3,19}$/).test(pwd)) {
                $('.message').eq(1).html('中');
            }
        } else {
            $('.message').eq(1).html('请先输入手机号');
        }
    });

    $('.pwd2').blur(function () { 
        if (!$('.pwd').val()) {
            $('.message').eq(2).html('请先填写密码');
        } else if ($('.pwd').val() == $('.pwd2').val()) {
            $('.message').eq(2).html('两次密码输入一致');
        } else {
            $('.message').eq(2).html('两次密码输入不一致');
        }
    });

    // let isok = true;
    $('#regbtn').click(function () {
        // isok != isok;
        if ($('.phone_email').val() && $('.pwd').val() == $('.pwd2').val() && ($('.txtVerification').val = $.idcode.validateCode()) && ($('.yzmtex').val() == 1234)) {
            $.ajax({
                type: 'post',
                url: '../api/reg.php',
                data: {
                    name: $('.phone_email').val(),
                    psw: $('.pwd').val()
                },
                success: str => {
                    // console.log(str);
                    if (str == 'yes') {
                        alert('注册成功');
                        aaa();
                        location.href = 'login.html';
                    } else {
                        alert('注册失败');
                    }
                }
            });
        } else {
            alert('请输入正确或完整的内容');
        }
    });

    
    function aaa() {
        // $('#regbtn').click(function () {
        let phone_email = $('.phone_email').val();
        let pwd = $('.pwd').val();

        if (phone_email && pwd == $('.pwd2').val() && ($('.txtVerification').val = $.idcode.validateCode()) && $('.yzmtex').val()) {
            $('.message').html('');
            $('.messageagree').html('');
            // alert('注册成功');
            window.open('login.html');
        }
        else {

            $('.message').eq(1).html(`<i class="iconfont">&#xe649;</i>` + '请填写密码,6-16个字符');

            $('.message').eq(1).html(`<i class="iconfont">&#xe649;</i>` + '请输入正确的密码');

            $('.message').eq(1).html('');

        }
    }


   
});