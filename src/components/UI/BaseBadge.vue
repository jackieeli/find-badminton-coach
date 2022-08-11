<template>
  <span class="badge" :class="type">
    {{ field }}
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps(['type', 'field']);
const type = ref(props.type as string);
const text = ref(props.field as string);

const field = computed(() => {
  return text.value && text.value.toUpperCase();
});
</script>

<style scoped>
.badge {
  padding: 0.5em 1.2em;
  font-size: 1rem;
  color: #252525;
  font-weight: bold;
  background-color: #ccc;
  border-radius: 100rem;
  display: inline-block;
  margin-right: 0.5rem;
}
.frontend {
  background-color: #3d008d;
  color: white;
}
.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>
