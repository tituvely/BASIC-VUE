<template>
  <div id="app" class="container">
    <h1 class="text-center">TODO APP</h1>
    <CompletedTodo :todos="todos" />
    <AppTodo @add-todo="addTodo" />
    <hr />
    <TodoList
      v-bind:todos="todos"
      v-on:toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import AppTodo from "@/components/AppTodo";
import TodoList from "@/components/TodoList";
import CompletedTodo from "@/components/CompletedTodo";
export default {
  components: {
    AppTodo,
    TodoList,
    CompletedTodo,
  },
  data() {
    return {
      todos: [
        { id: 1, text: "buy a car", checked: false },
        { id: 2, text: "play game", checked: true },
      ],
    };
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

