<template>
    <header>
        <div id="logo">
            <img src="../../../public/Vi-Motiv.png" alt="Logo Vi Motiv">
        </div>
        <ul>
            <router-link to="/ViMotiv/news" class="list"> News</router-link>
            <router-link to="/ViMotiv/blog" class="list"> Blog </router-link>
            <router-link to="/ViMotiv/forum" class="list"> Forum </router-link>
            <router-link to="/ViMotiv/profile" class="list"> Profile </router-link>
        </ul>
    </header>
</template>

<style scoped>
header {
    display: flex;
}
#logo {
    width: 50%;
    align-items: center;
}
img {
    width: 60%;
    margin-right: 20%;
}
ul {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
}
.list {
    color: darkblue;
    font-size: 2vw;
}
.list:hover {
    padding: 1%;
    animation: liAnim 0.5s forwards;
}

@keyframes liAnim {
    from {
        background-color: none;
    }
    to {
        padding: 2%;
        background-color: #b8c6db;
    }
}
</style>