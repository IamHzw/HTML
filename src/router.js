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
    {
       path: "/noticeDetail",
       name: "NoticeDetail",
       component: resolve => require(["./views/NoticeDetail.vue"], resolve)
    },
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
    {
      path: "/userIndex",
      name: "UserIndex",
      component: resolve => require(["./views/UserId.vue"], resolve)
    },
    {
      path: "*",
      name: "home",
      component: resolve => require(["./views/Home.vue"], resolve)
    }
  ]
});
