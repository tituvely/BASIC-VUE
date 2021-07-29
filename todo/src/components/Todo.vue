<template>
  <div class="mb-2 d-flex">
    <div>
      {{ todo.checked }}
      <input
        type="checkbox"
        v-bind:checked="todo.checked"
        v-on:change="toggleCheckbox"
      />
    </div>
    <span
      class="ml-3 flex-grow-1"
      v-bind:class="todo.checked ? 'text-muted' : ''"
      :style="todo.checked ? 'text-decoration:line-through' : ''"
    >
      {{ todo.text }}
    </span>
    <button class="btn btn-danger bnt-sm" @click="clickDelete">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheckbox(e) {
      this.$store.dispatch("todo/toggleTodo", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
    clickDelete() {
      this.$store.dispatch("todo/deleteTodo", this.todo.id);
    },
  },
};
</script>

<style></style>
