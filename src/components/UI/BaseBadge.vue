<template>
  <span class="badge" :class="type">
    {{ fieldCHN }}
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps(['type', 'field']);
const type = ref(props.type as string);
const field = ref(props.field as string);

const fieldCHN = computed(() => {
  let x = '';
  switch (field.value.toLowerCase()) {
    case 'single':
      x = '单打';
      break;
    case 'double':
      x = '双打';
      break;
    case 'beginner':
      x = '初级';
      break;
    case 'intermediate':
      x = '中级';
      break;
    case 'advanced':
      x = '高级';
      break;
    default:
      x = 'err';
  }
  return x;
});
</script>

<style scoped>
.badge {
  padding: 0.4rem 1rem;
  font-size: 1.4rem;
  color: #252525;
  font-weight: bold;
  background-color: #ccc;
  border-radius: 100rem;
  display: inline-block;
  margin-right: 0.5rem;
}
.single {
  background-color: #3d008d;
  color: white;
}
.double {
  background-color: #71008d;
  color: white;
}

.beginner {
  background-color: #8d006e;
  color: white;
}

.intermediate {
  background-color: #8d0000;
  color: white;
}

.advanced {
  background-color: #babd00;
  color: white;
}
</style>
