<template>
<the-header></the-header>
    <h1>
        Awesome News
    </h1>
        <ul>
            <all-articles
                v-for="art in article" 
                :key="art.id"
                :title="art.title"
                :description="art.description"
                :img="art.urlToImage"
                :content="art.content"
                :url="art.url"
                :publishedAt="art.publishedAt"
            ></all-articles>
        </ul>
</template>

<script>
import allArticles from './article.vue'
import TheHeader from '../UI/TheHeader.vue'
export default {
    components: {
        allArticles,
        TheHeader
    },
    data() {
        return {
            article: []
        }
    },
    methods: {
         async getArticle() {

            await fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-12-12&sortBy=publishedAt&apiKey=99a940e7327e4be7bccbdf507eb0df2e')
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                }).then((data) => {
                    const result = []
                    for (const id in data.articles) {
                        result.push({
                            title: data.articles[id].title,
                            description: data.articles[id].description,
                            content: data.articles[id].content,
                            urlToImage: data.articles[id].urlToImage,
                            url: data.articles[id].url,
                            publishedAt: data.articles[id].publishedAt
                        })
                    }

                    console.log(result);

                    for (let i = result.length-1; i >= 0; i--) {
                        this.article.push(result[i])
                    }

                })
        }
    },
    mounted() {
        this.getArticle()
    }
}
</script>
<style scoped>
ul {
    margin: auto;
}
</style>
