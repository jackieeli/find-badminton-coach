<template>
  <div class="row">
    <header>
      <nav>
        <h1>
          <router-link :to="{ name: 'home' }" id="brand-title">
            Coachew
          </router-link>
        </h1>
        <ul>
          <li>
            <base-button link :to="{ name: 'coaches' }">Coaches</base-button>
          </li>
          <li v-if="isLoggedIn">
            <base-button link :to="{ name: 'requests' }">Requests</base-button>
          </li>
          <li v-else>
            <base-button link :to="{ name: 'auth' }">Login</base-button>
          </li>
          <li v-if="isLoggedIn">
            <base-button @click="logout"></base-button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace({ name: 'coaches' });
    },
  },
};
</script>
