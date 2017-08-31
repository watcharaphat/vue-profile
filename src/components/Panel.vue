<template>
  <div class="panel box">
      <div class="columns profile-header">
        <div class="column">
          <img :src="image" alt="profile_img" />
          <div class="profile-name has-text-centered">
            <span>{{ name }} {{ lastName }}</span>
          </div>
        </div>
      </div>
      <div v-for="(item, key) in contact" :key="key" class="columns is-mobile">
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
  min-height: 100vh;
  background-color: #00D1B2;
  color: #FFFFFF;
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
  top: -0.9em;
}

</style>
