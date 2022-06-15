<template>
  <div class="static-testimonial mb-30">
    <div class="thumb">
      <div class="testimonial-image">
        <img :src="testimonial.imgSrc" :alt="testimonial.name" />
        <div class="overlay"></div>
      </div>
    </div>
    <!-- <ul class="author-info text-center">
                <li v-for="(item, index) in testimonial" :key="index">
                    <a :href="social.url" class="link"> 
                         <i :class="social.iconName"></i> 
                    </a>
                </li>
            </ul> -->
    <div class="author-info">
      <div class="cite">
        <h6 class="name">{{ testimonial.name }}</h6>
        <span class="position">{{ testimonial.position }}</span>
        <span class="text">{{testimonial.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["testimonial"],
};
</script>