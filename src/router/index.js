import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "../views/HomePage.vue"
import map from "../views/MapPage.vue"

const routes = [
    {
        path: "/",
        redirect:"/homepage"
		
    },{
        component: home ,
        name: "homepage",
        path: "/homepage",
		
    },{
        component: map ,
        name: "mappage",
        path: "/map",
		
    }
];
const router = new VueRouter({
	routes,
});

export default router;
