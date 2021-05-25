import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.directive('pin', {
  mounted(el, binding) {
    el.style.position = 'fixed'
    el.style.top = binding.value + 'px'
  },
})

app.use(store).use(router).mount('#app')
