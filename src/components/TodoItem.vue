<template>
    <li>
        <span v-bind:class="{done: todo.done}">
          <input type="checkbox" v-on:change="todo.done = !todo.done">
          <strong>{{ index+1 }}</strong>
          {{ todo.title | uppercase  }}
        </span>
      <button
          class="rm"
          v-on:click="$emit('remove-todo', todo.id)"
      >&times;</button>
    </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  filters: {
    uppercase(value){
      const newValue = value[0].toUpperCase() + value.slice(1);
      return newValue
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
  .rm {
    background: red;
    color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-weight: bold;
  }
  .done {
    text-decoration: line-through;
  }

  input {
    margin: 1rem;
  }
</style>