<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>

    <div id="login-content">
        <div class="login_imgBack"></div>
        <div class="login">
            <h2>星尘实验室账号注册</h2>
            <h3>我们已为全国100所高校提供服务</h3>
            <div>
                <form class="login-phone licitform" id="reg-form">
                    <div class="login-input">
                        <input  type="text" v-model.trim="data.mobile" placeholder="请输入手机号"  data-show="tips" >
                    </div>
                    <div class="login-input">
                      <div class="clearfix">
                        <input type="text" v-model.trim="data.code" placeholder="验证码" class="login-code fl licit" data-show="tips" >
                        <div class="login-code-pic fr">
                            <img id="verify_btn" :src="codeSrc" style="float:left;cursor: pointer;" @click="showCode()">
                        </div>
                      </div>
                    </div>

                    <div class="login-input clearfix">
                        <input  type="text" v-model.trim="data.smsCode"  placeholder="短信动态码" class="login-code fl licit" data-show="tips">
                        <div class="login-code-pic fr co" @click="sendMsg()" v-show="Verification">发送短信</div>
                        <div class="login-code-pic fr co" id="send_scode" v-show="!Verification"><span>{{timer}}</span>秒后重新获取</div>
                    </div>

                    <div class="login-input">
                        <input  type="password"  v-model.trim="data.passWord"  placeholder="设置密码" class="licit" data-show="tips">
                        <span style=" font-family: '微软雅黑'; color: #F3844F;font-family: '宋体'; font-size: 10px">
                        	&nbsp;&nbsp;密码格式为8-16位数字+字母组合
                        </span>
                    </div>
                    <div class="login-input">
                        <input type="password"  v-model.trim="data.passWord2" placeholder="确定密码" class="licit"  data-show="tips">
                    </div>
					<div class="login-input">
                        <input type="text" v-model.trim="data.userName" value="" placeholder="请输入用户昵称">
                    </div>
                    <div class="login-input">
                        <input type="text" v-model.trim="data.inviteCode" value="" placeholder="请输入邀请码/可不填">
                    </div>

                    <button type="button" class="login-btn" @click="register()" style="cursor:pointer;">立即注册</button>
                    <p>
                    	<span>
                    		<label class="my_protocol">
          						<input class="input_agreement_protocol" name="checks" type="checkbox" checked/>
          						<span></span>
    						</label>
    					</span>
    					注册即代表您同意我们的
    					<a @click="showAndHide('showxy')">服务协议</a>和<a @click="showAndHide('showys')">隐私政策</a>
    				</p>
                    <div class="clearfix">
                        <router-link :to="{name:'login'}"><a href="javascript:;" >< 已有账号，请登录</a></router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>

