<template>
  <Checkbox />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Checkbox } from 'ant-design-vue';

  export default defineComponent({
    name: 'Login',
    components: {
      Checkbox,
    },
    setup() {
      alert(10);
    },
  });
</script>

<style scoped></style>
