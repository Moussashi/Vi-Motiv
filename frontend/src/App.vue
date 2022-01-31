<template>
  <div class="content">
      <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <div :key="route.fullPath">
              <component :is="Component" />
            </div>
          </transition>
      </router-view>
  </div>

  <div>
    <transition-group 
      tag="ul" 
      appear
      @before-enter="testList">

        <li v-for="(li, index) in list" :key="li" :data-index="index"> {{ li }} </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    const testList = (el) => {
    gsap.from(el, {duration: 2, x: -100, opacity: 0, delay: el.dataset.index * 0.2, stagger: 0.2, ease: 'elastic'})
  }
  return { testList,
            list: [
              'wolf',
              'cat',
              'dog',
              'dragon'
            ]
  }
  }
}
</script>

<style>
@font-face {
    font-family: Lobster;
    src: url('../public/Lobster-Regular.ttf');
  }

html {
  background-color: black;
  width: 100%;
}


#app {
  font-family: 'Lobster', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  }

  /* Route transition*/
  .fade-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  .fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }

  .fade-leave-active {
    transition: all 0.3s ease-in;
  }
</style>