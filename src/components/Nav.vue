<template>
  <div :class="{ homeboi: isHome }" class="nav">
    <ul class="y">
      <a href="#home" :class="{ active: isActive }">HOME</a>
      <a href="#projects" :class="{ active: isProject }">PROJECTS</a>
      <a href="#skills" :class="{ active: isSkills }">SKILLS</a>
      <a href="#about" :class="{ active: isAbout }">ABOUT</a>
      <a href="#contact" :class="{ active: isContact }">CONTACT</a>
    </ul>
  </div>
</template>





<script>
export default {
  name: "Nav",
  props: ["isActive", "isHome", "isProject", "isSkills", "isAbout", "isContact"]
};
</script>









<style lang="scss" scoped>
.nav {
  position: fixed;
  left: 0;
  height: 100vh;
  width: 6vw;
  background-color: #161616c4;
  transition: 0.6s ease;

  ul {
    display: flex;
    flex-direction: row;
    padding-left: 100px;
    transform: rotate(90deg);
    a {
      padding: 18px 20px;
      text-decoration: none;
      list-style-type: none;
      transition: 0.3s ease;
      &:hover {
        color: #b12704;
        transform: rotate(-90deg);
      }
    }
  }

  .active {
    color: #d42e04;
    transition-delay: 0.5s;
    transform: rotate(-90deg);
  }
}
.homeboi {
  left: -10vw;
}

@media (max-width: 450px) {
  .nav {
    position: fixed;
    top: 0;
    max-height: 10vh;
    height: 10vh;
    width: 100vw;
    background-color: #161616;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
      transform: rotate(0deg);
      padding-left: 0px;

      a {
        padding: 0px;
        &:hover {
          color: #b12704;
          transition: none !important;
          transform: none !important;
          border-bottom: 1px solid #b12704;
        }
      }
    }
  }
  .active {
    transform: rotate(0deg);
    border-bottom: 1px solid #b12704;
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
    transform: none !important;
  }

  .homeboi {
    top: -10vh;
    left: 0vw;
  }
}
</style>>

