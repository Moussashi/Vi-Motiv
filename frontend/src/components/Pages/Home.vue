<template>
<the-header></the-header>
  <section id="welcome" class="card" @click="toggleVi()">
    <h1>Welcome to Vi Motiv</h1>
      <p>Productivity tips to change your life</p>
      <p>Start your journey here and reach new heights</p>
      
  </section>

  <section id="News" class="card" @click="toggleNews()">
    <h1>News</h1>
    <transition name="paragraphs">
      <p v-if="newsCard">News on the tech world</p>
    </transition>
  </section>

  <section id="Blog" class="card" @click="toggleBlog()">
    <h1>Blog</h1>
    <transition name="paragraphs">
      <p v-if="blogCard">Articles to give you the steps and techniques to learn faster</p>
    </transition>
  </section>

  <section id="Forum" class="card" @click="toggleForum()">
    <h1>Forum</h1>
    <transition name="paragraphs">
      <p v-if="forumCard">Comunity feed to share your experiences and connect with people</p>
    </transition>
  </section>

  <section id="Profile" class="card" @click="toggleProfile()">
    <h1>Profile</h1>
    <transition name="paragraphs">
      <p v-if="profileCard">Your home</p>
    </transition>
  </section>

<router-view></router-view>
</template>

<script>
import TheHeader from '../UI/TheHeader.vue'
export default {
  components: { 
    TheHeader 
  },
  name: 'HelloWorld',
  data() {
    return {
      newsCard: false,
      blogCard: false,
      forumCard: false,
      profileCard: false,
    }
  },
  methods: {
    toggleVi() {
      this.ViCard = !this.ViCard
    },
    toggleNews() {
      this.newsCard = !this.newsCard
    },
    toggleBlog() {
      this.blogCard = !this.blogCard
    },
    toggleForum() {
      this.forumCard = !this.forumCard
    },
    toggleProfile() {
      this.profileCard = !this.profileCard
    }
  }
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
.paragraphs-enter-active {
  animation: paraEnter 1s forwards;
}
.paragraphs-leave-active {
  animation: paraLeave 1s forwards;
}
@keyframes cardGrow {
  to {
    background: rgba(235, 233, 233, 0.05)
  }
}

@keyframes paraEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes paraLeave {
  from {
    transform: scaleX(-30px);
    opacity: 0;
  }
  to {
    transform: scaleX(0);
    opacity: 1;
  }
}

</style>
