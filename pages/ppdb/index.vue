<template>
  <div class="main-container">
    <OffCanvasMobileMenu />
    <BreadcrumbOne
      :items="items"
      title="POSTER PPDB UNIT SEKOLAH
YAYASAN YOHANNES GABRIEL PERWAKILAN I"
      backgroundUrl="/images/bg/ppdbg.png"
    />

    <div class="section-padding" :style="{ backgroundColor: '#f8faff' }">
      <div class="container">
        <div class="row align-items-center mb-30">
          <div class="col-lg-5">
            <!-- Section Title Two Start -->
            <div class="section-title-two">
              <span class="sub-title">PENERIMAAN PESERTA DIDIK BARU</span>
              <h3 class="title">Unit Yayasan Yohannes Gabriel</h3>
            </div>
            <!-- Section Title Two End -->
          </div>
          <div class="col-lg-7">
            <div class="messonry-button text-lg-right text-left">
              <button data-filter="all">
                <span class="filter-text">SEMUA</span>
              </button>
              <button data-filter=".tk">
                <span class="filter-text">TK</span>
              </button>
              <button data-filter=".sd">
                <span class="filter-text">SD</span>
              </button>
              <button data-filter=".smp">
                <span class="filter-text">SMP</span>
              </button>
              <button data-filter=".sma">
                <span class="filter-text">SMA</span>
              </button>
              <!-- <button data-filter=".design"><span class="filter-text">Design</span></button> -->
            </div>
          </div>
        </div>

        <div
          class="
            row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1
            no-gutters
            box
          "
        >
          <div
            class="col mix"
            :class="ppdb.category"
            v-for="(ppdb, index) in ppdbData"
            :key="index"
          >
            <div class="single-portfolio">
              <div class="thumbnail">
                <img class="img-fluid" :src="ppdb.imgSrc" :alt="ppdb.title" />
              </div>

              <div class="content">
                <h5 class="title">
                  <n-link to="#">{{ ppdb.title }}</n-link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ppdbData from "~/data/ppdb.json";

export default {
  data() {
    return {
      ppdbData: [
        {
          imgSrc: "/images/ppdb/TK1.png",
          title: "TK I YOGA",
          category: "tk",
        },
        {
          imgSrc: "/images/ppdb/SD1.png",
          title: "SD I YOGA",
          category: "sd",
        },
        {
          imgSrc: "/images/ppdb/SMP1.png",
          title: "SMP I YOGA",
          category: "smp",
        },
        {
          imgSrc: "/images/ppdb/SMP2.png",
          title: "SMP II YOGA",
          category: "smp",
        },
        {
          imgSrc: "/images/ppdb/SMA1.png",
          title: "SMA I YOGA",
          category: "sma",
        },
      ],
      mixer: null,
      items: [
        {
          text: "Beranda",
          to: "/",
        },
        {
          text: "Guru",
          active: true,
        },
      ],
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector(".box");
      this.mixer = new this.mixitup(containerEl);
    });
  },

  head() {
    return {
      title: "Pendaftaran Siswa",
    };
  },
};
</script>

