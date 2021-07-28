<template>
  <div>
    <p>header</p>
    <slot name="header" :coder="name"></slot>
    <p>body</p>
    <slot></slot>
    <p>footer</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "TITU CODER",
    };
  },
};
</script>
