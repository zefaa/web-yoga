<template>
  <div class="section-padding" data-bg-color="#f8faff">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center mb-60" data-aos="fade-up">
        <h2 class="title">Siswa-Siswi Berprestasi</h2>
        <p class="sub-title">
          Raih prestasimu bersama Yayasan Yohannes Gabriel
        </p>
      </div>
      <!-- Section Title End -->

      <div class="testimonial-slider" data-aos="fade-up">
        <swiper :options="swiperOption">
          <div
            class="swiper-slide"
            v-for="(team, index) in teamData"
            :key="index"
          >
            <TeamMember :team="team" />
          </div>
        </swiper>
        <div class="swiper-pagination text-center"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    TeamMember: () => import("@/components/TeamMember"),
  },

  data() {
    return {
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

      teamData: [
        {
          id: 1,
          imgSrc: "/images/team/team-1.png",
          name: "Hideki Hartanto",
          position: "Siswa SDK Karitas III",
        },
        {
          id: 2,
          imgSrc: "/images/team/team-2.png",
          name: "Honorata De verceli Vidya Charista",
          position: "Siswi SMAK Karitas III",
        },
        {
          id: 3,
          imgSrc: "/images/team/team-3.png",
          name: "Valerie Quincy V. Nathanael",
          position: "Siswi SMPK Karitas III",
        },
      ],
    };
  },
};
</script>