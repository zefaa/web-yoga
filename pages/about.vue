<template>
  <div class="main-container">
    <OffCanvasMobileMenu />

    <BreadcrumbOne
      :items="items"
      title="MEWUJUDKAN PENDIDIKAN KATOLIK
YANG MEMBENTUK PRIBADI BERINTEGRITAS"
      backgroundUrl="/images/bg/tentang.png"
    />

    <div class="section-padding-top about-section-padding-bottom-80">
      <div class="container">
        <div class="row">
          <!-- About Image Area Start -->
          <div
            class="col-lg-6"
            data-aos="fade-up"
            style="padding-bottom: 200px"
          >
            <div
              class="
                about-image-area about-two about-shape-animation
                right-0
                mr-0
              "
            >
              <div class="about-image js-tilt">
                <img src="/images/about/about-1.jpg" alt="image" />
              </div>
              <div class="about-image js-tilt">
                <img src="/images/about/about-2.jpg" alt="image" />
              </div>
              <!-- Animation Shape Start -->
              <ShapeWithAnimation
                addClassName="shape-1"
                data-depth="1"
                imgSrc="/images/shape-animation/video-shape-1.png"
              />
            </div>
          </div>
          <!-- About Image Area Start -->

          <!-- About Coontent Start -->
          <div class="col-lg-6" data-aos="fade-up">
            <div class="about-content-area">
              <!-- Section Title Two Start -->
              <div class="section-title-two">
                <h4
                  class="title"
                  style="text-align: center; margin-bottom: 20px"
                >
                  Selamat bergabung di website resmi kami, Yayasan Yohannes
                  Gabriel Perwakilan 1.
                </h4>
                <p style="text-align: justify">
                  Yayasan Yohannes Gabriel Perwakilan 1 Surabaya adalah yayasan
                  pendidikan yang mengelola sekolah-sekolah Katolik di Keuskupan
                  Surabaya. Sejak berdiri tahun 1925, yayasan ini ada dan terus
                  memberikan yang terbaik untuk mencerdaskan kehidupan bangsa.
                  Kami terus mengembangkan diri sesuai dengan gerak jaman agar
                  dapat mendidik generasi penerus dan masa depan gereja dan
                  masyarakat. Nilai-nilai Katolik dan kebangsaan menjadi pedoman
                  utama dalam membina para siswa di sekolah-sekolah kami ini.
                  Melalui media website berserta seluruh jejaring sosial
                  yayasan, kami juga berharap agar sekolah-sekolah kami makin
                  dikenal sebagai sekolah Katolik milik Keuskupan Surabaya yang
                  dapat diandalkan. Terlebih juga agar para wali murid makin
                  percaya dengan sekolah-sekolah kami dalam mendidik dan membina
                  anak-anak. Silahkan menghubungi kami untuk segala informasi
                  yang dibutuhkan.”
                </p>
                <!-- <span class="sub-title">Web design and digital marketing</span>
                <h3 class="title">
                  We think strategy, UX design, <br />
                  and web development
                </h3> -->
              </div>
              <!-- Section Title Two End -->
            </div>
          </div>
          <!-- About Coontent Start -->
        </div>
      </div>
    </div>

    <div
      class="video-section section-padding"
      :style="{ backgroundImage: `url('/images/bg/tentang-vid.png')` }"
    >
      <div class="container text-center">
        <!-- Section Title Start -->
        <div class="section-title color-light text-center" data-aos="fade-up">
          <h2 class="title">Bersama Mewujudkan Pribadi Yang Beritegritas</h2>
        </div>
        <!-- Section Title End -->
        <client-only>
          <silent-box :image="videos[0]">
            <template v-slot:silentbox-item>
              <div class="play-btn icon video-popup">
                <i class="fas fa-play"></i>
              </div>
            </template>
          </silent-box>
        </client-only>
      </div>

      <!-- Animation Shape Start -->
      <ShapeWithAnimation
        addClassName="shape-1"
        data-depth="1"
        imgSrc="/images/shape-animation/newsletter-shape.png"
      />
      <!-- Animation Shape End -->
    </div>
    <CallToActionOne />
    <div class="line"><hr /></div>

    <div class="cta-section section-padding-250">
      <div class="container text-center icon-up-down-animation">
        <!-- Section Title Start -->
        <div class="section-title text-center" data-aos="fade-up">
          <h2 class="title fz-42">7 Budaya Yayasan</h2>
          <!-- <p class="sub-title">Our team of designers, developers and creatives are perfectionists who love what they do and love where they work</p> -->
        </div>
        <!-- Section Title End -->
        <!-- <n-link to="/contact-us" class="btn btn-primary btn-hover-secondary">Contact Us</n-link> -->

        <div
          class="
            row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1
            mtn-30
          "
        >
          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <!-- <h4 class="title">Help Desk</h4> -->
                    <span
                      class="info-text"
                      style="
                        font-size: 22px;

                        margin-bottom: 20px;
                      "
                    >
                      MERDEKA MEMILIH DAN TANGGUNG JAWAB
                    </span>
                  </div>
                </div>
              </div>

              <div class="info">
                <p style="margin-top: 20px">
                  Setiap manusia diciptakan Allah dengan memiliki kebebasan.
                  Merdeka memilih mengerjakan hal - hal yang baik dan benar
                  sebagai bagian dalam karya Tuhan.
                </p>
              </div>
            </div>
          </div>

          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <!-- <h4 class="title">Help Desk</h4> -->
                    <span
                      class="info-text"
                      style="
                        font-size: 22px;
                        font-weight: bold;
                        margin-bottom: 20px;
                      "
                    >
                      KERJASAMA - KOMUNIKATIF TERBUKA
                    </span>
                  </div>
                </div>
              </div>

              <div class="info">
                <p style="margin-top: 20px">
                  Bekerja sama karena memiliki tujuan yang sama. Sebagai
                  manusia, segala sesuatu bisa dibicarakan. Terbuka terhadap
                  ide-ide yang segar dan baru ini memudahkan kita untuk bekerja
                  dengan lebih baik.
                </p>
              </div>
            </div>
          </div>

          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <!-- <h4 class="title">Help Desk</h4> -->
                    <span
                      class="info-text"
                      style="
                        font-size: 22px;
                        font-weight: bold;
                        margin-bottom: 20px;
                      "
                    >
                      PEMBELAJAR YANG TANGGUH
                    </span>
                  </div>
                </div>
              </div>

              <div class="info">
                <p style="margin-top: 20px">
                  Tidak mudah mengeluh jika mengalami kesulitan dalam belajar
                  hal baru untuk mengembangkan pribadi ataupun organisasi.
                </p>
              </div>
            </div>
          </div>
          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <!-- <h4 class="title">Give Us A Call</h4> -->
                    <span
                      class="info-text"
                      style="
                        font-size: 22px;

                        margin-bottom: 20px;
                      "
                    >
                      DISIPLIN DAN JUJUR
                    </span>
                  </div>
                </div>
              </div>
              <div class="info">
                <p style="margin-top: 20px">
                  Disiplin berarti sikap dan perasaan taat dan patuh terhadap
                  nilai-nilai yang dipercaya menjadi tanggung jawabnya.
                </p>
              </div>
            </div>
          </div>

          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <!-- <h4 class="title">Help Desk</h4> -->
                    <span
                      class="info-text"
                      style="
                        font-size: 22px;

                        margin-bottom: 20px;
                      "
                    >
                      CERMAT
                    </span>
                  </div>
                </div>
              </div>
              <div class="info">
                <p style="margin-top: 20px">
                  Cermat dalam bekerja dan mampu menganalisa situasi dan solusi,
                  serta mengutamakan ketepatan dan meminimalisir kesalahan.
                </p>
              </div>
            </div>
          </div>

          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <!-- <h4 class="title">Help Desk</h4> -->
                    <span
                      class="info-text"
                      style="
                        font-size: 22px;
                        font-weight: bold;
                        margin-bottom: 20px;
                      "
                    >
                      EMPATI
                    </span>
                  </div>
                </div>
              </div>
              <div class="info">
                <p style="margin-top: 20px">
                  Mampu berbela rasa terhadap orang lain dan situasi sekitarnya.
                </p>
              </div>
            </div>
          </div>

          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <!-- <h4 class="title">Help Desk</h4> -->
                    <span
                      class="info-text"
                      style="
                        font-size: 22px;
                        font-weight: bold;
                        margin-bottom: 20px;
                      "
                    >
                    </span>
                  </div>
                </div>
              </div>
              <div class="info">
                <p style="margin-top: 20px"></p>
              </div>
            </div>
          </div>
          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <!-- <h4 class="title">Help Desk</h4> -->
                    <span
                      class="info-text"
                      style="
                        font-size: 22px;
                        font-weight: bold;
                        margin-bottom: 20px;
                      "
                    >
                      BUDAYA MALU
                    </span>
                  </div>
                </div>
              </div>
              <div class="info">
                <p style="margin-top: 20px">
                  Kesadaran memiliki rasa malu bila melakukan kesalahan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Icon Animation Start -->
        <div
          class="shape"
          v-for="(shape, index) in shapeData"
          :key="index"
          :class="shape.className"
        >
          <!-- <span>
            <img :src="shape.imgSrc" alt="icon" />
          </span> -->
        </div>
        <!-- Icon Animation End -->
      </div>
    </div>

    <section
      class="timeline-area responsive-content area-padding theme-bg-gray"
    >
      <div class="timeline-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-12 primary-padding-3">
              <div class="avivon-heading">
                <h2 class="avivon__title">Sejarah Singkat</h2>
              </div>
              <!-- end avivon-heading -->
            </div>
            <!-- end col-md-12 -->
          </div>
          <!-- end row -->
          <div class="row">
            <div class="col-md-12">
              <div class="timeline-list">
                <div class="happening row" style="margin-bottom: 40px">
                  <div class="happening__period col-md-3 col-sm-6 col-xs-15">
                    <h4 class="year__item-title" style="text-align: center">
                      1925-1928
                    </h4>
                    <div class="time__item-bg time__bg">
                      <div class="image-content">
                        <div class="image-box">
                          <img
                            src="/images/icon-animation/icon_misi.png"
                            alt="Icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end happening__period -->
                  <div
                    class="
                      happening__desc
                      col-md-8
                      col-sm-6
                      col-sm-offset-0
                      col-xs-offset-0
                      col-md-offset-1
                    "
                  >
                    <h3 class="time__item-title">Perkumpulan</h3>
                    <p class="time__item-desc">
                      21 Oktober 1925 Yayasan Yohannes Gabriel Pusat berdiri
                      dengan nama Yayasan “Jonaes Gabrielstichting”. <br />
                      1 Juli 1926 berdiri sekolah pertama Hollandsch Inlandsche
                      School di Blitar. <br />
                      Sejak tahun 1928, berdiri sekolah-sekolah Yayasan Yohannes
                      Gabriel di berbagai daerah di Jawa Timur.
                    </p>
                  </div>
                  <!-- end happening__desc -->
                </div>
                <!-- end row -->

                <div class="happening row" style="margin-bottom: 40px">
                  <div class="happening__period col-md-3 col-sm-6 col-xs-15">
                    <h4 class="year__item-title" style="text-align: center">
                      1960
                    </h4>
                    <div class="time__item-bg time__bg-2"></div>
                    <div class="image-content">
                      <div class="image-box">
                        <img
                          src="/images/icon-animation/icon_misi.png"
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- end happening__period -->
                  <div
                    class="
                      happening__desc
                      col-md-8
                      col-sm-6
                      col-sm-offset-0
                      col-xs-offset-0
                      col-md-offset-1
                    "
                  >
                    <h3 class="time__item-title">
                      Berdirinya Gedung Yayasan Pusat
                    </h3>
                    <p class="time__item-desc">
                      Kantor Yayasan Yohannes Gabriel berpusat di Jl. Dinoyo
                      No.42 Surabaya.
                    </p>
                  </div>
                  <!-- end happening__desc -->
                </div>
                <!-- end row -->

                <div class="happening row" style="margin-bottom: 40px">
                  <div class="happening__period col-md-3 col-sm-6 col-xs-15">
                    <h4 class="year__item-title" style="text-align: center">
                      1997
                    </h4>
                    <div class="time__item-bg time__bg-3"></div>
                    <div class="image-content">
                      <div class="image-box">
                        <img
                          src="/images/icon-animation/icon_misi.png"
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- end happening__period -->
                  <div
                    class="
                      happening__desc
                      col-md-8
                      col-sm-6
                      col-sm-offset-0
                      col-xs-offset-0
                      col-md-offset-1
                    "
                  >
                    <h3 class="time__item-title">
                      Yayasan Yohannes Gabriel Perwakilan 1
                    </h3>
                    <p class="time__item-desc">
                      Yayasan Yohannes Gabriel Perwakilan 1 Surabaya berdiri
                      sejak 1997 dan berada dalam naungan Keuskupan Surabaya.
                      <br />
                      Yayasan Yohannes Gabriel Perwakilan 1 berdiri dengan 3 sub
                      bagian; sub Aloysius Gonzaga, sub Sidoarjo, sub Kantor
                      Pusat.
                    </p>
                  </div>
                  <!-- end happening__desc -->
                </div>
                <!-- end row -->

                <div class="happening row" style="margin-bottom: 40px">
                  <div class="happening__period col-md-3 col-sm-6 col-xs-15">
                    <!-- <div class="happening__period happening__periodlast theme-afr col-md-3 col-sm-6 col-xs-12"> -->

                    <h4 class="year__item-title" style="text-align: center">
                      2001-Sekarang
                    </h4>
                    <div class="time__item-bg time__bg-4"></div>
                    <div class="image-content">
                      <div class="image-box">
                        <img
                          src="/images/icon-animation/icon_misi.png"
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- end happening__period -->
                  <div
                    class="
                      happening__desc
                      col-md-8
                      col-sm-6
                      col-sm-offset-0
                      col-xs-offset-0
                      col-md-offset-1
                    "
                  >
                    <!-- <div class="happening__desc happening__desc2 col-md-8 col-md-offset-1 col-sm-6 col-xs-12 col-sm-offset-0 col-xs-offset-0"> -->
                    <h3 class="time__item-title">Perluasan</h3>
                    <p class="time__item-desc">
                      Tahun 2001 berdiri TKK St. Maria Wiyung dan SDK St.
                      Mary<br />
                      Tahun 2013 SDK Karitas 1 resmi bergabung dengan Yayasan
                      Yohannes Gabriel Perwakilan 1<br />
                      Sejak 2013 hingga sekarang Yayasan Yohannes Gabriel
                      Perwakilan 1 terus berkembang hingga memiliki 26 sekolah
                      katolik, mulai dari jenjang TK – SD – SMP – SMA.
                    </p>
                  </div>
                  <!-- end happening__desc -->
                </div>
                <!-- end row -->

                <!-- end row -->
              </div>
              <!-- end timeline-list -->
            </div>
            <!-- end col-md-12 -->
          </div>
          <!-- end row -->
        </div>
        <!-- container -->
      </div>
      <!-- end timeline-fluid -->
    </section>
  </div>
</template>

<script>
export default {
  components: {
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    BreadcrumbOne: () => import("@/components/BreadcrumbOne"),
    CallToActionOne: () => import("@/components/CallToActionOne"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
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
      videos: [
        {
          src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
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

<style scoped>
.content {
  /* max-width: 200px; */
  height: 60px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: 350px;
  height: 14px;
}

.box span {
  width: 100%;
  height: 100%;
  align-content: center;
  object-fit: cover;
  margin: auto;
  font-weight: bold;
}

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
