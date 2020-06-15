<template>
  <div class="navbar-wrap">
    <div class="left-wrap">
      <slot name="navbar-left"></slot>
    </div>
    <div class="center-wrap">
      <slot name="navbar-center"></slot>
    </div>
    <div class="right-wrap">
      <slot name="navbar-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar-wrap {
  display: flex;
  align-items: center;
  line-height: 44px;
  text-align: center;

  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.09);
}
.navbar-wrap .left-wrap,
.navbar-wrap .right-wrap {
  width: 70px;
}
.navbar-wrap .center-wrap {
  flex: 1;
}
</style>