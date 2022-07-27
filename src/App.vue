<template>
  <div>
    <base-card mode="shadow">
      <div class="bg-indigo-400 h-8 rounded-lg"></div>
    </base-card>
    <base-badge field="frontend" type="frontend"></base-badge>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

:root {
  --purple-1: hsl(250, 78%, 75%);
  --purple-2: hsl(250, 26%, 50%);
  --purple-3: hsl(250, 27%, 33%);
  --purple-4: hsl(249, 26%, 21%);
  --pink-1: #fd98d0;
  --pink-2: #ece1fc;
  --gray-1: #41463d;
  --gray-2: #6b6b6b;
  --white-1: #fff;
  --white-2: #f4f9f9;

  --font-primary: 'Noto Sans', sans-serif;
  --font-display: 'Fugaz One', cursive;

  --max-width: 144rem;
}
</style>
