<template>
    <div class="blog">
        <div class="thumbnail">
            <n-link to="/news/news-details" class="image">
                <img :src="news.imgSrc" :alt="news.title">
            </n-link>
        </div>
        <div class="info">
            <ul class="meta">
                <li><i class="far fa-user"></i>{{ news.author }}</li>
                <li><i class="far fa-calendar"></i>{{ news.date }}</li>
                
            </ul>
            <h3 class="title">
                <n-link to="/news/news-details">{{ news.title }}</n-link>
            </h3>
            <n-link to="/news/news-details" class="link">
                <mark>Selengkapnya</mark>
            </n-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['news']
    };
</script>