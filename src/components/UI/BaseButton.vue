<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: Object,
      required: false,
      default: () => {
        'home';
      },
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.5em 1em;
  font-size: 1.4rem;
  font-family: var(--font-display);
  background-color: var(--purple-2);
  color: var(--white-2);
  border: 0.2rem solid transparent;
  border-radius: 0.8rem;
  display: inline-block;
  transition: all 0.2s ease;
}

button:hover,
button:active,
a:hover,
a:active {
  background-color: var(--purple-3);
  border-color: var(--purple-3);
}

.flat {
  background-color: transparent;
  border-color: transparent;
  color: var(--purple-2);
  text-decoration: none;
}

.flat:hover,
.flat:active {
  background-color: var(--pink-2);
  color: var(--purple-3);
  border-color: transparent;
}

.outline {
  background-color: transparent;
  color: var(--purple-2);
  border-color: currentColor;
}

.outline:hover,
.outline:active {
  background-color: var(--pink-2);
  color: var(--purple-3);
}
</style>
