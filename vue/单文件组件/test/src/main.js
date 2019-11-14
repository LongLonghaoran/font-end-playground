import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

class Person {
  static name = 123;
  constructor(name){
    this.name = name;
  }
}
var person = new Person('longhr')
new Vue({
  data: {
    person:  person,
    Person: Person
  },
  render: h => h(App),
}).$mount('#app')
