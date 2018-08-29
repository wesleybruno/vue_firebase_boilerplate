import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'

import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'
import locale from 'element-ui/lib/locale/lang/pt-br'

import firebase from "firebase";

var config = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: process.env.FIREBASE_databaseURL,
  storageBucket: process.env.FIREBASE_storageBucket,
};
firebase.initializeApp(config);


Vue.use(ElementUI, { locale })
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

