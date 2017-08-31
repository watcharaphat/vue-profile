<template>
  <div class="panel box hero is-fullheight is-primary">
    <div class="profile-avatar has-text-centered">
      <img :src="image">
      <div class="profile-name">
        <span>{{ name }} {{ lastName }}</span>
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
    };
  },
};
</script>

<style scoped>

.profile-avatar {
  width: 70%;
  margin: 5vh auto 0 auto;
}

.profile-name {
  padding-top: 5vh;
  font-size: 1.7em;
  font-weight: 700;
}

</style>
