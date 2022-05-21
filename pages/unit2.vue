<template>
 <div class="main-container">
  <SuccessStory/>
  <PortfolioGalleryTwo/>
  <Newsletter/>
  <FunfactWithTitle/>
  <HeroSliderOne/>
  <HeroSliderTwo/>
  <FaqOne/>
  <BlogSectionOne/>
  <CallToActionOne/>
  <CallToActionTwo/>
  <Slider/>
 </div>
</template>

<script>
export default {
  components: {
   SuccessStory: () => import("@/components/SuccessStory"),
   PortfolioGalleryTwo: () => import("@/components/PortfolioGalleryTwo"),
   Newsletter: () => import("@/components/Newsletter"),
   FunfactWithTitle: () => import("@/components/FunfactWithTitle"),
   HeroSliderOne: () => import("@/components/HeroSliderOne"),
   HeroSliderTwo: () => import("@/components/HeroSliderTwo"),
   FaqOne: () => import("@/components/FaqOne"),
   BlogSectionOne: () => import("@/components/BlogSectionOne"),
   CallToActionOne: () => import("@/components/CallToActionOne"),
   CallToActionTwo: () => import("@/components/CallToActionTwo"),
   Slider: () => import ("@/components/Slider"),
  }
}
</script>

