import toast from './toast.vue'
// import Vue from 'vue'
const obj = {}
obj.install = function (Vue) {
    const ts = Vue.extend(toast)
    const ta = new ts()
    ta.$mount(document.createElement('div'))
    document.body.appendChild(ta.$el)
    Vue.prototype.$toast = ta
}
export default obj 