<template>
  <div>
    <Todo
      v-for="todo in todos"
      v-bind:key="todo.id"
      v-bind:todo="todo"
      v-on:toggle-checkbox="toggleCheckbox"
      @click-delete="clickDelete"
    />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  components: {
    Todo,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleCheckbox(value) {
      this.$emit("toggle-checkbox", value);
    },
    clickDelete(todoId) {
      this.$emit("click-delete", todoId);
    },
  },
};
</script>
