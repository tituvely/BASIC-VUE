<template>
  <div>
    <h1>THIS IS HOME PAGE</h1>
    <TituCoder />
  </div>
</template>

<script>
import TituCoder from '@/components/TituCoder.vue';
export default {
  components: {
    TituCoder
  },
  data() {
    return {
      name: 'TITU CODER'
    }
  },
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>