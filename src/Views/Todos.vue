<template>
  <div>
    <h2>Todo list</h2>
    <router-link to ="/" >Home</router-link>
    <AddTodo @newTodo="newTodo" />
    <div class="filter">
      <p>Filter:</p>
      <select v-model="filter">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not completed">Not completed</option>
      </select>
    </div>
    <hr>
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="todos.length"
        v-bind:todos="filteredTodos"
        @removeTodo="removeTodo"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Loader from '@/components/Loader.vue'


export default {
  name: 'App',
  data(){
    return {
      todos: [],
      loading: true,
      filter: "All"
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
          this.todos = json
          this.loading = false
        })
  },
  computed: {
    filteredTodos(){
      if (this.filter === "All"){
        return this.todos
      }
      if (this.filter === "Completed"){
        return this.todos.filter( t => t.done)
      }
      if (this.filter === "Not completed"){
        return this.todos.filter( t => !t.done)
      }
    }
  }
 ,
  components: {
    Loader,
    TodoList,
    AddTodo
  },
  methods: {
    removeTodo(id){
      this.todos = this.todos.filter(i => i.id !== id)
    },
    newTodo(item){
      this.todos.push(item)
    }
  }
}
</script>

<style scoped>
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
select {
  margin: 20px 0;
}
</style>