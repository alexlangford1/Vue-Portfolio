<template>
  <div id="app">
    <HelloWorld v-on:scroll.native="handleScroll" v-scroll="scroll" />
    <Nav
      :isActive="isActive"
      :isHome="isHome"
      :isProject="isProject"
      :isSkills="isSkills"
      :isAbout="isAbout"
      :isContact="isContact"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/Home.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Nav
  },
  data() {
    return {
      isActive: false,
      isHome: true,
      isProject: false,
      isSkills: false,
      isAbout: false,
      isContact: false
    };
  },
  methods: {
    scroll(e, position) {
      console.log(position);
      if (position.scrollTop < 722) {
        (this.isHome = true), (this.isProject = false);
      }
      if (position.scrollTop > 722 && position.scrollTop < 1865) {
        (this.isHome = false), (this.isProject = true), (this.isSkills = false);
      }

      if (position.scrollTop > 1866 && position.scrollTop < 2865) {
        (this.isProject = false), (this.isSkills = true);
      }

      if (position.scrollTop > 722 && position.scrollTop < 1865) {
        (this.isHome = false), (this.isProject = true);
      }

      if (position.scrollTop > 722 && position.scrollTop < 1865) {
        (this.isHome = false), (this.isProject = true);
      }
    }
  }
};
</script>


