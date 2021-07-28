<template>
  <div class="about">
    <h1>This is about page</h1>
    <TituCoder>
      <!-- <template v-slot:header>
        <div>This is HEADER</div>
      </template> -->
      <!-- <template #header="props">
        <div>This is HEADER {{ props.coder }}</div>
      </template> -->
      <template #header="{ coder }">
        <div>This is HEADER {{ coder }}</div>
      </template>
      <template v-slot:default> HIHI </template>
    </TituCoder>
  </div>
</template>

<script>
import TituCoder from "@/components/TituCoder.vue";

export default {
  components: {
    TituCoder,
  },
};
</script>
