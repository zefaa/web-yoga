<template>
  <div class="main-container">
    <OffCanvasMobileMenu />
    <div class="intro-slider">
      <swiper :options="swiperOptions">
        <swiper-slide
          class="swiper-slide"
          v-for="(banner, index) in sliderData"
          :key="index"
        >
          <div
            class="intro-section overlay bg-cover"
            :style="{ backgroundImage: `url(${banner.bgImgSrc})` }"
          >
            <div class="container">
              <div class="row row-cols-lg-1 row-cols-1">
                <div class="col align-self-center">
                  <div class="intro-content m-auto text-center">
                    <h2 class="title">{{ banner.heading }}</h2>
                    <div class="desc">
                      <p>{{ banner.text }}</p>
                    </div>
                    <n-link to="/" class="btn btn-primary btn-hover-secondary"
                      >Lebih Lanjut</n-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- pagination class -->
      <div class="home-slider-prev swiper-button-prev main-slider-nav">
        <i class="fal fa-angle-left"></i>
      </div>
      <div class="home-slider-next swiper-button-next main-slider-nav">
        <i class="fal fa-angle-right"></i>
      </div>
    </div>

    <div class="section-padding-t90 section-padding-bottom-200">
      <div class="container">
        <!-- Section Title Start -->
        <div class="section-title text-center" data-aos="fade-up">
          <h2 class="title">Lorem Ipsum</h2>
          <!-- <p class="sub-title">Our team of designers, developers and creatives are perfectionists who love what they do and love</p> -->
        </div>

        <!-- Section Title End -->

        <!-- About Wrapper Start -->
        <div class="row mt-4">
          <!-- About Image Area Start -->
          <div class="col-xl-6 col-lg-6" data-aos="fade-up">
            <div class="about-image-area">
              <!-- <div class="about-image js-tilt">
                            <img src="/images/about/agency_about_1.jpg" alt="images">
                        </div> -->
              <div class="about-image js-tilt">
                <img src="/images/hero-image/teacher3.png" alt="images" />
              </div>

              <!-- Animation Shape Start -->
              <ShapeWithAnimation
                addClassName="shape-1"
                dataDepth="1"
                imgSrc="/images/shape-animation/about-shape-1.png"
              />
              <!-- Animation Shape End -->
            </div>
          </div>
          <!-- About Image Area Start -->

          <!-- About Start -->
          <div class="col-xl-5 col-lg-6" data-aos="fade-up">
            <div class="about-content-area about-one">
              <!-- Section Title Two Start -->
              <div class="section-title-two">
                <!-- <span class="sub-title">Every day brings new challenges</span> -->
                <h3 class="title">Lorem ipsum</h3>
              </div>
              <!-- Section Title Two End -->

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <n-link
                to="/about"
                class="btn btn-primary btn-hover-secondary mt-4"
                >Tentang Kami</n-link
              >
            </div>
          </div>
          <!-- About Start -->
        </div>
        <!-- About Wrapper End -->
      </div>
    </div>

    <div
      class="section-padding-t90 section-padding-bottom"
      :style="{ backgroundColor: '#1c62b1' }"
    >
      <div class="container">
        <!-- Section Title Start -->
        <div class="section-title text-center" data-aos="fade-up">
          <h2 class="title-light fz-32">Lorem Ipsum</h2>
        </div>
        <!-- Section Title End -->
        <div class="row">
          <div class="col-lg-12 mx-auto">
            <div
              class="
                row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1
                mtn-30
              "
            >
              <!-- Funfact Start -->
              <div class="col mt-30" data-aos="fade-up">
                <div class="funfact">
                  <div class="number"><span class="counter">96</span>+</div>
                  <h6 class="text">Tahun Pengalaman</h6>
                </div>
              </div>
              <!-- Funfact End -->

              <!-- Funfact Start -->
              <div class="col mt-30" data-aos="fade-up">
                <div class="funfact">
                  <div class="number"><span class="counter">26</span></div>
                  <h6 class="text">Sekolah</h6>
                </div>
              </div>
              <div class="col mt-30" data-aos="fade-up">
                <div class="funfact">
                  <div class="number"><span class="counter">200</span>+</div>
                  <h6 class="text">Guru</h6>
                </div>
              </div>
              <!-- Funfact End -->

              <!-- Funfact Start -->
              <div class="col mt-30" data-aos="fade-up">
                <div class="funfact">
                  <div class="number"><span class="counter">1000</span>+</div>
                  <h6 class="text">Siswa</h6>
                </div>
              </div>
              <!-- Funfact End -->

              <!-- Funfact Start -->

              <!-- Funfact End -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-padding-t90-b100">
      <div class="container">
        <!-- Section Title Start -->
        <SectionTitle
          title="Lorem ipsum"
          sub-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <!-- Section Title End -->

        <div
          class="
            row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1
            mtn-60
          "
        >
          <div
            class="col mt-30"
            v-for="(blog, index) in blogData.slice(0, 3)"
            :key="index"
          >
            <BlogGridItem :blog="blog" />
          </div>
        </div>
      </div>
    </div>

    <!-- <BrandLogoCarousel /> -->

    <div class="section-padding" :style="{ backgroundColor: '#e9e9e9' }">
      <div class="container">
        <SectionTitle
          title="Lorem ipsum"
          sub-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div class="skill-with-video-content">
          <!-- Section Title Two Start -->

          <!-- Section Title Two End -->

          <!-- Agency List Start -->
          <ul class="agency-list">
            <li class="item">
              <div class="icon">
                <i class="fas fa-calendar"></i>
              </div>
              <div class="text">Januari 2022 : Pembelajaran Tatap Muka</div>
            </li>
            <li class="item">
              <div class="icon">
                <i class="fas fa-calendar"></i>
              </div>
              <div class="text">Januari 2022 : Pembelajaran Tatap Muka</div>
            </li>
            <li class="item">
              <div class="icon">
                <i class="fas fa-calendar"></i>
              </div>
              <div class="text">Januari 2022 : Pembelajaran Tatap Muka</div>
            </li>
            <li class="item">
              <div class="icon">
                <i class="fas fa-calendar"></i>
              </div>
              <div class="text">Januari 2022 : Pembelajaran Tatap Muka</div>
            </li>
          </ul>

          <!-- Agency List End -->
        </div>
      </div>
    </div>

    <div class="section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="offset-xl-1 col-xl-6 col-lg-6 col-12">
            <div class="video-popup-area">
              <div class="skill-video">
                <client-only>
                  <img class="image" src="/images/team/staff.png" alt="image" />
                </client-only>
              </div>

              <!-- Animation Shape Start -->
              <ShapeWithAnimation
                addClassName="shape-1"
                data-depth="1"
                imgSrc="/images/shape-animation/video-shape-1.png"
              />
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
            <div class="skill-with-video-content">
              <!-- Section Title Two Start -->
              <div class="section-title-two">
                <h3 class="title">Lorem ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <!-- Section Title Two End -->

            
              <n-link
                to="/registration/employee"
                class="btn btn-primary btn-hover-secondary"
              >
                DAFTAR DISINI
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogData from "~/data/blog.json";

export default {
  data() {
    return {
      swiperOptions: {
        speed: 1000,
        loop: true,
        autoplay: false,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      videos: [
        {
          src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
        },
      ],
      blogData,
      sliderData: [
        {
          id: 1,
          heading: "Pendidikan Katolik ",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          bgImgSrc: "/images/hero-image/teacher1.png",
        },
        {
          id: 2,
          heading: "Pendidikan Katolik",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          bgImgSrc: "/images/hero-image/teacher2.png",
        },
      ],
    };
  },
  components: {
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    BlogGridItem: () => import("@/components/BlogGridItem"),
    SectionTitle: () => import("@/components/SectionTitle"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
    // BrandLogoCarousel: () => import("@/components/BrandLogoCarousel"),
  },
};
</script>

