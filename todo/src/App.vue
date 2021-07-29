<template>
  <div id="app" class="container">
    <h1 class="text-center">TODO APP</h1>
    <CompletedTodo />
    <AddTodo />
    <hr />
    <TodoList />
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
};
</script>

