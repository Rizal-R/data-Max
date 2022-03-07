import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faFlag, faGlobe, faGenderless, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faUser, faFlag, faGlobe, faGenderless, faHouse);
import store from './store'
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).mount('#app')
