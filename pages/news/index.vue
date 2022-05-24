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
        <div
          class="
            row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1
            mtn-30
          "
        >
          <div class="col mt-30" v-for="(blog, index) in blogData" :key="index">
            <BlogGridItem :blog="blog" />
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
      blogData: [
        {
          title: "Lorem ipsum",
          date: "1 Maret 2020",
          author: "Admin",
          imgSrc: "/images/blog/370/blog1.png",
        },
        {
          title: "Lorem ipsum",
          date: "1 Maret 2020",
          author: "Admin",
          imgSrc: "/images/blog/370/blog1.png",
        },
        {
          title: "Lorem ipsum",
          date: "1 Maret 2020",
          author: "Admin",
          imgSrc: "/images/blog/370/blog1.png",
        },
        {
          title: "Lorem ipsum",
          date: "1 Maret 2020",
          author: "Admin",
          imgSrc: "/images/blog/370/blog1.png",
        },
        {
          title: "Lorem ipsum",
          date: "1 Maret 2020",
          author: "Admin",
          imgSrc: "/images/blog/370/blog1.png",
        },
        {
          title: "Lorem ipsum",
          date: "1 Maret 2020",
          author: "Admin",
          imgSrc: "/images/blog/370/blog1.png",
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


