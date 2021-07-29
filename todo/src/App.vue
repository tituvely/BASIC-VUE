<template>
  <div id="app" class="container">
    <h1 class="text-center">TODO APP</h1>
    <CompletedTodo />
    <AddTodo @add-todo="addTodo" />
    <hr />
    <TodoList
      v-on:toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import CompletedTodo from "@/components/CompletedTodo";
export default {
  components: {
    AddTodo,
    TodoList,
    CompletedTodo,
  },
  data() {
    return {};
  },
  methods: {
    addTodo(value) {
      this.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    toggleCheckbox({ id, checked }) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos[index].checked = checked;
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

