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
      :header="'Experienced Programming Languages'"
      :icon="'pencil'"
      :data="programmingLanguage"
      :size="11" >
    </content-box>
    <content-box
      :header="'Experienced Web Stacks &amp; Tools'"
      :icon="'gavel'"
      :data="tool"
      :noColon="true"
      :size="6" >
    </content-box>
    <content-box
      :header="'Others'"
      :icon="'rocket'"
      :data="other"
      :noColon="true"
      :size="5" >
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
    <content-box
      :isHiddenDesktop="true"
      :header="'Contact Me'" 
      :icon="'phone'"
      :data="contact"
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
    programmingLanguage() {
      return {
        row_1: ['Advance', 'JavaScript, Java, HTML, CSS, C, C++'],
        row_2: ['Intermediate', 'Python, Kotlin, R, PHP'],
      };
    },
    tool() {
      return {
        row_1: ['Vue.js, React'],
        row_2: ['nginx, Apache2, Docker, DigitalOcean, MongoDB'],
      };
    },
    other() {
      return {
        row_1: ['Statistics, Math, Algorithm'],
        row_2: ['Unix CLI, git, Design, Sketch App'],
      };
    },
    activities() {
      return {
        row_1: ['2016 ACM-ICPC Asia Bangkok Regional Contest'],
        row_2: ['2011 Thailand Mathematics Olympiad'],
        row_3: ['E-commerce website Shoebox using React and Django'],
        row_4: ['Internship at INOX (Innovative Extremist) as a Front-End Web Developer'],
        row_5: ['This profile using Vue.js'],
      };
    },
    interests() {
      return {
        row_1: ['Full-Stack Web Developer'],
        row_2: ['A.I.'],
        row_3: ['Algorithm'],
        row_4: ['Data Scientist'],
        row_5: ['Android Application Developer'],
      };
    },
    contact() {
      return {
        row_1: ['Phone', this.profile.contact.phone],
        row_2: ['Email', this.profile.contact.email],
        row_3: ['Github', this.profile.contact.github],
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