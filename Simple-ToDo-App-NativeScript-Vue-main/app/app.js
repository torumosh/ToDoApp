import Vue from "nativescript-vue";
import Home from "./components/Home";
import { CheckBox } from "@nstudio/nativescript-checkbox";
// import store from './store/index'


Vue.registerElement(
  "Fab",
  () => require("@nstudio/nativescript-floatingactionbutton").Fab
);
Vue.registerElement("CheckBox", () => CheckBox, {
  model: {
    prop: "checked",
    event: "checkedChange",
  },
});

new Vue({
  render: (h) => h("frame", [h(Home)]),
  // store,
}).$start();
