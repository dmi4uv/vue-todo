<template>
  <div class="wrap">
    <p>Add item</p>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="title">
      <button type="submit">Add</button>
    </form>
  </div>

</template>

<script>
export default {
  data(){
    return {
      title: ""
    }
  },
  methods: {
    onSubmit(){
      if (this.title){
        const newTodo = {
          id: Date.now(),
          title: this.title,
          done: false
        }
        this.$emit("newTodo", newTodo)
        this.title = ""
      }
    }
  }
}
</script>

<style scoped>
.wrap {
  width: auto;
  padding: 10px;
  display: flex;
  max-width: 300px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
form {
  display: flex;
}
input {
  min-width: 250px;
}
</style>