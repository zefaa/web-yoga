<template>
  <div class="main-container">
    <OffCanvasMobileMenu />
    <BreadcrumbOne
      :items="items"
      title="Berita"
      backgroundUrl="/images/bg/news-banner.png"
    />

    <!-- News Section Start -->
    <div class="section-padding fix">
      <div class="container">
        <!-- <div class="row  mtn-50"> -->
        <div class="mtn-50">
          <!-- <div class="col-lg-8 col-12 order-lg-1 mt-50"> -->
          <div class="order-lg-1 mt-50">
            <div class="row row-cols-1 no-gutters">
              <!-- News Start -->
              <div class="col mt-30" v-for="(newsData, index) in newsData" :key="index">
              <div class="blog-3 blog-details col" data-aos="fade-up">
                <div class="info">
                  <div class="thumbnail">
                    <img
                      class="w-100"
                      alt="Blog Image"
                      :src=newsData.imgSrc
                    />
                    
                  </div>
                  <ul class="meta mb-0 mt-4">
                    <li>
                      <i class="fal fa-pencil-alt"></i>Ditulis oleh {{newsData.author}}, {{newsData.date}}
                    </li>
                    <!-- <li><i class="fas fa-tags"></i>Marketing, UX Design</li> -->
                    <!-- <li><i class="fas fa-comments"></i>4 Comments</li> -->
                    <li class="media">
                      <a href="#"
                        ><i class="fas fa-share-alt"></i>Bagikan Berita</a
                      >
                      <div class="list">
                        <a href="#"><i class="fab fa-facebook-f" style='font-size:24px'></i></a>
                        <a href="#"><i class="fab fa-twitter" style='font-size:24px'></i></a>
                        <a href="#"><i class="fab fa-whatsapp-square" style='font-size:24px'></i></a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="info">
                  <!-- <h3 class="title" style="text-align: center">
                    SMPK KARITAS II KENALKAN ARTI PANTANG DAN PUASA RABU ABU
                    KEPADA SISWA MELALUI PENDALAMAN
                  </h3> -->
                  <h3 class="title" style="text-align: center">
                    {{newsData.title}}
                  </h3>
                  <!-- <div class="desc" style="text-align: justify">
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
                  </div> -->

                   <div class="desc" style="text-align: justify">
                   {{newsData.desc}}
                  </div>
                </div>
              </div>
              <!-- News End -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- News Section End -->
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
      newsData : [
        {
          imgSrc: "/images/home/news-detail.png",
          title: "SDK St. Yusup Tropodo Sambut Bersama Masa Pertobatan Melalui Ibadat Prapaskah",
          author: "Admin",
          date: "4 Maret 2022",
          desc: "Memasuki Masa Prapaskah, SDK St. Yusup Tropodo menyelenggarakan ibadat untuk mengajak para siswa dalam menyambut masa pertobatan. Ibadat ini diselenggarakan secara daring pada Selasa, 1 Maret 2022 lalu. Megambil tema “Bersatu dengan Yesus dalam Ekaristi”, kegiatan Ibadat ini melibatkan seluruh siswa dari kelas 1 hingga kelas 6 . Tema “Bersatu dengan Yesus dalam Ekaristi” ini diambil selaras dengan tema Keuskupan Surabaya, dimana kita sebagai Umat Katolik perlu kembali Bersatu dengan Yesus melalui Sakramen Ekaristi dimanapun berada. Meski merayakan Ekaristis dari rumah pun, diharapkan umat tetap dapat merasakan kesatuan dengan Kristus itu sendiri. Ibadat Prapaskah SDK St. Yusup Tropodo ini diselenggarakan dari pukul 07.00 – 10.00 dengan terbagi menjadi 3 sesi. Dalam Ibadat ini, para siswa diajak untuk mendengarkan Firman Tuhan, menyanyikan lagu, memahami pertobatan, membaca dan mendapatkan tugas ayat hafalan. Cara Hidup Jemaat Pertama yang tertuang dalam Kisah Para Rasul 2 : 41 -47 menjadi bahan perunangan siswa dalam menyambut masa Pra-paskah. Peserta yang hadir mencapai kurang lebih 500 siswa ini bersama-sama menyambut masa Prapraskah dengan antusias. Antusiasme siswa terlihat dari sikap mereka terhadap materi yang disampaikan. Tidak hanya itu, para siswa juga menyanyi serta memuji Tuhan dengan meriah. Pada dasarnya tujuan utama kegiatan Ibadat ini yakni agar siswa dapat mengenali, memahami, serta memaknai makna puasa-pantang dalam masa pertobatan. Para siswa juga diajak untuk menerapkan 5B dalam masa Pra-Paskah; yakni bertobat, berdoa, baca firman, berderma, dan berpuasa atau berpantang. "
        }
      ],

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


