<template>
    <div class="team">
        <div class="thumb">
            <img :src="team.imgSrc" :alt="team.name">
            <!-- <div class="overlay"></div> -->
        </div>
        <div class="team-info text-center">
            <div class="info">
                <h5>{{ team.name }}</h5>
                <span>{{ team.position }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['team']
    };
</script>