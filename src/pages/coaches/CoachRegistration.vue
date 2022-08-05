<template>
  <section class="row">
    <base-card mode="shadow" color="color">
      <h2>Register as a coach now!</h2>
      <CoachForm @save-data="saveData" />
    </base-card>
  </section>
</template>

<script>
// todo -> add error handling and loading spinner

import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1.6rem;
  color: var(--purple-2);
}

section {
  margin-top: 3.2rem;
}
</style>
