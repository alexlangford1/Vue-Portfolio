<template>
    <a href="#home">
      <div class="foot">
        <div class="tab">
          <i class="fas fa-chevron-up"></i>
        </div>
      </div>
    </a>
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
  z-index: 100;
}

.tab {
  width: 100px;
  height: 36px;
  background-color: black;
  border-top-right-radius: 75px;
  border-top-left-radius: 75px;
  position: relative;
  top: -35px;
  left: calc(50vw - 50px);
  background: linear-gradient(
    180deg,
    rgba(84, 84, 84, 1) 0%,
    rgba(84, 84, 84, 1) 40%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  transition: 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}
</style>