
var regular = new  Array();
regular['creditCode'] = "[1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10}";//统一社会征信代码
regular['address'] = ".+\\u7701.+\\u5e02.*";
regular['phone'] = "(^(0[0-9]{2,3}\\-)?([2-9][0-9]{6,7})+(\\-[0-9]{1,4})?$)|(^([1]\\d{10})$)";//电话号码(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)
regular['email'] = "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$";//邮箱
//regular['password'] = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}";//密码
//regular['password'] = "[A-Za-z0-9_]{6,20}";//密码
regular['password'] = "^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{8,18})$"
regular['QQ'] = "[1-9][0-9]{4,14}";//密码
regular['zipCode'] = "[1-9][0-9]{4,14}";//密码

$(function () {
    //获取所有
    $('.licit').change(function(){
        var $self = $(this),$sform = $self.parents('.form');//sform = self.closest('.form');

        var flag = checkInput($self);

        //获取显示对象
        var show = $self.attr("data-show");
        if(flag){
            if($('#'+show)!=null)$('#'+show).hide();
            $self.siblings(".must").html("*");
        }
        $sform.submit(flag);
    });


    /* //input获取焦点时间
     $('.licit').focus(function(){
         var $self = $(this);
         var show = $self.attr("data-show");
         if (show == undefined || show.trim() == "") {
             $self.siblings(".must").html("*");
         } else {
             $('#'+show).hide();
             $('#'+show+' span').html('');
         }
     });*/

    /**
     * 表单提交验证
     */
    $('.licitform').submit(function () {return checkForm($(this));});
});

/**
 * 验证表单数据
 * @param obj
 * @returns {boolean} 验证结果
 */
function checkForm(obj){
    var flag = true;
    obj.find(".licit").each(function(){
        if(flag==false){
            checkInput($(this));
        }else{
            flag = checkInput($(this));
        }
    });
    return flag;
}

/**
 * 验证表单元素
 * @param obj
 * @returns {boolean}
 */
function checkInput(obj){
    var $self = obj,$show,$showmsg,flag = true;
    var vals = $self.val();

    //获取显示对象
    var show = $self.attr("data-show");
    if(show == undefined || show.trim() == ""){
        $showmsg = $self.siblings(".must");
    }else{
        $show = $('#'+show);
        $showmsg = $('#'+show+' span');
    }
    //获取验证参数
    var rules = $self.attr("data-rules");
    if(rules == undefined || rules.trim() == ""){
        if($show!=undefined)$show.hide();
        flag = true;
        return flag;
    }

    var rule = eval(rules);//rules.split(';');
    var len = rule.length;
    //验证是否必填
    if(len >= 2 && rule[1] == 1){
        if(vals.trim().length==0){
            if($show!=undefined)$show.show();
            $showmsg.html(rule[0]+"必需填写");
            flag = false;
            return flag;
        }
    }

    //验证长度是否合法
    if(len >= 3 && rule[2] > 0){
        if(vals.length > rule[2]){
            if($show!=undefined)$show.show();
            $showmsg.html(rule[0]+"长度不能超过"+rule[2]);
            flag = false;
            return flag;
        }
    }

    //正则表达式验证
    if(len == 4){
        if(vals == ''){
            flag = true;
            return flag;
        }
        var regStr = regular[rule[3]];
        var reg=new RegExp(regStr);
        if(!reg.test(vals)){
            if($show != undefined)$show.show();
            $showmsg.html(rule[0]+"格式不合法");
            flag = false;
            return flag;
        }
    }

    return flag;
}