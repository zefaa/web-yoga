<template>
  <div class="main-container">
    <OffCanvasMobileMenu />

    <SearchPopup />

    <BreadcrumbOne
      :items="items"
      title="UNIT YAYASAN YOHANNES GABRIEL PERWAKILAN 1"
      backgroundUrl="/images/bg/unitbg.png"
    />

    <Unit/>
  </div>
</template>

<script>

export default {
  components: {
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    SearchPopup: () => import("@/components/SearchPopup"),
    BreadcrumbOne: () => import("@/components/BreadcrumbOne"),
    Unit: () => import("@/components/Unit"),
    // TestimonialItem: () => import("@/components/TestimonialItem"),
  },

  data() {
    return {
     
      items: [
        {
          text: "Beranda",
          to: "/",
        },
        {
          text: "Unit",
          active: true,
        },
      ],
     
      
    };
  },

  head() {
    return {
      title: "Unit",
    };
  },
};
</script>


