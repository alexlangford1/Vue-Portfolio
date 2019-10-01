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
</style>>

