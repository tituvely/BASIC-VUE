<template>
  <div>
    <h1>THIS IS HOME PAGE</h1>
    <form action="">
      <InputField :name="name" @update-name="name = $event.target.value" />
      <br />
      <button>submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
export default {
  components: {
    InputField,
  },
  data() {
    return {
      name: " ",
    };
  },
  // methods: {
  //   updateName(name) {
  //     this.name = name;
  //   },
  // },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>