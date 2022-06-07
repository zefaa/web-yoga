<template>
  <div class="main-container">
    <OffCanvasMobileMenu />
    <BreadcrumbOne
      :items="items"
      title="UNIT YAYASAN YOHANNES GABRIEL PERWAKILAN 1"
      backgroundUrl="/images/bg/unit.png"
    />

    <Unit />
  </div>
</template>

<script>
export default {
  components: {
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    BreadcrumbOne: () => import("@/components/BreadcrumbOne"),
    Unit: () => import("@/components/Unit"),
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


