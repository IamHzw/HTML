<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>

    <div id="banner">
      <div class="swiper-container index-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/images/side1.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/side2.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/side3.jpg"/>
          </div>
          
          <div class="swiper-slide">
            <img src="../assets/images/side4.jpg"/>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

     <div class="section" id="service">
        <h2>我们的服务</h2>
        <h3>Our service</h3>
        <h4>为满足个性而全面的科研需求，测试狗持续拓展和前进，期待为您提供完善的解决方案</h4>
        <div class="wrap clearfix">
            <div class="service-item wow fadeInUp ac">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser1.png"></i>
                        <h5>测试分析</h5>
                        <h6>Micromorphology</h6>
                        <div class="service-cont">
                            <p><a href="javascript:void(0)">聚焦离子束（FIB）</a></p>

                            <p><a href="javascript:void(0)">粉末/液体 透射电镜（TEM）</a></p>

                            <p><a href="javascript:void(0)">场发射扫描电镜（SEM）</a></p>              
                            <a href="#/project">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="2s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser2.png"></i>
                        <h5>微纳加工</h5>
                        <h6>Material properties</h6>
                        <div class="service-cont">
                                <p><a href="javascript:void(0)">智能重量分析仪（IGA）</a></p>
                                <p><a href="javascript:void(0)">全自动物理吸附仪（BET）</a></p>
                                <p><a href="javascript:void(0)">全自动压汞仪（MIP）</a></p>               
                                <a href="#/biologys">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="1s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser3.png"></i>
                        <h5>模拟计算</h5>
                        <h6>Composition&structure</h6>
                        <div class="service-cont">
                        	<p>
                            	<router-link  :to="{path:'/simulate'}" >
                            		<a href="javascript:void(0)">几何构型</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/simulate'}" >
                            		<a href="javascript:void(0)">电子相关性质</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/simulate'}" >
                            		<a href="javascript:void(0)">动力/热力学相关性质</a>
                            	</router-link>
                            </p> 
                           
                            <a href="#/simulate">更多</a>
                            
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="4s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser4.png"></i>
                        <h5>科研作图</h5>
                        <h6>Simulation&calculation</h6>
                        <div class="service-cont">
                        	<p>
                            	<router-link  :to="{path:'/drafting'}" >
                            		<a href="javascript:void(0)">SCI期刊封面</a>
                            	</router-link>
                            </p> 
                          	<p>
                            	<router-link  :to="{path:'/drafting'}" >
                            		<a href="javascript:void(0)">论文摘要图</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/drafting'}" >
                            		<a href="javascript:void(0)">论文插图</a>
                            	</router-link>
                            </p> 
                            <a href="#/drafting">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="5s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser5.png"></i>
                        <h5>翻译润色</h5>
                        <h6>Overseas testing</h6>
                        <div class="service-cont">
                            <p>
                            	<router-link  :to="{path:'/scipolishen'}" >
                            		<a href="javascript:void(0)">英文论文润色</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/translate'}" >
                            		<a href="javascript:void(0)">中英学术翻译</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/scisupport'}" >
                            		<a href="javascript:void(0)">SCI论文投稿支持</a>
                            	</router-link>
                            </p>                 
                            <a href="#/scipolish">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="6s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser6.png"></i>
                        <h5>失效分析</h5>
                        <h6>Biogeology&Geological</h6>
                        <div class="service-cont">
                            <p><a href="javascript:void(0)">磁悬浮高压等温吸附仪（重量法）</a></p>
                            <p><a href="javascript:void(0)">X射线全岩定量分析</a></p>
                            <p><a href="javascript:void(0)">地质薄片</a></p>                        
                            <a href="javascript:void(0)">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
        </div>
     </div>

     <!-- <div class="section" id="reservations" style="display: none">
        <h2>预约动态</h2>
        <h3>Reservations in progress</h3>
        <h4>测试狗专业而便捷的服务，正成为众多科研人员的第一选择</h4>
        <div class="wrap clearfix">
            <div class="reservations-table fl wow fadeInUp">
                <h5>最新预约</h5>
                <table style="table-layout:fixed;word-wrap:break-word">
                    <thead>
                    <tr>
                        <th width="120">测试项目</th>
                        <th width="140">所属单位</th>
                        <th width="120">手机号</th>
                        <th width="120">日期</th>
                    </tr>
                    </thead>
                    <tbody>
                                    <tr>
                            <td title="X射线衍射仪（XRD）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=137.html" style="color: #1f1f1f">X射线衍射仪（XRD）</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                中南民族大学                        </td>
                            <td>176****5038</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="粉末/液体 透射电镜（TEM）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=143.html" style="color: #1f1f1f">粉末/液体 透射电镜（TEM）</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                四川大学                        </td>
                            <td>132****9578</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="粉末/液体 透射电镜（TEM）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=143.html" style="color: #1f1f1f">粉末/液体 透射电镜（TEM）</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                四川大学                        </td>
                            <td>132****9578</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="傅里叶红外光谱仪（FTIR）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=155.html" style="color: #1f1f1f">傅里叶红外光谱仪（FTIR）</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                电子科技大学                        </td>
                            <td>187****3082</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="液体核磁共振（NMR）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=180.html" style="color: #1f1f1f">液体核磁共振（NMR）</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                西南石油大学                        </td>
                            <td>182****9990</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="X射线光电子能谱（XPS）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=166.html" style="color: #1f1f1f">X射线光电子能谱（XPS）</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                成都市金牛区西南交通大学(九里校区)                        </td>
                            <td>152****2494</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="X射线光电子能谱（XPS）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=166.html" style="color: #1f1f1f">X射线光电子能谱（XPS）</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                成都市金牛区西南交通大学(九里校区)                        </td>
                            <td>152****2494</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="粉末/液体 透射电镜（TEM）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=143.html" style="color: #1f1f1f">粉末/液体 透射电镜（TEM）</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                四川大学                        </td>
                            <td>132****9578</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="傅里叶红外光谱仪（FTIR）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=155.html" style="color: #1f1f1f">傅里叶红外光谱仪（FTIR）</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                电子科技大学                        </td>
                            <td>187****3082</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="凝胶渗透色谱仪(GPC)"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=139.html" style="color: #1f1f1f">凝胶渗透色谱仪(GPC)</a>
                            </td>
                            <td title=""
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                西南石油大学                        </td>
                            <td>182****9990</td>
                            <td>2019-06-05</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="reservations-table fl wow fadeInUp" data-wow-delay=".2s">
                <h5>最近完成</h5>
                <table style="table-layout:fixed;word-wrap:break-word">
                    <thead>
                    <tr>
                        <th width="120">测试项目</th>
                        <th width="140">所属单位</th>
                        <th width="120">手机号</th>
                        <th width="120">日期</th>
                    </tr>
                    </thead>
                    <tbody>
                                    <tr>
                            <td title="场发射扫描电镜（SEM）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=141.html" style="color: #1f1f1f">场发射扫描电镜（SEM）</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          四川大学                                   </td>
                            <td>132****2779</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="X射线衍射仪（XRD）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=137.html" style="color: #1f1f1f">X射线衍射仪（XRD）</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          四川大学望江校区                                   </td>
                            <td>184****5794</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="粉末/液体 透射电镜（TEM）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=143.html" style="color: #1f1f1f">粉末/液体 透射电镜（TEM）</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          四川大学望江校区                                   </td>
                            <td>184****5794</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="XRD"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;.html" style="color: #1f1f1f">XRD</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          中科院成都有机所                                   </td>
                            <td>182****4692</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="生物样本透射电镜（TEM）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=146.html" style="color: #1f1f1f">生物样本透射电镜（TEM）</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          西南交通大学                                   </td>
                            <td>158****3363</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="粉末/液体 透射电镜（TEM）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=143.html" style="color: #1f1f1f">粉末/液体 透射电镜（TEM）</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          四川大学                                   </td>
                            <td>132****2779</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="场发射扫描电镜（SEM）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=141.html" style="color: #1f1f1f">场发射扫描电镜（SEM）</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          西南交通大学                                   </td>
                            <td>152****9490</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="粉末/液体 透射电镜（TEM）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=143.html" style="color: #1f1f1f">粉末/液体 透射电镜（TEM）</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          四川大学                                   </td>
                            <td>132****2779</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="X射线荧光光谱（XRF）"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=142.html" style="color: #1f1f1f">X射线荧光光谱（XRF）</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          中国科学院                                   </td>
                            <td>135****0152</td>
                            <td>2019-06-05</td>
                        </tr><tr>
                            <td title="同步热分析仪(DSC/DTA-TG)"
                                style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis"><a href="index.php-m=&amp;c=Project&amp;a=detail&amp;pid=152.html" style="color: #1f1f1f">同步热分析仪(DSC/DTA-TG)</a>
                            </td>
                                      <td title=""
                                          style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                                          西南交通大学                                   </td>
                            <td>152****9490</td>
                            <td>2019-06-05</td>
                        </tr>                </tbody>
                </table>
            </div>
        </div>
     </div> -->

     <div class="section" id="paper">
        <h2>论文案例</h2>
        <h3>Paper case</h3>
        <h4>测试狗是发表论文的催化剂，与大家共同著就经典</h4>
        <div class="wrap">
            <div class="paper-container swiper-container">
                <div class="swiper-wrapper">
                    <div class="paper-slide swiper-slide">
                        <div class="paper-box">
                            <div class="paper-pic"><a><img src="../assets/images/Index_icon_1.jpg"></a>
                            </div>
                        </div>
                    </div>
                    <div class="paper-slide swiper-slide">
                        <div class="paper-box">
                            <div class="paper-pic"><a><img src="../assets/images/Index_icon_2.jpg"></a>
                            </div>
                        </div>
                    </div>
                    <div class="paper-slide swiper-slide">
                        <div class="paper-box">
                            <div class="paper-pic"><a><img src="../assets/images/Index_icon_3.jpg"></a>
                            </div>
                        </div>
                    </div>
                    <div class="paper-slide swiper-slide">
                        <div class="paper-box">
                            <div class="paper-pic"><a><img src="../assets/images/Index_icon_4.jpg"></a>
                            </div>
                        </div>
                    </div>
                    <div class="paper-slide swiper-slide">
                        <div class="paper-box">
                            <div class="paper-pic"><a><img src="../assets/images/Index_icon_5.jpg"></a>
                            </div>
                        </div>
                    </div>
                    <div class="paper-slide swiper-slide">
                        <div class="paper-box">
                            <div class="paper-pic"><a><img src="../assets/images/Index_icon_6.jpg"></a>
                            </div>
                        </div>
                    </div>
                    <div class="paper-slide swiper-slide">
                        <div class="paper-box">
                            <div class="paper-pic"><a><img src="../assets/images/Index_icon_7.jpg"></a>
                            </div>
                        </div>
                    </div>
                    <div class="paper-slide swiper-slide">
                        <div class="paper-box">
                            <div class="paper-pic"><a><img src="../assets/images/Index_icon_8.jpg"></a>
                            </div>
                        </div>
                    </div>            
                  </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
     </div>

     <div class="section" id="choose">
        <h2>为什么选择我们</h2>
        <h3>Choose reason</h3>
        <h4>专业的技术服务团队，市场化的运营管理，让测试狗的服务专业而便捷</h4>
        <div class="wrap">
            <div class="choose-item">
                <div class="choose-top">
                    <i><img src="../assets/images/choose1.png"></i>
                    <h5>高效</h5>
                    <p>50%项目可当天测试</p>
                    <p>70%项目可隔天测试</p>
                </div>
                <div class="choose-bot">
                    <h6>4.2天</h6>
                    <p>平均测试周期</p>
                </div>
            </div>
            <div class="choose-item">
                <div class="choose-top">
                    <i><img src="../assets/images/choose2.png"></i>
                    <h5>专业</h5>
                    <p>以严苛的标准和工匠的精神</p>
                    <p>精心整合优质的测试资源</p>
                </div>
                 <div class="choose-bot">
                    <h6>430+</h6>
                    <p>合作单位</p>
                </div>
            </div>
            <div class="choose-item">
                <div class="choose-top">
                	<i><img src="../assets/images/choose4.png"></i>
                    
                    <h5>物美</h5>
                    <p>结合互联网+，使得测试费用</p>
                    <p>降低50%以上</p>
                </div>
                <div class="choose-bot">
                    <h6>98.8%<sup style="font-size: 14px;">以上</sup></h6>
                    <p>客户满意度</p>
                </div>
            </div>
            <div class="choose-item">
                <div class="choose-top">
                   	<i><img src="../assets/images/choose3.png"></i> 
                    <h5>价廉</h5>
                    <p>同城上门取样</p>
                    <p>异地邮寄包邮</p>
                </div>
                <div class="choose-bot">
                    <h6>97500+</h6>
                    <p>测试样品</p>
                </div>
            </div>
            <div class="c-dot">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="c-dot c-dot2">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
     </div>

     <div class="sci-user section">
        <h2>部分用户致谢论文</h2>
        <h4>科研，我要发CNS</h4>   
        <div class="img-box-hide">
              <div id="img-box" class="img-box" style="height: 408px;">
                 <!-- <img class="bottomImg1" src="https://statics.shiyanjia.com/c/2018/images/produce/scroll.png"> -->
                 <div class="thanks-list-box">
                
                    <table class="thanks-list">
                        <thead>
                            <tr>
                                <th class="col1">编号/测试项目</th>
                                <th class="col2">致谢人/单位</th>
                                <th class="col3">致谢内容</th>
                                <th class="col4">发表文章</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in articlelist">
                                <td class="col1">
                                    <h1>{{index+1}}</h1>
									{{item.title}}
                                </td>
                                <td class="col2">
									{{item.createUser}}<br>
                                    {{item.createUnit}}
                                </td>
                                <td class="col3">
                                   <img :src="HOST+item.imgUrl" alt="" style="max-width: 332px;">
                                </td>
                                <td class="col4">
                                    <p v-html = 'item.content'></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              <!-- </div> -->
            </div>                
        </div>
     </div>
    <div class="section" id="agency">
        <h2>合作机构</h2>
        <h3>Cooperation agency</h3>
        <h4>与众多知名单位合作，持续优化和提升服务质量，只为给您提供快速而准确的数据</h4>

        <div class="img-box-hide">
              <div id="img-box" class="img-box" style="height: 408px;">
                 <!-- <img class="bottomImg1" src="https://statics.shiyanjia.com/c/2018/images/produce/scroll.png"> -->
                 <div class="thanks-list-box">
                	<ul>
                		<li v-for="item in linklist">
                			 <img :src="HOST+item[0]" alt="" >
                		</li>
                	</ul>
                </div>
            </div>                
        </div>
    </div>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
