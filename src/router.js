import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: resolve => require(["./views/Home.vue"], resolve)
    },
    {
      path: "/project",
      name: "Project",
      component: resolve => require(["./views/Project.vue"], resolve)
    },
    {
      path: "/projectDetails",
      name: "ProjectDetails",
      component: resolve => require(["./views/Project_details.vue"], resolve)
    },
    {
      path: "/login",
      name: "Login",
      component: resolve => require(["./views/Login.vue"], resolve)
    },
    {
      path: "/register",
      name: "Register",
      component: resolve => require(["./views/Register.vue"], resolve)
    },
    {
      path: "/about",
      name: "About",
      component: resolve => require(["./views/About.vue"], resolve)
    },
    {
      path: "/partnership",
      name: "Partnership",
      component: resolve => require(["./views/Partnership.vue"], resolve)
    },
    {
      path: "/notice",
      name: "Notice",
      component: resolve => require(["./views/Notice.vue"], resolve)
    },
    // {
    //   path: "/noticeFirst",
    //   name: "NoticeFirst",
    //   component: resolve => require(["./views/NoticeFirst.vue"], resolve)
    // },
    // {
    //   path: "NoticeFirst",
    //   name: "NoticeSecond",
    //   component: resolve => require(["./views/NoticeSecond.vue"], resolve)
    // },
    // {
    //   path: "/noticeThirdly",
    //   name: "NoticeThirdly",
    //   component: resolve => require(["./views/NoticeThirdly.vue"], resolve)
    // },
    // {
    //   path: "/noticeFourthly",
    //   name: "NoticeFourthly",
    //   component: resolve => require(["./views/NoticeFourthly.vue"], resolve)
    // },
    // {
    //   path: "/noticeFifth",
    //   name: "NoticeFifth",
    //   component: resolve => require(["./views/NoticeFifth.vue"], resolve)
    // },
    // {
    //   path: "/noticeSixth",
    //   name: "NoticeSixth",
    //   component: resolve => require(["./views/NoticeSixth.vue"], resolve)
    // },
    // {
    //   path: "/noticeSeventh",
    //   name: "NoticeSeventh",
    //   component: resolve => require(["./views/NoticeSeventh.vue"], resolve)
    // },
    // {
    //   path: "/noticeEighth",
    //   name: "NoticeEighth",
    //   component: resolve => require(["./views/NoticeEighth.vue"], resolve)
    // },
    {
      path: "/product",
      name: "Product",
      component: resolve => require(["./views/Product.vue"], resolve)
    },
    {
      path: "/biologys",
      name: "Biologys",
      component: resolve => require(["./views/Biologys.vue"], resolve)
    },
    {
      path: "/biologysProt",
      name: "BiologysProt",
      component: resolve => require(["./views/BiologysProt.vue"], resolve)
    },
    {
      path: "/newdemand",
      name: "Newdemand",
      component: resolve => require(["./views/Newdemand.vue"], resolve)
    },
    {
      path: "/drafting",
      name: "Drafting",
      component: resolve => require(["./views/Drafting.vue"], resolve)
    },
    {
      path: "/simulate",
      name: "Simulate",
      component: resolve => require(["./views/Simulate.vue"], resolve)
    },
    {
      path: "/scipolish",
      name: "Scipolish",
      component: resolve => require(["./views/Scipolish.vue"], resolve)
    },
    {
      path: "/scipolishen",
      name: "Scipolishen",
      component: resolve => require(["./views/Scipolishen.vue"], resolve)
    },
    {
      path: "/translate",
      name: "Translate",
      component: resolve => require(["./views/Scipolishen.vue"], resolve)
    },
    {
      path: "/scisupport",
      name: "Scisupport",
      component: resolve => require(["./views/Scisupport.vue"], resolve)
    },
    // 用户中心
    {
      path: "/userIndex",
      component: resolve => require(["./views/UserId.vue"], resolve),
      redirect:{ name: "Personal"},
      children: [
        // 个人中心
        {
          name: "Personal",
          path: "/personal",
          component: resolve => require(["./views/Personal.vue"], resolve),
        },
        //订单管理
        {
          name: "OrderManagement",
          path: "/orderManagement",
          component: resolve => require(["./views/OrderManagement.vue"], resolve),
        },
        //消息中心
        {
          name: "MessageCenter",
          path: "/messageCenter",
          component: resolve => require(["./views/MessageCenter.vue"], resolve),
        },
        //我的收藏
        {
          name: "Collect",
          path: "/collect",
          component: resolve => require(["./views/Collect.vue"], resolve),
        },
        //一键预约
        {
          name: "Appointment",
          path: "/appointment",
          component: resolve => require(["./views/Appointment.vue"], resolve),
        },
        //个人设置
        {
          name: "PersonalSetting",
          path: "/personalSetting",
          component: resolve => require(["./views/PersonalSetting.vue"], resolve),
        },
        //设置密码
        {
          name: "ChangePass",
          path: "/changePass",
          component: resolve => require(["./views/ChangePass.vue"], resolve),
        },
        //更换手机
        {
          name: "ReplacePhone",
          path: "/replacePhone",
          component: resolve => require(["./views/ReplacePhone.vue"], resolve),
        },
      ]
    },
    {
      path: "*",
      name: "home",
      component: resolve => require(["./views/Home.vue"], resolve)
    }
  ]
});
