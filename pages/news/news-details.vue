<template>
  <div class="main-container">
    <OffCanvasMobileMenu />
    <BreadcrumbOne
      :items="items"
      title="Berita"
      backgroundUrl="/images/bg/bannerNews.png"
    />

    <!-- Blog Section Start -->
    <div class="section-padding fix">
      <div class="container">
        <!-- <div class="row  mtn-50"> -->
        <div class="mtn-50">
          <!-- <div class="col-lg-8 col-12 order-lg-1 mt-50"> -->
          <div class="order-lg-1 mt-50">
            <div class="row row-cols-1 no-gutters">
              <!-- Blog Start -->
              <div class="blog-3 blog-details col" data-aos="fade-up">
                <div class="info">
                  <div class="thumbnail">
                    <img
                      class="w-100"
                      src="/images/blog/770/rabu-abu.png"
                      alt="Blog Image"
                    />
                  </div>
                  <ul class="meta mb-0 mt-4">
                    <li>
                      <i class="fal fa-pencil-alt"></i>Ditulis oleh Admin, 1
                      Maret 2022
                    </li>
                    <!-- <li><i class="fas fa-tags"></i>Marketing, UX Design</li> -->
                    <!-- <li><i class="fas fa-comments"></i>4 Comments</li> -->
                    <li class="media">
                      <a href="#"
                        ><i class="fas fa-share-alt"></i>Bagikan Berita</a
                      >
                      <div class="list">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-tumblr-square"></i></a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="info">
                  <h3 class="title" style="text-align: center">
                    SMPK KARITAS II KENALKAN ARTI PANTANG DAN PUASA RABU ABU
                    KEPADA SISWA MELALUI PENDALAMAN
                  </h3>
                  <div class="desc" style="text-align: justify">
                    <p>
                      Hari Rabu Abu merupakan hari yang dinantikan oleh Umat
                      Katolik di seluruh dunia. Hal ini juga menjadi momen
                      penting termasuk bagi SMPK Karitas II. Bu Randu, Guru
                      Agama SMPK Karitas II, mengajak seluruh siswa untuk
                      menyambut masa Prapaskah melalui Pendalaman Rabu Abu pada
                      Selasa, 1 Maret 2022. Tema yang diambil dalam pendalaman
                      ini adalah “Apa itu Rabu Abu?”. Pendalaman Rabu Abu dengan
                      tema tersebut diambil dalam rangka menyambut Masa
                      Pra-Paskah. Sekolah ingin secara khusus lebih mengenalkan
                      arti dan makna Rabu Abu, serta pentingnya puasa dan
                      pantang dalam ajaran Gereja Katolik. Melibatkan seluruh
                      siswa dari kelas 7 hingga kelas 9 sebanyak kurang lebih
                      100 peserta, acara ini berjalan dengan lancar. Dalam
                      kegiatan ini dijelaskan materi tentang Rabu Abu, Pantang
                      dan Puasa. Meskipun belum memasuki usia dewasa, tapi para
                      siswa diajak untuk ikut berpartisipasi aktif dalam masa
                      Pra-Paskah.
                    </p>

                    <p>
                      Para siswa yang mengikuti kegiatan ini merespon dengan
                      baik dan antusias. Mereka tertarik dalam memperoleh
                      pengetahuan dan pemahaman baru terkait Rabu Abu dan
                      aturan-aturan puasa pantang yang ada dalam masa pertobatan
                      ini. Harapan sekolah setelah terlaksananya kegiatan ini
                      adalah siswa dapat lebih memahami Rabu Abu serta lebih
                      memaknai arti pantang dan puasa. Tidak hanya itu, siswa
                      juga diharapkan dapat membedakan pantang dan puasa serta
                      dapat melaksanakannya dengan tepat. Lebih dari itu,
                      melalui kegiatan ini siswa juga dapat menyadari siapa saja
                      yang memiliki keharusan maupun kewajiban dalam berpantang
                      dan berpuasa.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Blog End -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog Section End -->
  </div>
</template>

<script>
import blogData from "~/data/blog.json";

export default {
  components: {
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    BreadcrumbOne: () => import("@/components/BreadcrumbOne"),
  },

  data() {
    return {
      blogData,

      items: [
        {
          text: "Beranda",
          to: "/",
        },
        {
          text: "Berita",
          active: true,
        },
      ],
    };
  },

  head() {
    return {
      title: "Detail Berita",
    };
  },
};
</script>


