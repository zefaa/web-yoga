<template>
  <div class="main-container">
    <OffCanvasMobileMenu />

    <SearchPopup />

    <BreadcrumbOne
      :items="items"
      title="MEWUJUDKAN PENDIDIKAN KATOLIK
YANG MEMBENTUK PRIBADI BERINTEGRITAS"
      backgroundUrl="/images/bg/breadcrumb-bg.jpg"
    />

    <AboutTwo class="section-padding-top about-section-padding-bottom-200" />

    <CallToActionVideo />

    <AboutFour />

    <!-- <TestimonialSectionOne :style="{backgroundColor: '#f8faff'}" /> -->

    <CallToActionThree />
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("@/components/TheHeader"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    SearchPopup: () => import("@/components/SearchPopup"),
    BreadcrumbOne: () => import("@/components/BreadcrumbOne"),
    AboutTwo: () => import("@/components/AboutTwo"),
    CallToActionVideo: () => import("@/components/CallToActionVideo"),
    AboutFour: () => import("@/components/AboutFour"),
    TestimonialSectionOne: () => import("@/components/TestimonialSectionOne"),
    CallToActionThree: () => import("@/components/CallToActionThree"),
    TheFooter: () => import("@/components/TheFooter"),
  },

  data() {
    return {
      items: [
        {
          text: "Beranda",
          to: "/",
        },
        {
          text: "Tentang Kami",
          active: true,
        },
      ],
    };
  },

  head() {
    return {
      title: "Tentang Kami",
    };
  },
};
</script>


