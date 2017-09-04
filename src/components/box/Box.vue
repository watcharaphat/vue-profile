<template>
  <div :class="['column', sizeClass]">
    <div class="box">
      <div class="header">
        <span class="header-icon">
          <i class="fa fa-user" aria-hidden="true"></i>
        </span>
        <span>About Me</span>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: 4,
      type: Number,
    },
  },
  computed: {
    sizeClass() {
      return `is-${this.size}`;
    },
  },
};
</script>

<style scoped>

.header {
  font-weight: 800;
  font-size: 1.4em;
  margin-bottom: 0.4em;
}

.header-icon {
  position: relative;
  top: 4px;
  padding-right: 0.3em;
}

</style>
