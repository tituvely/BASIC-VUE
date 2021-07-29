<template>
  <div id="app" class="container">
    <h1 class="text-center">TODO APP</h1>
    <CompletedTodo />
    <AddTodo />
    <hr />
    <TodoList />
    <UserList />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import CompletedTodo from "@/components/CompletedTodo";
import UserList from "@/components/UserList";
export default {
  components: {
    AddTodo,
    TodoList,
    CompletedTodo,
    UserList,
  },
};
</script>

