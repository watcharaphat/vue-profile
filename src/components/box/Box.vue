<template>
  <div class="column" :class="{
    'is-1': size === 1,
    'is-2': size === 2,
    'is-3': size === 3,
    'is-4': size === 4,
    'is-5': size === 5,
    'is-6': size === 6,
    'is-7': size === 7,
    'is-8': size === 8,
    'is-9': size === 9,
    'is-10': size === 10,
    'is-11': size === 11,
    'is-12': size === 12
  }">
    <div class="box">
      <div class="header columns is-mobile">
        <div class="column is-1 has-text-centered">
          <span class="header-icon">
            <i class="fa fa-user" aria-hidden="true"></i>
          </span>
        </div>
        <div class="column">
          About me
        </div>
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
};
</script>

<style scoped>

.header {
  font-weight: 800;
  font-size: 1.4em;
}

.header-icon {
  position: relative;
  top: 5px;
}

</style>
