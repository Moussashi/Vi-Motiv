<template>
  <the-header></the-header>

  <section id="mainContent" >
      <div id="title" :class="color">
        <h1 v-if="!showSecondTitle">Reach New Heights in the dark</h1>
        <h1 v-else>Then Bring it to lights for the world</h1>
        <button @click="toggleTitle"> {{ buttonTxt }} </button> <!-- will be fontawesome arrow also will toggle -->
      </div>
  </section>
    <nav>
      <img src="../../../public/News-Image.jpeg" alt="">
      <p>The way to get started is to stop talking and begin doing</p>
      <img src="../../../public/blog-image.jpeg" alt="">
    </nav>

    <transition-group id="phrases" tag="ul">
      <li 
        v-for="ph in phrases"
        :key="ph"
        data-aos="fade-up-right"
        data-aos-duration="1500"
        data-aos-offset="100"
        class="phrases"> 
        
        {{ ph }} 
        
        </li>
    </transition-group>

</template>

<script>
import TheHeader from '../UI/TheHeader.vue'
export default {
  components: {
    TheHeader
  },
  data() {

    const phrases = [
      'This is a first try',
      'For a Locomotiv scroll',
      'You need to work more',
      'to become like your dad',
      'Thats your pursuit to Happyness'
    ]

    return {
      showSecondTitle: false,
      color: '',
      buttonTxt: 'Then...',
      phrases,
    }
  },
  methods: {
    toggleTitle() {
      this.showSecondTitle = !this.showSecondTitle

      if (this.showSecondTitle === true) {
        this.color = 'white'
        this.buttonTxt = ':)' //find a font awesome
      } else if (this.showSecondTitle === false) {
        this.buttonTxt = 'Then...'
        this.color = 'black'
      }
    },
  }
}
</script>

<style scoped>
* {
  outline: white solid 2px
}
#mainContent {
  display: flex;
  justify-content: center;
  border: burlywood 5px solid;
}
#title {
  text-align: center;
  padding: 10%;
  width: 100vw;
}
#title h1 {
  font-size: 5vw;
}
#title button {
  font-family: Lobster;
  padding: 1% 2%;
}
nav {
  margin: auto;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
}

nav p {
  width: 80vw;
  padding: 10%;
}
nav p:hover {
  background-color: white;
  color: black;
  padding: 10%;
}
button {
  border: white solid 2px;
}
.white {
  animation: turnWhite 1.5s forwards;
  color: black;
}
.black {
  animation: turnBlack 2s backwards;
  color: white;
}
#phrases {
  margin-bottom: 10vh;
  width: 90vw;
  margin: auto;
  text-align: center;
}
.phrases {
  height: 15vh;
  list-style: none;
  font-size: 2rem;
  margin: auto;
  padding: 10vh;
}
@keyframes turnWhite {
  to {
    background-color: white;
  }
}
@keyframes turnBlack {
  to {
    background-color: Black;
  }
}
</style>