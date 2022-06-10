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
        <div
          class="
            row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1
            mtn-30
          "
        >
          <div class="col mt-30" v-for="(news, index) in newsData" :key="index">
            <BlogGridItem :news="news" />
          </div>
        </div>

        <div class="row mt-50">
          <div class="col">
            <paginate
              :page-count="4"
              :page-range="3"
              :margin-pages="2"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :container-class="'pagination center'"
              :page-class="'page-item'"
            >
            </paginate>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog Section End -->

    <CallToActionTwo />
  </div>
</template>

<script>
// import blogData from "~/data/blog.json";

export default {
  components: {
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    BreadcrumbOne: () => import("@/components/BreadcrumbOne"),
    BlogGridItem: () => import("@/components/BlogGridItem"),
    CallToActionTwo: () => import("@/components/CallToActionTwo"),
  },

  data() {
    return {
      // blogData,
      newsData: [
        {
          title:
            "SDK St. Yusup Tropodo Sambut Bersama Masa Pertobatan Melalui Ibadat Prapaskah",
          date: "4 Maret 2022",
          author: "Admin",
          imgSrc: "/images/home/news-1.png",
        },
        {
         title:
            "Retreat Grade 6 SDK St. Mary Undang RD. Alphonsus Boedi Prasetijo",
          date: "23 Februari 2022",
          author: "Admin",
          imgSrc: "/images/home/news-2.png",
        },
        {
          title:
            "Pembelajaran Tatap Muka Sekolah Yohannes Gabriel Perwakilan I Surabaya, Perketat Prokes",
          date: "25 Januari 2022",
          author: "Admin",
          imgSrc: "/images/home/news-3.png",
        },
        {
          title: "Uji Kompetensi Guru YOGA I Serentak Diselenggarakan Untuk 316 Pendidik",
          date: "14 Januari 2022",
          author: "Admin",
          imgSrc: "/images/home/news-6.png",
        },
        {
          title: "“Break Free From Toxic Circle in Pandemic” - Rekoleksi SMPK Katarina",
          date: "18 Desember 2020",
          author: "Admin",
          imgSrc: "/images/home/news-4.png",
        },
        {
          title: "Webinar Parenting SDK St. Mary, Ajak Orang Tua Menjadi Hebat di Masa Pandemi",
          date: "29 November 2020",
          author: "Admin",
          imgSrc: "/images/home/news-5.png",
        },
        
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
      title: "Berita",
    };
  },
};
</script>


