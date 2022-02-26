<template>
  <div class="main-container">
    <OffCanvasMobileMenu />

    <SearchPopup />

    <BreadcrumbOne
      :items="items"
      title="Unit"
      backgroundUrl="/images/bg/breadcrumb-bg-four.jpg"
    />

    <!-- Unit Section Start -->
    <div class="section-padding" data-bg-color="#f8faff">
      <div class="container">
        <!-- Section Title Start -->
        <div class="section-title text-center mb-60" data-aos="fade-up">
          <h2 class="title">People behind the screen</h2>
          <p class="sub-title">
            Get your company heading in the right direction with our digital
            marketing strategist
          </p>
        </div>
        <!-- Section Title End -->

        <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30">
          <div
            class="col mt-30"
            v-for="(team, index) in teamData.slice(0, 4)"
            :key="index"
          >
            <TeamMember :team="team" />
          </div>
        </div>
      </div>
    </div>
    <!-- Unit Section End -->
  </div>
</template>

<script>
import blogData from "~/data/blog.json";
import teamData from "~/data/team.json";

export default {
  components: {
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    SearchPopup: () => import("@/components/SearchPopup"),
    BreadcrumbOne: () => import("@/components/BreadcrumbOne"),
    BlogSidebar: () => import("@/components/BlogSidebar"),
    CallToActionTwo: () => import("@/components/CallToActionTwo"),
    TeamMember: () => import("@/components/TeamMember"),
  },

  data() {
    return {
      blogData,
      teamData,
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


