<template>
  <div class="columns is-multiline content-app">
    <content-box :header="'About Me'" :data="about" :size="12"></content-box>
    <content-box :header="'About Me'" :data="about" :size="12"></content-box>
  </div>
</template>

<script>
import AboutMeBox from './box/content/AboutMeBox';
import ContentBox from './box/ContentBox';

export default {
  components: {
    AboutMeBox,
    ContentBox,
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    about() {
      return {
        Birth: this.profile.birthDate,
        Address: this.profile.address,
      };
    },
  },
};
</script>

<style scoped>

.content-app {
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 1.5vh;
}

</style>