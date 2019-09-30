<template>
  <section>
    <div class="tab"></div>
    <div class="foot"></div>
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.foot {
  width: 100vw;
  height: 10vh;
  background-color: #181818;
  background: linear-gradient(
    180deg,
    rgba(84, 84, 84, 1) 0%,
    rgba(24, 24, 24, 1) 100%
  );
  z-index: 10;
}

.tab {
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 50%;
  position: relative;
  top: -35px;
  left: calc(50vw - 50px);
  z-index: 1;
}
</style>