// import $ from "jquery";
import { WOW } from 'wowjs';
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFooter from "../components/vFooter.vue";
import { webRpc } from '../rpc/index';
import { HOST } from '../config';

export default {
  data () {
    return {
    	HOST:HOST,
    	linklist: {},
    	articlelist:{},
        query:{
        	categoryCode:'thesis'
        },
        top:35,
    }
  },
    components: {
        vHeader,
        vSider,
        vFooter
    },
	created () {
		this.getData();
	},
  methods: {
  		getData() {
          webRpc.invoke("linkWebRpc.findTopList",this.query,this.top).then(result=>{
            this.linklist = result.data;
            console.log(result);
          }).catch(error =>{});
          
          webRpc.invoke("articleWebRpc.findTopFullList",this.query,this.top).then(result=>{
            this.articlelist = result.data;
            console.log(result);
          }).catch(error =>{});
          
		},
      init(){
          $(window).scroll(function(e){
                e.stopPropagation();
                var scrollTop = $(window).scrollTop();
                if(scrollTop > 2000){
                    var innerWindowHeight = $(window).height();                     // 浏览器视口的高度
                    var scrollHeight = 4401-innerWindowHeight+200                  // 图片滚动的距离
                   
                    $(".sci-user").css({height:innerWindowHeight});
                    $(".img-box").css({height:innerWindowHeight-200});
                    $(".img-box").animate({scrollTop: scrollHeight}, 80000, 'linear'); 
                    $(".img-box").mouseenter(function(){
                    
                        $(this).stop(true);
                    }).mouseleave(function(){
                   
                        var top = parseInt($(".img-box").scrollTop());                              // 鼠标移出时scrollTop
                        var time = parseInt( (scrollHeight - top) / (scrollHeight / 80000) );       // 重新计算运动时间
                        $(".img-box").animate({scrollTop: scrollHeight}, time, 'linear');
                    });
                }
            });
            document.getElementById('img-box').onmousewheel = function(e){                
                this.scrollTop = this.scrollTop - (event.wheelDelta ? event.wheelDelta : -event.detail * 10);//直接设置滚动条高度
   
                return false;//取消滚动条的默认行为，就是不让他执行默认的滚动
                
            };
      }
  },
  mounted(){
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
    })
    wow.init();
    this.init();
    var mySwiper = new Swiper('.index-container', {
        // autoplay:true,
        loop:true,
        pagination:{
          el:".swiper-pagination",
          clickable:true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
        },
    });
    var bswiper = new Swiper('.paper-container', {
          direction: 'horizontal', 
          loop: true, // 循环模式选项
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
          },
        　navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 3,
    });
    // var swiper = new Swiper('.img-box-hide', {
    //     scrollbar: '.swiper-scrollbar',
    //     direction: 'vertical',
    //     slidesPerView: 'auto',
    //     mousewheelControl: true,
    //     freeMode: true,
    //     autoplay: {
    //         delay: 10,
    //         //disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
    //     },
    // });
  },
  destroyed(){
      //mySwiper,
      //bswiper
  }
};
</script>

