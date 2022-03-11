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
          <h2 class="title">
            Daftar Unit Sekolah <br />Yohannes Gabriel Perwakilan I
          </h2>
        </div>
        <!-- Section Title End -->

        <!-- <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30">
          <div
            class="col mt-30"
            v-for="(team, index) in teamData.slice(0, 4)"
            :key="index"
          >
            <TeamMember :team="team" />
          </div>
        </div> -->

        <!-- Carousel Section Start -->
        <div class="testimonial-slider" data-aos="fade-up">
          <swiper :options="swiperOption">
            
            <div
              class="swiper-slide"
              v-for="(testimonial, index) in testimonialData"
              :key="index"
              bac
            >
              <!-- <TestimonialItem :testimonial="testimonial" /> -->
            </div>
          </swiper>
          <div class="swiper-pagination text-center"></div>
        </div>
        <!-- Carousel Section End -->
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

    // TestimonialItem: () => import("@/components/TestimonialItem"),
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
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween: 50,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          1499: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
      testimonialData: [
        {
          id: 1,
          text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
          imgSrc: "/images/testimonial/author-1.png",
          name: "Uzzal Hossain",
          position: "Frontend Developer",
        },
        {
          id: 2,
          text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
          imgSrc: "/images/testimonial/author-2.png",
          name: "Tasnim Akter",
          position: "Marketing Manager",
        },
        {
          id: 3,
          text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
          imgSrc: "/images/testimonial/author-3.png",
          name: "Yeasin Hossain",
          position: "Team Leader",
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


