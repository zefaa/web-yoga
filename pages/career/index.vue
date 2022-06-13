<template>
  <div class="main-container">
    <OffCanvasMobileMenu />

    <BreadcrumbOne
      :items="items"
      title="DAFTAR KARIR YAYASAN YOHANNES GABRIEL"
      backgroundUrl="/images/bg/karir-bg.png"
    />

    <!-- Emplpoyee Section Start -->
    <div class="section-padding fix">
      <div class="container">
        <!-- <div class="row  mtn-50"> -->
        <div class="mtn-50">
          <!-- <div class="col-lg-8 col-12 order-lg-1 mt-50"> -->
          <div class="order-lg-1 mt-50">
            <div class="row row-cols-1 no-gutters">
              <!-- Employee Start -->
              <div class="section-padding-t90 section-padding-bottom-200">
                <div class="container">
                  <!-- About Wrapper Start -->
                  <div class="row mt-4">
                    <!-- About Image Area Start -->
                    <div class="col-xl-6 col-lg-6" data-aos="fade-up">
                      <div class="about-image-area">
                        <!-- <div class="about-image js-tilt">
                            <img src="/images/about/agency_about_1.jpg" alt="images">
                        </div> -->
                        <div class="about-image js-tilt">
                          <img src="/images/bg/karir-1.png" alt="images" />
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
                        <div class="section-title-two" style="margin-top: 50px">
                          <!-- <span class="sub-title">Every day brings new challenges</span> -->
                          <h3 class="title">Persyaratan</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <div class="details-list">
                          <li>Lulusan S1 Pendidikan</li>
                          <li>IPK Min 3.00</li>
                          <li>Disiplin, Tegas dan Berintegritas</li>
                          <li>Agama Katolik / Kristen</li>
                          <li>
                            Memiliki kemampuan berbahas Inggris Menjadi Nilai
                            Tambah
                          </li>
                        </div>
                        <div
                          class="section-title-two"
                          style="margin-top: 100px"
                        >
                          <!-- <span class="sub-title">Every day brings new challenges</span> -->
                          <h3 class="title">Berkas Lamaran Pekerjaan</h3>
                        </div>
                        <div class="details-list">
                          <li>Surat Lamaran Pekerjaan</li>
                          <li>Curriculum Vitae (CV)</li>
                          <li>Scan Ijazah Terakhir dan Transkrip Nilai</li>
                          <li>Pas Foto Terbaru (4 x 6)</li>
                          <li>Scan Foto KTP</li>
                          <li>Scan Foto KK</li>
                          <li>
                            Piagam-Piagam Penghargaan yang Mendukung (Jika ada)P
                          </li>
                        </div>
                      </div>
                    </div>

                    <!-- About Start -->
                  </div>
                  <!-- About Wrapper End -->
                </div>
              </div>

              <div class="comment-form-wrap">
                <div class="comment-respond">
                  <h3 class="title">Formulir Pendaftaran</h3>
                  <form action="#" method="post">
                    <div class="row">
                      <div class="col-md-6 col-12 mb-3">
                        <input
                          type="text"
                          placeholder="Nama Lengkap *"
                          name="name"
                        />
                      </div>
                      <div class="col-md-6 col-12 mb-3">
                        <input
                          type="text"
                          placeholder="Tempat, tanggal lahir *"
                          name="dob"
                        />
                      </div>
                      <div class="col-md-6 col-12 mb-3 mt-1">
                        <b-form-select
                          v-model="selected"
                          :options="options"
                          class="mb-3"
                          size="lg"
                        >
                          <!-- This slot appears above the options from 'options' prop -->
                          <template #first>
                            <b-form-select-option :value="null" disabled
                              >-- Silahkan Pilih Jenis Kelamin
                              --</b-form-select-option
                            >
                          </template>

                          <!-- These options will appear after the ones from 'options' prop -->

                          <b-form-select-option value="perempuan"
                            >Perempuan</b-form-select-option
                          >
                          <b-form-select-option value="pria"
                            >Laki-laki</b-form-select-option
                          >
                        </b-form-select>
                      </div>
                      <div class="col-md-6 col-12 mb-3">
                        <input
                          type="jurusan"
                          placeholder="Pendidikan Terakhir - Jurusan *"
                          name="jurusan"
                        />
                      </div>
                      <div class="col-md-6 col-12 mb-3">
                        <input
                          type="univ"
                          placeholder="Universitas/Institut/Sekolah Tinggi *"
                          name="univ"
                        />
                      </div>
                      <div class="col-md-6 col-12 mb-3 mt-1">
                        <b-form-select
                          v-model="selected"
                          :options="options"
                          class="mb-3"
                          size="lg"
                        >
                          <!-- This slot appears above the options from 'options' prop -->
                          <template #first>
                            <b-form-select-option :value="null" disabled
                              >-- Silahkan Pilih Agama --</b-form-select-option
                            >
                          </template>

                          <!-- These options will appear after the ones from 'options' prop -->

                          <b-form-select-option value="katolik"
                            >Katolik</b-form-select-option
                          >
                          <b-form-select-option value="kristen"
                            >Kristen</b-form-select-option
                          >
                          <b-form-select-option value="hindu"
                            >Hindu</b-form-select-option
                          >
                          <b-form-select-option value="islam"
                            >Islam</b-form-select-option
                          >
                          <b-form-select-option value="buddha"
                            >Buddha</b-form-select-option
                          >
                          <b-form-select-option value="konghucu"
                            >Konghucu</b-form-select-option
                          >
                        </b-form-select>
                      </div>
                      <div class="col-12 mb-3">
                        <textarea
                          name="message"
                          placeholder="Alamat"
                        ></textarea>
                      </div>
                      <div class="col-md-6 col-12 mb-3">
                        <input
                          type="email"
                          placeholder="Email *"
                          name="email"
                        />
                      </div>
                      <div class="col-md-6 col-12 mb-3">
                        <input
                          type="phone"
                          placeholder="No. Handphone *"
                          name="phone"
                        />
                      </div>
                      <div class="col-md-6 col-12 mb-3 mt-1">
                        <b-form-select
                          v-model="selected"
                          :options="options"
                          class="mb-3"
                          size="lg"
                        >
                          <!-- This slot appears above the options from 'options' prop -->
                          <template #first>
                            <b-form-select-option :value="null" disabled
                              >-- Silahkan Pilih Posisi Dilamar
                              --</b-form-select-option
                            >
                          </template>

                          <!-- These options will appear after the ones from 'options' prop -->

                          <b-form-select-option value="gr-tk"
                            >Guru TK</b-form-select-option
                          >
                          <b-form-select-option value="gr-sd"
                            >Guru SD</b-form-select-option
                          >
                          <b-form-select-option value="gr-tik"
                            >Guru TIK</b-form-select-option
                          >
                          <b-form-select-option value="gr-pjok"
                            >Guru PJOK</b-form-select-option
                          >
                          <b-form-select-option value="gr-tari"
                            >Guru Tari</b-form-select-option
                          >
                          <b-form-select-option value="gr-agama"
                            >Guru Agama Katolik</b-form-select-option
                          >
                          <b-form-select-option value="gr-mtk"
                            >Guru Matematika</b-form-select-option
                          >
                          <b-form-select-option value="gr-ips"
                            >Guru IPS</b-form-select-option
                          >
                          <b-form-select-option value="gr-kimia"
                            >Guru Kimia</b-form-select-option
                          >
                          <b-form-select-option value="gr-eko"
                            >Guru Ekonomi</b-form-select-option
                          >
                          <b-form-select-option value="gr-indo"
                            >Guru Bahasa Indonesia</b-form-select-option
                          >
                          <b-form-select-option value="gr-inggris"
                            >Guru Bahasa Inggris</b-form-select-option
                          >
                          <b-form-select-option value="gr-jawa"
                            >Guru Bahasa Jawa</b-form-select-option
                          >
                        </b-form-select>
                      </div>
                      <div class="col-md-6 col-12 mb-3 mt-2">
                        <b-form-file
                          v-model="file1"
                          :state="Boolean(file1)"
                          placeholder="Silahkan Upload File Di sini..."
                          drop-placeholder="Drop file here..."
                        ></b-form-file>
                        <div class="mt-3">
                          File Dipilih: {{ file1 ? file1.name : "" }}
                        </div>
                      </div>
                      <!-- <div class="col-12 mb-3">
                                                <textarea name="message" placeholder="Your Comment"></textarea>
                                            </div> -->
                      <div class="col-12 text-left">
                        <button class="btn btn-primary btn-hover-secondary">
                          Kirim
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Employee Section End -->

    <CallToActionTwo />
  </div>
</template>

<script>
export default {
  components: {
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    BreadcrumbOne: () => import("@/components/BreadcrumbOne"),
    CallToActionTwo: () => import("@/components/CallToActionTwo"),
  },

  data() {
    return {
      selected: null,
      file1: null,
      file2: null,
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

  head() {
    return {
      title: "Form Pendaftaran",
    };
  },
};
</script>


