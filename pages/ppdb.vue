<template>
  <div class="main-container">
    <OffCanvasMobileMenu />

   

    <BreadcrumbOne
      :items="items"
      title="POSTER PPDB UNIT SEKOLAH
YAYASAN YOHANNES GABRIEL PERWAKILAN I"
      backgroundUrl="/images/bg/ppdbg.png"
    />

    <PortfolioGallery/>
  </div>
</template>

<script>
export default {
  components: {
    PortfolioGallery: () => import("@/components/PortfolioGallery"),
  },
};
</script>

