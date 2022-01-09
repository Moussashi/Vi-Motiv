import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Pages/Home.vue'
import News from './components/Pages/News.vue'
import Blog from './components/Pages/Blog.vue'
import Forum from './components/Pages/Forum.vue'
import Profile from './components/Pages/Profile.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/ViMotiv/home'},
        {path: '/ViMotiv/home', component: Home},
        {path: '/ViMotiv/news', component: News},
        {path: '/ViMotiv/blog', component: Blog}, //will have a child
        {path: '/ViMotiv/forum', component: Forum},
        {path: '/ViMotiv/profile', component: Profile},
        {path: '/ViMotiv/contact', component: undefined},
        {path: '/ViMotiv/github', component: undefined},
    ]
})

export default router