<style>
  .index-container{
    height: 663px;
  }
  .index-container img{
    width: 100%;
    height: 100%;
  }

  .section .img-box-hide{
  	/* width:750px; */
  	overflow:hidden;
  	margin:0 auto;
   }
  .section .img-box{
        /* width:767px; */
        /* margin:51px auto 0; */
        overflow-y:auto;
        position:relative;
        text-align:center;
        -ms-overflow-style: none;
    overflow: -moz-scrollbars-none; 
    }
    .section .img-box:after{
        content:"";
        display:block;
        clear:both
    }
    

.thanks-list-box {
    width: 1200px;
    margin: 24px auto 0;
    height: auto;
    padding: 0 30px;
    background: #FFF;
    box-shadow: 0px 0px 30px 4px #D6E2DD;
    
}
.section .img-box::-webkit-scrollbar { width: 0 !important }
.thanks-list {
    width: 100%;
}
.thanks-list tr {
    border-bottom: 1px solid rgba(187, 151, 79, 0.5);
}
.thanks-list .imgstr {
    border-bottom: 0;
}
.thanks-list td {
    height: 80px;
    font-size: 16px;
    color: rgba(0, 0, 0, .85);
    font-weight: bold;
    text-align: left;
}
.thanks-list .col1 {
    width: 230px;
}
.thanks-list .col2 {
    width: 220px;
    padding-right: 15px;
    line-height: 22px;
}
.thanks-list .col3 {
    width: 332px;
    padding: 5px 30px 5px 0;
}
.thanks-list .col4 {
    width: 358px;
    padding: 20px 12px 20px 0;
}

.thanks-list td {
    min-height: 100px;
    font-size: 14px;
    color: rgba(0, 0, 0, .65);
}

.thanks-list-box ul {
	list-style-type:none;
}

.thanks-list-box li {
	float:left;
	    width: 14%;
}


</style>
