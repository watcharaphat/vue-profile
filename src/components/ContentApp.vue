<template>
  <div class="columns is-multiline content-app">
    <content-box
      :header="'About Me'"
      :icon="'user'"
      :data="about"
      :size="4" >
    </content-box>
    <content-box
      :header="'Education'"
      :icon="'graduation-cap'"
      :data="education"
      :size="7" >
    </content-box>
    <content-box
      :header="'Skills'"
      :icon="'pencil'"
      :data="skills"
      :size="11" >
    </content-box>
    <content-box
      :header="'Previous Activities'"
      :icon="'clock-o'"
      :data="activities"
      :noColon="true"
      :size="11" >
    </content-box>
    <content-box
      :header="'Interest in'"
      :icon="'star'"
      :data="interests"
      :noColon="true"
      :size="11" >
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
    skills() {
      return {
        row_1: ['Java', 'High'],
        row_2: ['JavaScript', 'High'],
      };
    },
    activities() {
      return {
        row_1: ['2016 ACM-ICPC Asia Bangkok Regional Contest'],
        row_2: ['2011 Thailand Mathematics Olympiad'],
        row_3: ['E-commerce website Shoebox using React.js and Django'],
        row_4: ['Internship at INOX (Innovative Extremist) as a frontend developer'],
        row_5: ['This profile using Vue.js'],
      };
    },
    interests() {
      return {
        row_1: ['Web Developer (both frontend and backend)'],
        row_2: ['Data Scientist'],
        row_3: ['Android Application Developer'],
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