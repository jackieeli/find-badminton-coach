<template>
  <span class="badge" :class="type">
    {{ field }}
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps(['type', 'field']);
const type = ref(props.type as string);
const text = props.field as string;

const field = computed(() => text.toUpperCase());
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 100rem;
  padding: 0.5em 1.2em;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
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
