<template>
  <div class="columns is-multiline content-app">
    <content-box
      :header="'About Me'"
      :icon="'user'"
      :data="about"
      :size="12">
    </content-box>
    <content-box
      :header="'Education'"
      :icon="'graduation-cap'"
      :data="education"
      :size="12">
    </content-box>
  </div>
</template>

<script>
import ContentBox from './box/ContentBox';

export default {
  components: {
    ContentBox,
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    about() {
      return {
        row_1: ['Birth', this.profile.birthDate],
        row_2: ['Address', this.profile.address],
      };
    },
    education() {
      return {
        row_1: ['Bachelor degree', this.profile.bachelorDegree],
        row_2: ['GPAX', this.profile.gpa],
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