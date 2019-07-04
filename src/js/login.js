$(function () {
    $('#login-content').css('height',$(window).height()-143);
    $(window).resize(function () {
        $('#login-content').css('height',$(window).height()-143);
    });

    $('.back-login').click(function () {
        $('.login-phone').hide();
        $('.login-name').show();
    });
    $('.login-change').click(function () {
        $('.login-phone').show();
        $('.login-name').hide();
    });

    /**
     * 保存登录信息
     */
    function saveUserInfo() {
        if ($("#rememberUser").prop("checked") == true) {
            var userName = $("#username").val();
            var passWord = $("#userpwd").val();
            $.cookie("rememberUser", "true", {
                expires: 30
            }); // 存储一个带7天期限的 cookie
            $.cookie("userName", userName, {
                expires: 30
            }); // 存储一个带7天期限的 cookie
            $.cookie("passWord", passWord, {
                expires: 30
            }); // 存储一个带7天期限的 cookie
        } else {
            $.cookie("rememberUser", "false", {
                expires: -1
            }); // 删除 cookie
            $.cookie("userName", '', {
                expires: -1
            });
            $.cookie("passWord", '', {
                expires: -1
            });
        }
    }




    //验证密码和重复密码
    $('#pwd').change(function () {password();});
    $('#repwd').change(function () {checkPassword();});



    //提示框操作
    $('#msg-input').click(function () {
        $('#show-hidden').hide();
        $(':input', '#reg-form')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');
    });

    //获取验证码倒计时
    var clock = '',nums = 60,btn,flag=true;
    function doLoop(){
        nums--;
        if(nums > 0){
            btn.html('获取('+nums+')秒');
        }else{
            clearInterval(clock); //清除js定时器
            btn.disabled = false;
            btn.html('发送短信');
            nums = 60; //重置时间
            btn.className='get-code';
            flag=true;
        }
    }
    //发送验证码
    $("#send_scode").click(function(){
        $('#tips').hide();
        $('#tips span').html('');
        if(flag){
            var phone = $("#phone").val(),verify = $('#verify').val();
            var myreg = /^((1[3-9]{1})+\d{9})$/;

            var verifyCheck= false;
            if(verify == '' || verify == undefined){
                $('#tips').show();
                $('#tips span').html('请输入验证码!');
                verifyCheck= true;
            }else{
                $.ajax({
                    url: '/index.php?m=Home&c=Public&a=checkVerify',
                    type: 'post',
                    async: false,
                    data: {'verify':verify},//id,赛段,晋级分数
                    success: function (data) {
                        if (data.status != 200) {
                            $('#tips').show();
                            $('#tips span').html(data.message);
                            $('#verify_btn').trigger("click");
                            verifyCheck= true;
                        }
                    }
                });
            }

            if(verifyCheck){
                return false;
            }





            if(phone.length !== 11 || !myreg.test(phone)){
                $('#tips').show();
                $('#tips span').html('手机号不能为空');
                return false;
            }

            btn = $(this);
            btn.html('获取('+nums+')秒');
            flag=false;
            clock = setInterval(doLoop, 1000); //一秒执行一次

            /*$.post('{{:myU("","smscode","Public","Home")}}', {'phone':phone}, function (data) {
            }, 'json');*/
            var tempid = $(this).attr('data-beid');
            $.post('/index.php?m=Home&c=Public&a=smscode', {'phone':phone,'tempid':tempid}, function (data) {
                if (data.status != 200) {
                    $('#tips').show();
                    $('#tips span').html(data.message);
                } else {
                    layer.msg('验证码已发送，请注意查收。', {
                        time: 1200, //20s后自动关闭
                    });
                }
            }, 'json');
        }else{
            return;
        }
    });

});

function password(){
    if($('#pwd').val().length < 8){
        $('#pwd').css('border-color','red')
        $('#tips span').html('密码长度低于8位，请重新输入');
        $('#tips').show();
        return false;
    }else{
        $('#pwd').css('border-color','#ccc')
        $('#tips').hide();
        $('#tips span').html('');
        return true;
    }
}
function checkPassword(){
    if ($('#repwd').val() != $('#pwd').val()) {
        $('#repwd').css('border-color','red');
        $('#tips span').html('两次密码不一致');
        $('#tips').show();
        return false;
    }else{
        $('#repwd').css('border-color','#ccc');
        $('#tips').hide();
        $('#tips span').html('');
        return true;
    }
}