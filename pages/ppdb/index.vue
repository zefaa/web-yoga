<template>
  <div class="main-container">
    <OffCanvasMobileMenu />
    <BreadcrumbOne
      :items="items"
      title="POSTER PPDB UNIT SEKOLAH
YAYASAN YOHANNES GABRIEL PERWAKILAN I"
      backgroundUrl="/images/bg/ppdb.png"
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
            gutters
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
              <div class="thumbnail mb-30">
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

        <div class="section-title-two mt-50">
          <h1 class="title">Pertanyaan Seputar PPDB</h1>
        </div>
        <div class="col-12 mb-3">
          <textarea name="message" placeholder="Silahkan mengirimkan pertanyaan Anda seputar PPDB"></textarea>
        </div>
        <div class="col-12 text-left">
          <button class="btn btn-primary btn-hover-secondary">Kirim</button>
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
          imgSrc: "/images/ppdb/tk-trop.png",
          title: "TKK ST. YUSUP TROPODO",
          category: "tk",
        },
        {
          imgSrc: "/images/ppdb/tk-3.png",
          title: "TKK KARITAS III",
          category: "tk",
        },
        {
          imgSrc: "/images/ppdb/tk-wiyung.png",
          title: "TKK ST. MARIA WIYUNG",
          category: "tk",
        },
        {
          imgSrc: "/images/ppdb/sd-unsur1.png",
          title: "SDK UNTUNG SUROPATI I",
          category: "sd",
        },
        {
          imgSrc: "/images/ppdb/sd-mary.png",
          title: "SDK ST. MARY",
          category: "sd",
        },
        {
          imgSrc: "/images/ppdb/sd-katarina.png",
          title: "SDK KATARINA",
          category: "sd",
        },
        {
          imgSrc: "/images/ppdb/smp-2.png",
          title: "SMPK KARITAS II",
          category: "smp",
        },
        {
          imgSrc: "/images/ppdb/smp-3.png",
          title: "SMPK KARITAS III",
          category: "smp",
        },
        {
          imgSrc: "/images/ppdb/smp-katarina.png",
          title: "SMPK KATARINA",
          category: "smp",
        },
        {
          imgSrc: "/images/ppdb/sma-karpil.png",
          title: "SMAK ST. YUSUP KARANGPILANG",
          category: "sma",
        },
        {
          imgSrc: "/images/ppdb/sma-3.png",
          title: "SMAK KARITAS III",
          category: "sma",
        },
        {
          imgSrc: "/images/ppdb/sma-unsur.png",
          title: "SMAK UNTUNG SUROPATI",
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
          text: "PPDB",
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

