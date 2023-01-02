import Root from "./views/Root.vue";
import Home from "./views/Home.vue";

export default [
  {
    path: "/",
    component: Root,
    meta: {},
    children: [
      {
        path: "",
        component: Home,
        name: "home"
      },
    ],
  },
];
