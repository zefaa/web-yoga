<template>
  <div>
    <div
      class="header-section header-transparent"
      :class="{ 'is-sticky': isSticky }"
    >
      <div class="header-inner">
        <div class="container position-relative">
          <div class="row justify-content-between align-items-center">
            <!-- Header Logo Start -->
            <div class="col-xl-2 col-auto order-0">
              <div class="header-logo">
                <n-link to="/" style="color: white">
                 <img class="dark-logo" src="/images/logo/yoga-logo.png" alt="Agency Logo">
                 </n-link>
              </div>
            </div>
            <!-- Header Logo End -->

            <!-- Header Main Menu Start -->
            <div
              class="
                col-auto col-xl
                d-flex
                align-items-center
                justify-content-xl-right justify-content-end
                order-2 order-xl-1
              "
            >
              <div class="menu-column-area d-none d-xl-block position-static">
                <nav class="site-main-menu">
                  <ul>
                    <li>
                      <n-link to="/">Beranda</n-link>
                    </li>
                    <li>
                      <n-link to="/about">Tentang</n-link>
                    </li>
                    <li>
                      <n-link to="/unit">Unit</n-link>
                    </li>
                    <li>
                      <n-link to="/news">Berita</n-link>
                    </li>
                    <!-- <li>
                      <n-link to="/about">Event</n-link>
                    </li> -->
                    <li>
                      <n-link to="/ppdb">PPDB</n-link>
                    </li>
                    <li>
                      <n-link to="/career">Karir</n-link>
                    </li>
                    <!-- <li class="has-children">
                      <n-link to="">Pendaftaran</n-link>
                      <ul class="sub-menu">
                        <li>
                          <n-link to="/registration/students">Siswa Baru</n-link>
                        </li>
                        <li>
                          <n-link to="/registration/employee">Guru/Karyawan</n-link>
                        </li>
                      </ul>
                    </li> -->
                  </ul>
                </nav>
              </div>
              
              <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                <button
                  class="toggle"
                  @click="mobiletoggleClass('addClass', 'show-mobile-menu')"
                >
                  <i class="icon-top"></i>
                  <i class="icon-middle"></i>
                  <i class="icon-bottom"></i>
                </button>
              </div>
              <!-- Header Mobile Menu Toggle End -->
            </div>
            <!-- Header Main Menu End -->

            <!-- Header Right Start -->
            <!-- <div
              class="
                col-xl-2 col
                d-none d-sm-flex
                justify-content-end
                order-1 order-xl-2
              "
            >
              <n-link to="/" class="btn btn-light btn-hover-primary"
                >DONASI</n-link
              >
            </div> -->
            <!-- Header Right End -->
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
    <div class="footer-section" :style="{ backgroundImage: `url(${'/images/bg/bg-footer.png'})`} ">
      <div class="container">
        <!-- Footer Top Widgets Start -->
        <div class="row section-padding pt-0 mtn-30">
          <!-- Footer Widget Start -->
          <div class="col-md-4 col-sm-6 col-12 mt-30">
            <div class="footer-widget">
              <!-- <div class="footer-logo">
                            <n-link to="/">
                                <img :src="footerData.footerAboutWidget.logoSrc" alt="Logo">
                            </n-link>
                        </div> -->
              <div class="footer-widget-content" >
                <div class="content" >
                  <p style=" color: white">
                    <a href="tel: (031) 995 33993 | 0821 3222 9796">{{
                      footerData.footerAboutWidget.telephone
                    }}</a>
                  </p>
                  <p style=" color: white">
                    <a href="mailto: humas@yohannesgabrielpw1.org">{{
                      footerData.footerAboutWidget.email
                    }}</a>
                  </p>
                </div>
                <div class="footer-social-inline" >
                  <a :href="footerData.footerAboutWidget.twitterUrl" style=" color: white">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                  <a :href="footerData.footerAboutWidget.fbUrl" style=" color: white">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a :href="footerData.footerAboutWidget.instagramUrl" style=" color: white">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Footer Widget End -->

          <!-- Footer Widget Start -->
          <div class="col-md-4 col-sm-6 col-6 mt-30">
            <div class="footer-widget">
              <h4 class="footer-widget-title">
                {{ footerData.footerLinkTitleOne }}
              </h4>
              <div class="footer-widget-content" style="text-align:center; color: white">
                <ul>
                  <li
                    v-for="(nav, index) in footerData.navListOne"
                    :key="index"
                  >
                    <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Footer Widget End -->

          <!-- Footer Widget Start -->
          <div class="col-md-4 col-sm-4 col-6 mt-30">
            <div class="footer-widget">
              <h4 class="footer-widget-title">
                {{ footerData.footerLinkTitleTwo }}
              </h4>
              <div class="footer-widget-content" style="text-align:center; color: white">
                <ul>
                  <li
                    v-for="(nav, index) in footerData.navListTwo"
                    :key="index"
                  >
                    <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Footer Widget End -->

          <!-- Footer Widget Start -->
          <!-- <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
            <div class="footer-widget">
              <h4 class="footer-widget-title">
                {{ footerData.footerLinkTitleThree }}
              </h4>
              <div class="footer-widget-content">
                <ul>
                  <li
                    v-for="(nav, index) in footerData.navListThree"
                    :key="index"
                  >
                    <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
          <!-- Footer Widget End -->

          <!-- Footer Widget Start -->
          <!-- <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
            <div class="footer-widget">
              <h4 class="footer-widget-title">
                {{ footerData.footerLinkTitleFour }}
              </h4>
              <div class="footer-widget-content">
                <ul>
                  <li
                    v-for="(nav, index) in footerData.navListFour"
                    :key="index"
                  >
                    <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
          <!-- Footer Widget End -->
        </div>
        <!-- Footer Top Widgets End -->

        <!-- Footer Copyright Start -->
        <div class="row">
          <div class="col">
            <p class="copyright">
              &copy; 2022 <a href="#">Yayasan Yohanes Gabriel</a>. All Rights
              Reserved.
            </p>
          </div>
        </div>
        <!-- Footer Copyright End -->
      </div>
    </div>
  </div>
</template>

<script>
import footerData from "~/data/footer.json";
export default {

  data() {
    return {
      isSticky: false,
      footerData,
      
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },

  methods: {
    // offcanvas mobilemenu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    //offcanvas search
    // toggleClass(addRemoveClass, className) {
    //   const el = document.querySelector("#search-popup");
    //   if (addRemoveClass === "addClass") {
    //     el.classList.add(className);
    //   } else {
    //     el.classList.remove(className);
    //   }
    // },
  },
};
</script>
