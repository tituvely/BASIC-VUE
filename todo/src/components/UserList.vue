<template>
  <div>
    USERLIST
    <div v-for="user in people" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.getPeople();
  },
  computed: {
    // ...mapState(["todos", "users"]),
    ...mapState({ people: "users" }),
    // users() {
    //   return this.$store.state.users;
    // },
    // todos() {
    //   return this.$store.state.todos;
    // },
  },
  methods: {
    // ...mapActions(["getUsers"]),
    ...mapActions({ getPeople: "getUsers" }),
    // getUsers() {
    //   this.$store.dispatch("getUsers");
    // },
  },
};
</script>

<style>
</style>