<div id="apply" v-if="divshow.showxy"> 
   <h2>服务协议</h2> 
   <div class="read-cont"> 
    <h1 align="center" style="text-align:center;"> <b>注册协议</b><b></b> </h1> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> <b>【审慎阅读】</b>事关您与本平台发生业务往来时的权利义务及切身利益，请您在申请注册流程中点击同意前，认真阅读以下协议。<b><u>请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</u></b> </p> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> 1、<b><u>与您约定免除或限制责任的条款；</u></b> </p> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> 2、<b><u>与您约定法律适用和管辖的条款；</u></b> </p> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> 3、<b><u>其他以粗体下划线标识的重要条款。</u></b> </p> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> 如您对协议有任何疑问，可向平台客服咨询。 </p> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> <b>【特别提示】</b>当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与星尘实验室发生争议的，适用《星尘实验室平台服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。 </p> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> <b><u>阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</u></b> </p> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> 本注册协议包含内容如下： </p> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> <b>《星尘实验室平台服务协议》</b><b></b> </p> 
    <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;"> <b>《法律声明及保密政策》</b><b></b> </p> 
   </div> 
   <a class="close" @click="showAndHide('showxy')"></a> 
  </div> 
  <div id="read" v-if="divshow.showys"> 
   <h2>隐私政策</h2> 
   <div class="read-cont"> 
    <p> <br /> </p> 
    <h1 align="center" style="text-align:center;"> <b>法律声明及保密政策</b><b></b> </h1> 
    <h2 align="center" style="text-align:center;"> <b>法律声明</b><b></b> </h2> 
    <p class="MsoNormal" style="background:#FFFFFF;"> <b>提示条款</b><b></b> </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 星尘实验室提醒您：在使用星尘实验室平台各项服务前，请您务必仔细阅读并透彻理解本声明。如对本声明内容有任何疑问，您可向星尘实验室平台客服咨询。阅读本声明的过程中，<u>如果您不同意本声明或其中任何内容，您应立即停止使用星尘实验室平台服务。如果您使用星尘实验室平台服务的，您的使用行为将被视为对本声明全部内容的认可。</u> </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> &nbsp; </p> 
    <p class="MsoNormal" style="background:#FFFFFF;"> <b>定义</b><b></b> </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>星尘实验室平台：指包括星尘实验室网（域名为</span> ceshigo.com）网站及客户端。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 星尘实验室：星尘实验室平台经营者的单称或合称，包括金昌中枨科技有限责任公司及其子公司成都世纪美扬科技有限公司等。 </p> 
    <p class="MsoNormal" style="background:#FFFFFF;"> <b>权利声明</b><b></b> </p> 
    <p class="MsoNormal" style="background:#FFFFFF;"> <b>一、权利归属</b><b></b> </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 除非星尘实验室另行声明，星尘实验室平台内的所有产品、服务、技术、软件、程序、数据及其他信息（包括但不限于文字、图像、图片、照片、音频、视频、图表、色彩、版面设计、电子文档）的所有权利（包括但不限于版权、商标权、专利权、商业秘密及其他所有相关权利）均归星尘实验室或其关联公司所有。未经星尘实验室许可，任何人不得擅自使用（包括但不限于通过任何机器人、蜘蛛等程序或设备监视、复制、传播、展示、镜像、上载、下载星尘实验室平台内的任何内容）。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>星尘实验室平台的</span>Logo、“星尘实验室”等文字、图形及其组合，以及星尘实验室平台的其他标识、徵记、产品和服务名称均为星尘实验室及其关联公司在中国和其它国家的商标，<u>未经星尘实验室书面授权，任何人不得以任何方式展示、使用或作其他处理，也不得向他人表明您有权展示、使用或作其他处理。</u> </p> 
    <p class="MsoNormal" style="background:#FFFFFF;"> <b>二、责任限制</b><b></b> </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <u><span>鉴于星尘实验室平台提供的服务属于电子公告牌（</span>BBS）性质，星尘实验室平台上的商品</u><u>或</u><u>信息（包括但不限于联系人及联络信息、产品的描述和说明、相关图片、视频等）均由</u><u>平台合作方</u><u>自行提供，由</u><u>平台合作方</u><u>对其提供的所有信息承担相应法律责任。</u> </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <u>星尘实验室平台转载作品（包括论坛内容）出于传递更多信息之目的，并不意味星尘实验室赞同其观点或已经证实其内容的真实性。</u> </p> 
    <p class="MsoNormal" style="background:#FFFFFF;"> <b>三、知识产权保护</b><b></b> </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 星尘实验室尊重知识产权，反对侵权盗版行为。知识产权权利人认为星尘实验室平台内容（包括但不限于星尘实验室平台会员发布的商品及服务信息）可能涉嫌侵犯其合法权益，可以向星尘实验室平台提出书面通知，星尘实验室收到后将及时处理。 </p> 
    <h2 style="text-indent:5.2500pt;"> <b>保密政策</b><b></b> </h2> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>星尘实验室（下称</span>“我们”）非常尊重用户个人信息的保护，在您使用星尘实验室平台提供的服务时，我们将按照本隐私权政策收集、使用及共享您的个人信息。本隐私权政策包含了我们收集、存储、使用、共享和保护您的个人信息的条款，我们希望通过本隐私权政策向您清晰地介绍我们对您个人信息的处理方式，因此我们建议您完整地阅读本隐私权政策，以帮助您了解维护自己隐私权的方式。如您对本隐私权政策有任何疑问，您可以通过星尘实验室平台公布的联系方式与我们联系。如果您不同意本隐私权政策任何内容，您应立即停止使用星尘实验室平台服务。当您使用星尘实验室平台提供的任一服务时，即表示您已同意我们按照本隐私权政策来合法使用和保护您的个人信息。 </p> 
    <h3> <b>一、适用范围</b><b></b> </h3> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>为用户提供更好、更优、更个性化的服务是星尘实验室坚持不懈的追求，也希望通过我们提供的服务可以更方便您的生活。本隐私权政策适用于星尘实验室平台提供的所有服务，您访问星尘实验室平台网站及</span>/或登陆相关客户端使用星尘实验室平台提供的服务，均适用本隐私权政策。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 需要特别说明的是，本隐私权政策不适用于其他第三方向您提供的服务，例如星尘实验室上的卖家依托星尘实验室平台向您提供服务时，您向卖家提供的个人信息不适用于本隐私权政策。 </p> 
    <h3> <b>二、我们如何收集信息</b><b></b> </h3> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 我们收集信息是为了向您提供更好、更优、更个性化的服务，我们收集信息的方式如下： </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 1.您向我们提供的信息。&nbsp;当您注册星尘实验室账户及您在使用星尘实验室平台提供的相关服务时填写及/或提交的信息，包括您的姓名、性别、出生年月日、身份证号码、电话号码、电子邮箱、地址及相关附加信息（如您所在的省份和城市、邮政编码等）。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 2.在您使用服务过程中收集的信息。&nbsp;为了提供并优化您需要的服务，我们会收集您使用服务的相关信息，这类信息包括： </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>在您使用星尘实验室平台服务，或访问星尘实验室平台网页时，星尘实验室自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的</span>IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；如您下载或使用星尘实验室或其关联公司客户端软件，或访问移动网页使用星尘实验室平台服务时，星尘实验室可能会读取与您位置和移动设备相关的信息，包括但不限于设备型号、设备识别码、操作系统、分辨率、电信运营商等。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>除上述信息外，我们还可能为了提供服务及改进服务质量的合理需要而收集您的其他信息，包括您与我们的客户服务团队联系时您提供的相关信息，您参与问卷调查时向我们发送的问卷答复信息，以及您与星尘实验室的关联方、星尘实验室合作伙伴之间互动时我们收集的相关信息。与此同时，为提高您使用星尘实验室平台提供的服务的安全性，更准确地预防钓鱼网站欺诈和木马病毒，我们可能会通过了解一些您的网络使用习惯、您常用的软件信息等手段来判断您账户的风险，并可能会记录一些我们认为有风险的</span>URL。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <b>3.来自第三方的信息</b> </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 为了给您提供更好、更优、更加个性化的服务，或共同为您提供服务，或为了预防互联网欺诈的目的，星尘实验室的关联方、合作伙伴会依据法律的规定或与您的约定或征得您同意的前提下，向星尘实验室分享您的个人信息。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 您了解并同意，以下信息不适用本隐私权政策： </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> a）您在使用星尘实验室平台提供的搜索服务时输入的关键字信息； </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> b）在您未选择“匿名购买”和/或“匿名评价”功能时，星尘实验室收集到的您在星尘实验室平台进行交易的有关数据，包括但不限于出价、成交信息及评价详情； </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> c）信用评价、违反法律规定或违反星尘实验室规则行为及星尘实验室已对您采取的措施； </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> d) 应法律法规要求需公示的企业名称等相关工商注册信息以及自然人经营者的信息。 </p> 
    <h3> <b>三、我们如何使用信息</b><b></b> </h3> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 因收集您的信息是为了向您提供服务及提升服务质量的目的，为了实现这一目的，我们会把您的信息用于下列用途： </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 1.向您提供您使用的各项服务，并维护、改进这些服务。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 2.向您推荐您可能感兴趣的内容，包括但不限于向您发出产品和服务信息，或通过系统向您展示个性化的第三方推广信息，或者在征得您同意的情况下与星尘实验室的合作伙伴共享信息以便他们向您发送有关其产品和服务的信息。如您不希望接收上述信息，可通过相应的退订功能进行退订。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 3.我们可能使用您的个人信息以预防、发现、调查欺诈、危害安全、非法或违反与我们或其关联方协议、政策或规则的行为，以保护您、其他我们用户，或我们或其关联方的合法权益。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 4.我们可能会将来自某项服务的个人信息与来自其他服务的信息结合起来，用于为了给您提供更加个性化的服务使用。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 5.经您许可的其他用途。 </p> 
    <h3> <b>四、我们如何共享信息</b><b></b> </h3> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 我们对您的信息承担保密义务，不会为满足第三方的营销目的而向其出售或出租您的任何信息，我们会在下列情况下才将您的信息与第三方共享： </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 1.事先获得您的同意或授权。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 2.根据法律法规的规定或行政或司法机构的要求。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 3.向星尘实验室的关联方分享您的个人信息。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 4.向可信赖的合作伙伴提供您的个人信息，让他们根据我们的指示并遵循我们的隐私权政策以及其他任何相应的保密和安全措施来为我们处理这些信息。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 5.如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 6.只有共享您的信息，才能提供您需要的服务，或处理您与他人的纠纷或争议。例如您在星尘实验室上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，星尘实验室会视情况向该用户提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 7.如您出现违反中国有关法律、法规或者星尘实验室相关协议或相关规则的情况，需要向第三方披露。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 8.为维护星尘实验室及其关联方或用户的合法权益。 </p> 
    <h3> <b><span>五、</span>Cookie和网络Beacon的使用</b><b></b> </h3> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>为使您获得更轻松的访问体验，您访问星尘实验室平台相关网站或使用星尘实验室平台提供的服务时，我们可能会通过小型数据文件识别您的身份，这么做是帮您省去重复输入注册信息的步骤，或者帮助判断您的账户安全。这些数据文件可能是</span>Cookie，Flash Cookie，或您的浏览器或关联应用程序提供的其他本地存储（统称“Cookie”）。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>请您理解，我们的某些服务只能通过使用</span>“Cookie”才可得到实现。如果您的浏览器或浏览器附加服务允许，您可以修改对Cookie的接受程度或者拒绝星尘实验室的Cookie，但这一举动在某些情况下可能会影响您安全访问星尘实验室平台相关网站和使用星尘实验室平台提供的服务。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>网页上常会包含一些电子图象（称为</span>&quot;单像素&quot;GIF文件或&quot;网络beacon&quot;），使用网络beacon可以帮助网站计算浏览网页的用户或访问某些cookie，我们会通过网络beacon收集您浏览网页活动的信息，例如您访问的页面地址、您先前访问的援引页面的位址、您停留在页面的时间、您的浏览环境以及显示设定等。 </p> 
    <h3> <b>六、信息存储</b><b></b> </h3> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 星尘实验室收集的有关您的信息和资料将保存在星尘实验室及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或星尘实验室收集信息和资料所在地并在该地被访问、存储和展示。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 为保障您的数据安全，正常情况下，星尘实验室<span>将免费为您保存</span>3个月，请您及时下载测试数据；超过3个月后，可联系平台获取数据，但平台不保证能提供完整测试数据。 </p> 
    <h3> <b>七、您的个人信息保护</b><b></b> </h3> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>为保障您的信息安全，我们努力采取各种合理的物理、电子和管理方面的安全措施来保护您的信息，使您的信息不会被泄漏、毁损或者丢失，包括但不限于</span>SSL、信息加密存储、数据中心的访问控制。我们对可能接触到您的信息的员工或外包人员也采取了严格管理，包括但不限于根据岗位的不同采取不同的权限控制，与他们签署保密协议，监控他们的操作情况等措施。星尘实验室会按现有技术提供相应的安全措施来保护您的信息，提供合理的安全保障，星尘实验室将尽力做到使您的信息不被泄漏、毁损或丢失。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> <span>您的账户均有安全保护功能，请妥善保管您的账户及密码信息。星尘实验室将通过向其它服务器备份、对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您理解在信息网络上不存在</span>“完善的安全措施”。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 在使用星尘实验室平台服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是你的账户及密码发生泄露，请您立即联络星尘实验室客服，以便星尘实验室采取相应措施。 </p> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 如果您提交关于我们的服务的反馈或建议，我们可能会加以利用，但不对您承担任何义务。 </p> 
    <h3> <b>八、未成年人保护</b><b></b> </h3> 
    <p class="MsoNormal" style="text-indent:18pt;background:#FFFFFF;"> 我们重视未成年人的个人信息保护，如您为未成年人，建议您请您的监护人仔细阅读本隐私权政策，并在征得您的监护人同意的前提下使用我们的服务或向我们提供信息。 </p> 
    <p class="MsoNormal"> &nbsp; </p> 
    <p> <br /> </p> 
   </div> 
   <a class="close"  @click="showAndHide('showys')"></a> 
  </div>
  

    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
