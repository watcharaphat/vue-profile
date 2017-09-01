<template>
  <div class="hero is-primary panel">
    <div class="columns is-gapless profile-header">
      <div class="column is-full">
        <img :src="image" alt="profile_image" />
        <div class="profile-name has-text-centered">
          {{ name }} {{ lastName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Watcharaphat',
      lastName: 'Manosatiankul',
      image: '../../static/img/coffee_circle.png',
      contact: {
        phone: '093 559 7337',
        email: 'watcharaphat.m@ku.th',
        github: 'github.com/watcharaphat',
      },
    };
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
