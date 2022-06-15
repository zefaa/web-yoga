<template>
    <div class="testimonial-section section-padding-t90 section-padding-bottom" :style="{ backgroundImage: `url(${'/images/bg/bg-testi.png'})`} ">
        <div class="container-fluid">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title fz-32" style="color:white">Testimoni Yohannes Gabriel</h2>
                <p class="sub-title" style="color:white">Alumni, Siswa, dan Orangtua</p>
            </div>
            <!-- Section Title End -->

            <!--Testimonial Slider Start -->
            <div class="testimonial-slider" data-aos="fade-up">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" v-for="(testimonial, index) in testimonialData" :key="index">
                        <TestimonialItem :testimonial="testimonial" />
                    </div>
                </swiper>
                <div class="swiper-pagination text-center"></div>
            </div>
            <!--Testimonial Slider End -->
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            TestimonialItem: () => import('@/components/TestimonialItem'),
        },

        data() {
            return {
                swiperOption: {
                    slidesPerView : 3,
                    centeredSlides: true,
                    loop: true,
                    speed: 1000,
                    spaceBetween : 50,
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    breakpoints: {
                        1499:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2
                        },
                        320:{
                            slidesPerView : 1
                        }
                    }
                },

                testimonialData: [
                    {
                        id: 1,
                        text: "Anak-anak belajar ilmu secara umum dan pendalaman iman Katolik setiap hari. Anak dilatih mandiri dan tidak bosan karena guru yang interaktif dan kreatif dalam pembelajaran",
                        imgSrc: "/images/testimonial/testi-1.png",
                        name: "Ima",
                        position: "Orangtua Keneth & Celine"

                    },
                    {
                        id: 2,
                        text: "Hal konkrit dan buah kasih dari bersekolah di Karitas adalah yang mendorongku untuk berbelas kasih hingga mempersembahkan diriku sebagai seorang imam Keuskupan Surabaya",
                        imgSrc: "/images/testimonial/testi-2.png",
                        name: "RD. Yuventius Devi Ghawa",
                        position: "Alumni TKK Karitas V & SMPK-SMAK Karitas III"
                    },
                    {
                        id: 3,
                        text: "Anak-anak diajarkan iman Katolik yang menjadi penguat karakter. Dengan pengajar yang berpotensi, anak-anak kami diajarkan untuk disiplin dan juga mandiri.",
                        imgSrc: "/images/testimonial/testi-3.png",
                        name: "Ninik Luesiana",
                        position: "Orangtua Cedric, Bellycia, Averycia"
                    }
                ]
            }
        },
    };
</script>