// import $ from "jquery";
// import "../js/layer";
// import "../js/licit";
// import "../js/login";
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc,token } from '../rpc/index';
import { HOST } from '../config';


export default {
  data () {
    return {
    	HOST:HOST,
    	codeSrc:'',
	      data:{
	        mobile:'15119276805',
	        passWord:'123456',
	        code:'',
	        smsCode:'',
	      },
	      divshow:{
	      	showxy:false,
			showys:false,
	      },
      Verification:true,
			timer:60,
      isMobile:false,
      isPassWord:false,
      isCode:false,
      isSmsCode:false
    }
  },
  components: {
      vHeader,
      vSider,
      vFootersimper
  },
  created() {
      this.showCode();
 	},
 	methods: {
  		//显示图片验证码
		showCode() {
			this.codeSrc = this.HOST+'common/code?t='+Math.random()      
		},
		//发送短信
		sendMsg(){
      if(this.data.code==null || this.data.code ==""){
				layer.msg("请输入图片验证码")
				return ;
			}

			this.Verification = false;      //点击button改变v-show的状态
			let auth_timer = setInterval(()=>{  //定时器设置每秒递减
				this.timer--;        //递减时间
				if(this.timer<=0){  
					this.Verification = true;    //60s时间结束还原v-show状态并清除定时器
					clearInterval(auth_timer)
					this.timer=60
				}
			},1000)

			webRpc.invokeCross("shortMessageWebRpc.sendVerCode","REGISTER",this.data.mobile,this.data.code).then(result=>{
            	if(result.retCode==0){
            		layer.msg("手机验证码已发送，请注意查收");
      			}else{
        			layer.msg(result.message);
      			}
      		}).catch(error =>{});
		},
		//注册
		register(){

			webRpc.invoke("memberWebRpc.register",this.data,this.data.smsCode).then(result=>{
				if(result.retCode==0){
                	token.setAuthToken(result.data);
                	this.getCurrentMemeber();
				}else{
					layer.msg(result.message);
				}
		    }).catch(error =>{});
		},
		//获取当前用户，以及跳转
		getCurrentMemeber(){
			webRpc.invoke("memberWebRpc.currentMember").then(result=>{
                sessionStorage.setItem('currentMember',JSON.stringify(result.data));
                this.$router.push('/');
		   	}).catch(error =>{});
    	},
    	showAndHide(arg){
    		this.divshow[arg] = !this.divshow[arg];
    	}
	}
};


</script>
