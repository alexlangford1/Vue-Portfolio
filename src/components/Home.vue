

<template>
  <section
    class="home"
    :style="{'background-image': 'url(' + require('../assets/banner.jpg') + ')'}"
  >
    <div class="main-title" id="home">
      <div class="section">
        <h1 class="title">ALEX LANGFORD</h1>
        <h4 class="subtitle">FULL TIME BADASS. PART TIME GOLFER</h4>
        <a class="btn" href="#projects">EXPLORE</a>
      </div>
      <a class="section learn" href="#projects">
        <h5 class="subtitle">LEARN MORE</h5>
        <i class="fas fa-arrow-down"></i>
      </a>
    </div>
    <div class="skills" id="projects">
      <div class="skills-clip">
        <h1 class="title2">PROJECTS</h1>
      </div>
      <div class="big-proj">
        <a href="https://wander-dev.com" class="big-pic">
          <img src="../assets/wand.png" width="100%" alt="Website image" />
        </a>
        <div class="big-desc">
          <h2>WANDER</h2>
          <p>
            A user-friendly vacation planner, designed to let
            users have an easier time organizing and planning
            vacations with custom budgets,
            and per-item expense
            tracking. React | Redux | PosgreSQL | CSS | NodeJS |
            Express | Axios | Massive | Bcrypt
          </p>
        </div>
      </div>
      <div class="small-proj">
        <a href="https://shiftradr.com" class="small1">
          <img src="../assets/SHIFT (2).png" width="110%" alt />
        </a>
        <div class="small2">
          <h2 class="h2">SHIFTRADER</h2>
          <div class="p">
            Web application that allows employees to post and trade liability of workshifts in a streamlined fashion.
            React Hooks | PosgreSQL | NodeJS | Express | Socket.IO | Styled Components | Massive | Bcrypt
            <div class="border"></div>
          </div>
        </div>
      </div>
      <div class="small-proj margin-bottom">
        <div class="small3">
          <h2 class="h4 wow">MORE COMING SOON!</h2>
          <div class="p wow">
            <div class="border"></div>
          </div>
        </div>
        <div class="small1">
          <img src="../assets/mount.jpg" width="100%" alt />
        </div>
      </div>
      <div id="skills" class="skills-clip x">
        <h2 class="title2 x">SKILLS</h2>
      </div>
    </div>
    <div class="real-skills">
      <Skills />
    </div>
    <div class="about" id='about'>
      <div class="about-title">
        
      </div>

    </div>
    <Footer/>
  </section>
</template>

<script>
const img = require("../assets/banner.jpg");
import Skills from "./Skills";
import Footer from "./Footer"

export default {
  name: "HelloWorld",
  components: {
    Skills,
    Footer
  }
};
</script>

