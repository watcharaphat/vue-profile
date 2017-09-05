<template>
  <box :size="size" :icon="'user'">
    <span slot="header">
      {{ header }}
    </span>
    <div slot="content">
      <div>
        <span class="content-title">Birth: </span>
        {{ profile.birthDate }} ({{ profile.age }} yrs.)
      </div>
      <div class="sub-content">
        <span class="content-title">Address: </span>
        {{ profile.address }}
      </div>
    </div>
  </box>
</template>

<script>
import Box from '../Box';

export default {
  props: {
    size: {
      default: 4,
      type: Number,
    },
  },
  components: {
    Box,
  },
  data() {
    return {
      header: 'About Me',
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>

<style>

.content-title {
  font-weight: 500;
}

.sub-content {
  margin-top: 5px;
}

</style>