<template>
  <box :size="size" :icon="'user'">
    <span slot="header">
      {{ header }}
    </span>
    <div slot="content">
      <div v-for="(item, key) in about" :key="key" class="sub-content">
        <span class="content-title">{{ key }}: </span>
        {{ item }}
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
    about() {
      return {
        Birth: this.$store.state.profile.birthDate,
        Address: this.$store.state.profile.address,
      };
    },
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