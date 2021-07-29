<template>
  <div>
    <h1>THIS IS HOME PAGE</h1>
    <form action="">
      <InputField v-model="name" />
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
      name: "TITU CODER",
    };
  },
  beforeCreate() {
    console.log("beforeCreate " + this.name); //undefined
  },
  created() {
    console.log("created " + this.name); //TITU CODER
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    alert("Mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("Updated");
  },
  beforeDestroy() {
    alert("beforeDestroy");
  },
  destroyed() {
    alert("destroyed");
  },
  methods: {
    updateName() {
      this.name = "HELLO";
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>