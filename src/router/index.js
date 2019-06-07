import Vue from 'vue'
import Router from 'vue-router'
import ToDoItem from '@/components/ToDoItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDoItem',
      component: ToDoItem
    }
  ]
})
