<template>
    <div class="main-container">
        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="Pendaftaran" backgroundUrl= "/images/bg/bannerJob.png" />

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
                                
                                <div class="thumbnail">
                                    <img class="w-100" src="/images/blog/770/hireBanner.png" alt="Blog Image">
                                </div>
                                
                                
                            </div>
                            
                                       
                            <div class="comment-form-wrap">
                                <div class="comment-respond">
                                    <h3 class="title">Formulir Pendaftaran</h3>
                                    <form action="#" method="post">
                                        <div class="row">
                                            <div class="col-md-6 col-12 mb-3">
                                                <input type="text" placeholder="Nama Lengkap *" name="name">
                                            </div>
                                            <div class="col-md-6 col-12 mb-3">
                                                <input type="text" placeholder="Tempat, tanggal lahir *" name="dob">
                                            </div>
                                             <div class="col-md-6 col-12 mb-3">
                                                 <input type="email" placeholder="Jenis Kelamin *" name="email">
                                             </div>
                                              <div class="col-md-6 col-12 mb-3">
                                                 <input type="email" placeholder="Pendidikan Terakhir - Jurusan *" name="email">
                                             </div>
                                             <div class="col-md-6 col-12 mb-3">
                                                 <input type="email" placeholder="Universitas/Institut/Sekolah Tinggi *" name="email">
                                             </div>
                                             <div class="col-md-6 col-12 mb-3">
                                                 <input type="email" placeholder="Agama  *" name="email">
                                             </div>
                                             <div class="col-12 mb-3">
                                                <textarea name="message" placeholder="Alamat"></textarea>
                                            </div>
                                             <div class="col-md-6 col-12 mb-3">
                                                 <input type="email" placeholder="Email *" name="email">
                                             </div>
                                             <div class="col-md-6 col-12 mb-3">
                                                 <input type="email" placeholder="No. Handphone *" name="email">
                                             </div>
                                             <div class="col-md-6 col-12 mb-3">
                                                 <input type="email" placeholder="Posisi *" name="email">
                                             </div>
                                             
                                            <!-- <div class="col-12 mb-3">
                                                <textarea name="message" placeholder="Your Comment"></textarea>
                                            </div> -->
                                            <div class="col-12 text-left">
                                                <button class="btn btn-primary btn-hover-secondary">Kirim</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="col-lg-4 col-12 order-lg-2 mt-50">
                        <BlogSidebar />
                    </div> -->
                </div>
            </div>
        </div>
        <!-- Blog Section End -->

        <CallToActionTwo />

        

    </div>
</template>

<script>
    import blogData from "~/data/blog.json";

    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            CallToActionTwo: () => import('@/components/CallToActionTwo'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                blogData,

                items: [
                    {
                        text: 'Beranda',
                        to: "/"
                    },
                    {
                        text: 'Guru',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Form Pendaftaran'
            }
        },
    };
</script>


