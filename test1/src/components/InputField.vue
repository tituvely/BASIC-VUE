<template>
  <div>
    <label for="">Name</label>
    <input
      type="text"
      :value="value"
      style="margin: 15px; padding: 30px; border: 2px solid green"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
