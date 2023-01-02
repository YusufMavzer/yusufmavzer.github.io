import Vue from "vue";
import Router, { Route, RouteConfig } from "vue-router";
import HomeRoutes from "@/modules/home/index"
Vue.use(Router);

const routes: RouteConfig[] = [
    ...HomeRoutes
];

function ensureRouteMetaValue(route: Route, predicate: (meta: any) => boolean) {
    return route.matched.some(m => predicate(m.meta));
}

routes.push({
    path: "*",
    redirect: "/",
});

export const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;