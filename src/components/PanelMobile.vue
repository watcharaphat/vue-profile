<template>
  <div class="hero is-primary panel">
    <div class="columns is-gapless profile-header">
      <div class="column is-full">
        <img :src="profile.img" alt="profile_image" />
        <div class="profile-name has-text-centered">
          {{ profile.name }} {{ profile.lastName }} ({{ profile.nickName }})
        </div>
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
  min-height: 30vh;
}

.profile-header {
  width: 70%;
  margin: 5vh auto 0 auto;
}

.profile-name {
  padding-top: 20px;
  font-size: 1.7em;
  font-weight: 700;
  margin-bottom: 5vh;
}

</style>
