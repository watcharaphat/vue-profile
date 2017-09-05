<template>
  <div class="panel">
      <div class="columns profile-header">
        <div class="column">
          <img :src="profile.img" alt="profile_img" />
          <div class="profile-name has-text-centered">
            <span>{{ profile.name }} {{ profile.lastName }} ({{ profile.nickName }})</span>
          </div>
        </div>
      </div>
      <div v-for="(item, key) in profile.contact" :key="key" class="columns is-mobile">
        <div class="column is-2">
          <span class="icon contact-icon is-medium">
            <i class="fa" :class="{
              'fa-phone': key === 'phone',
              'fa-envelope-o': key === 'email',
              'fa-github': key === 'github'}"></i>
          </span>
        </div>
        <div class="column contact-info">
          {{ item }}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>

<style scoped>

.panel {
  min-height: 110%;
  height: 100vh;
  background-color: #00D1B2;
  color: #FFFFFF;
  padding: 1.25rem;
}

.profile-header {
  width: 70%;
  margin: 5vh auto 0 auto;
}

.profile-name {
  padding-top: 5vh;
  font-size: 1.7em;
  font-weight: 700;
  margin-bottom: 5vh;
}

.contact-info {
  font-size: 1.1em;
  font-weight: 500;
  padding-top: 0px;
  padding-bottom: 0px;
}

.contact-icon {
  position: relative;
  top: -0.8em;
}

</style>
