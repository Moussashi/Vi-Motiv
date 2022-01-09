<template>
<the-header></the-header>
  <p>Welcome</p>
  <section id="welcome" class="card">
    <h1>Welcome to Vi Motiv</h1>
    <p>Productivity tips to change your life</p>
  </section>

  <section id="News" class="card">
    <h1>News</h1>
    <p>News on the tech world</p>
  </section>

  <section id="Blog" class="card">
    <h1>Blog</h1>
    <p>Articles to give you the steps and techniques to learn faster</p>
  </section>

  <section id="Forum" class="card">
    <h1>Forum</h1>
    <p>Comunity feed to share your experiences and connect with people</p>
  </section>

  <section id="Profile" class="card">
    <h1>Profile</h1>
    <p>Your home</p>
  </section>
<router-view></router-view>
</template>

<script>
import TheHeader from '../UI/TheHeader.vue'
export default {
  components: { 
    TheHeader 
  },
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  background-color: initial;
}

.card {
  width: 90%;
  padding: 1%;
  background-color: white;
  color: #2c3e50;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  text-align: center;
  margin: auto;
  margin-bottom: 1.1vw;
}
.card:hover {
  animation: cardGrow 0.3s forwards;
}



h1, p {
  margin-left: 10%;
}

@keyframes cardGrow {
  to {
    background: rgba(235, 233, 233, 0.05)
  }
}

</style>
