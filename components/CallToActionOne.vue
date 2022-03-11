<template>
  <div class="section-padding-t90-b100">
    <div class="container shape-animate">
      <!-- Section Title Start -->
      <div
        class="section-title text-center"
        add-class-name="mb-30"
        data-aos="fade-up"
      >
        <h2 class="title">Visi dan Misi</h2>
        <p class="sub-title" style="font-size: 22px;line-height: 44px;color: black; max-width: 970px; margin-top: 50px">Mewujudkan Pendidikan Katolik Yang Membentuk Pribadi Berintegritas</p>
      </div>

      <!-- Section Title End -->

      <div
        class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
      >
        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info">
            <div class="image-content">
              <div class="image-box">
                <div class="icon">
                  <img src="/images/icon-animation/icon_misi.png" alt="Icon" />
                </div>
              </div>
            </div>
            <div class="info">
              <span class="info-text">
                Menanamkan nilai-nilai Katolik untuk membentuk pribadi yang
                memiliki hati penuh kasih</span
              >
            </div>
          </div>
        </div>

        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info">
            <div class="image-content">
              <div class="image-box">
                <div class="icon">
                  <img src="/images/icon-animation/icon_misi3.png" alt="Icon" />
                </div>
              </div>
            </div>
            <div class="info">
              <!-- <h4 class="title">Give Us A Call</h4> -->
              <span class="info-text">
                Melaksanakan metode pembelajaran yang menghasilkan pribadi yang
                mampu berpikir cerdas</span
              >
            </div>
          </div>
        </div>

        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info">
            <div class="image-content">
              <div class="image-box">
                <div class="icon">
                  <img src="/images/icon-animation/icon_misi2.png" alt="Icon" />
                </div>
              </div>
            </div>
            <div class="info">
              <!-- <h4 class="title">Help Desk</h4> -->
              <span class="info-text">
                <!-- <a href="mailto:demo@example.com">demo@example.com</a>
                                <br>
                                <a href="mailto:demo@example.com">demo@example.com</a> -->
                Membudayakan perilaku yang santun
              </span>
            </div>
          </div>
        </div>
      </div>

      <shape-with-animation
        add-class-name="shape-1"
        data-depth="4"
        img-src="/images/shape-animation/video-shape-1.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SectionTitle: () => import("@/components/SectionTitle"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>

<style scoped>
.image-content {
  /* max-width: 200px; */
  height: 150px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

.image-box {
  width: 150px;
  height: 114px;
}

.image-box img {
  width: 100%;
  height: 100%;
  align-content: center;
  object-fit: cover;
  margin: auto;
}
</style>
