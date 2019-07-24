import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: resolve => require(["./views/Index.vue"], resolve),
      meta: { title: '首页', warn:false }
    },
    {
      path: "/project",
      name: "project",
      component: resolve => require(["./views/Project.vue"], resolve),
      meta: { title: '测试服务列表', warn:false  }
    },
    {
        path: "/product",
        name: "product",
        component: resolve => require(["./views/Product.vue"], resolve),
        meta: { title: '测试服务详情', warn:false  }
    },
    {
      path: "/login",
      name: "login",
      component: resolve => require(["./views/Login.vue"], resolve),
      meta: { title: '登陆', warn:false  }
    },
    {
      path: "/register",
      name: "register",
      component: resolve => require(["./views/Register.vue"], resolve),
      meta: { title: '注册', warn:false  }
    },
    {
      path: "/about",
      name: "about",
      component: resolve => require(["./views/About.vue"], resolve),
      meta: { title: '关于我们', warn:false  }
    },
    {
      path: "/partnership",
      name: "partnership",
      component: resolve => require(["./views/Partnership.vue"], resolve),
      meta: { title: '合作加盟,不用', warn:false  }
    },
    {
      path: "/notice",
      name: "notice",
      component: resolve => require(["./views/Notice.vue"], resolve),
      meta: { title: '公告列表', warn:false  }
    },
    {
       path: "/noticeDetail",
       name: "noticeDetail",
       component: resolve => require(["./views/NoticeDetail.vue"], resolve),
       meta: { title: '公告', warn:false  }
    },

    {
      path: "/biologys",
      name: "biologys",
      component: resolve => require(["./views/Biologys.vue"], resolve),
      meta: { title: '加工', warn:false  }
    },
    {
      path: "/biologysProt",
      name: "biologysProt",
      component: resolve => require(["./views/BiologysProt.vue"], resolve),
      meta: { title: '加工', warn:false  }
    },
    {
      path: "/newdemand",
      name: "newdemand",
      component: resolve => require(["./views/Newdemand.vue"], resolve),
      meta: { title: '发新需求 ，不用', warn:false  }
    },
    {
      path: "/drafting",
      name: "drafting",
      component: resolve => require(["./views/Drafting.vue"], resolve),
      meta: { title: '科研绘图', warn:false  }
    },
    {
      path: "/simulate",
      name: "simulate",
      component: resolve => require(["./views/Simulate.vue"], resolve),
      meta: { title: '模拟计算', warn:false  }
    },
    {
      path: "/scipolish",
      name: "scipolish",
      component: resolve => require(["./views/Scipolish.vue"], resolve),
      meta: { title: '释放润色', warn:false  }
    },
    {
      path: "/scipolishen",
      name: "scipolishen",
      component: resolve => require(["./views/Scipolishen.vue"], resolve),
      meta: { title: '英文润色', warn:false  }
    },
    {
      path: "/translate",
      name: "translate",
      component: resolve => require(["./views/Translate.vue"], resolve),
      meta: { title: '中英学术', warn:false}
    },
    {
      path: "/scisupport",
      name: "scisupport",
      component: resolve => require(["./views/Scisupport.vue"], resolve),
      meta: { title: 'SCI论文', warn:false}
    },
    // 订单
    // {
    //   path: "/orderCopy",
    //   name: "OrderCopy",
    //   component: resolve => require(["./views/OrderCopy.vue"], resolve),
    //   meta: { title: '订单详情', warn:false}
    // },
    // 预约
    {
      path: "/order",
      name: "Order",
      component: resolve => require(["./views/Order.vue"], resolve),
      meta: { title: '订单详情', warn:true}
    },
    {
        path: "/ordersucess",
        name: "OrderSucess",
        component: resolve => require(["./views/OrderSucess.vue"], resolve),
        meta: { title: '订单提示', warn:false}
    },
    // 订单页
    // {
    //   path: "/itemlistOrder",
    //   name: "ItemlistOrder",
    //   component: resolve => require(["./views/ItemlistOrder.vue"], resolve),
    //   meta: { title: '订单详情', warn:false}
    // },
    // 用户中心
    {
      path: "/home",
      component: resolve => require(["./views/home/Home.vue"], resolve),
      meta: { title: '用户中心', warn:true},
      name: "home",
      redirect: 'home/personal',
      children: [
        // 个人中心
        {
          name: "Personal",
          path: "personal",
          component: resolve => require(["./views/home/Personal.vue"], resolve),
          meta: { title: '个人中心', warn:true}
        },
        //订单管理
        {
          name: "OrderManagement",
          path: "orderManagement",
          component: resolve => require(["./views/home/OrderManagement.vue"], resolve),
          meta: { title: '用户中心', warn:true}
        },
        //消息中心
        {
          name: "MessageCenter",
          path: "messageCenter",
          component: resolve => require(["./views/home/MessageCenter.vue"], resolve),
          meta: { title: '用户中心', warn:true}
        },
        //我的收藏
        {
          name: "Collect",
          path: "collect",
          component: resolve => require(["./views/home/Collect.vue"], resolve),
          meta: { title: '用户中心', warn:true}
        },
        //一键预约
        {
          name: "Appointment",
          path: "appointment",
          component: resolve => require(["./views/home/Appointment.vue"], resolve),
          meta: { title: '用户中心', warn:true}
        },
        //个人设置
        {
          name: "PersonalSetting",
          path: "personalSetting",
          component: resolve => require(["./views/home/PersonalSetting.vue"], resolve),
          meta: { title: '用户中心', warn:true}
        },
        //设置密码
        {
          name: "ChangePass",
          path: "changePass",
          component: resolve => require(["./views/home/ChangePass.vue"], resolve),
          meta: { title: '用户中心', warn:true}
        },
        //更换手机
        {
          name: "ReplacePhone",
          path: "replacePhone",
          component: resolve => require(["./views/home/ReplacePhone.vue"], resolve),
          meta: { title: '用户中心', warn:true}
        },
      ]
    },
    {
      path: "*",
      name: "index",
      component: resolve => require(["./views/Index.vue"], resolve),
      meta: { title: '测试服务列表', warn:false  }
    }
  ]
});
