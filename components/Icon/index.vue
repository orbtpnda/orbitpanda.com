<template>
  <span>
    <Icon :icon="icon" />
  </span>
</template>

<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  icon: {
    type: String,
    default: "heroicons-outline:home",
  },
});
</script>
<style lang=""></style>
