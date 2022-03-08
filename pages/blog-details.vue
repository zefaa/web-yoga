<template>
    <div class="main-container">
        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="Berita" backgroundUrl= "/images/bg/bannerNews.png" />

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
                                    <img class="w-100" src="/images/blog/770/rabu-abu.png" alt="Blog Image">
                                </div>
                                <ul class="meta mb-0 mt-4">
                                        <li><i class="fal fa-pencil-alt"></i>Ditulis oleh Admin, 1 Maret 2022</li>
                                        <!-- <li><i class="fas fa-tags"></i>Marketing, UX Design</li> -->
                                        <!-- <li><i class="fas fa-comments"></i>4 Comments</li> -->
                                        <li class="media"><a href="#"><i class="fas fa-share-alt"></i>Bagikan Berita</a>
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
                                    <h3 class="title" style="text-align : center">SMPK KARITAS II KENALKAN ARTI PANTANG DAN PUASA RABU ABU KEPADA SISWA MELALUI PENDALAMAN</h3>
                                    <div class="desc" style="text-align : justify">
                                        <p>Hari Rabu Abu merupakan hari yang dinantikan oleh Umat Katolik di seluruh dunia. Hal ini juga menjadi momen penting termasuk bagi SMPK Karitas II. Bu Randu, Guru Agama SMPK Karitas II, mengajak seluruh siswa untuk menyambut masa Prapaskah melalui Pendalaman Rabu Abu pada Selasa, 1 Maret 2022. Tema yang diambil dalam pendalaman ini adalah “Apa itu Rabu Abu?”. Pendalaman Rabu Abu dengan tema tersebut diambil dalam rangka menyambut Masa Pra-Paskah. Sekolah ingin secara khusus lebih mengenalkan arti dan makna Rabu Abu, serta pentingnya puasa dan pantang dalam ajaran Gereja Katolik. Melibatkan seluruh siswa dari kelas 7 hingga kelas 9 sebanyak kurang lebih 100 peserta, acara ini berjalan dengan lancar. Dalam kegiatan ini dijelaskan materi tentang Rabu Abu, Pantang dan Puasa. Meskipun belum memasuki usia dewasa, tapi para siswa diajak untuk ikut berpartisipasi aktif dalam masa Pra-Paskah.</p>

                                        <p> Para siswa yang mengikuti kegiatan ini merespon dengan baik dan antusias. Mereka tertarik dalam memperoleh pengetahuan dan pemahaman baru terkait Rabu Abu dan aturan-aturan puasa pantang yang ada dalam masa pertobatan ini. Harapan sekolah setelah terlaksananya kegiatan ini adalah siswa dapat lebih memahami Rabu Abu serta lebih memaknai arti pantang dan puasa. Tidak hanya itu, siswa juga diharapkan dapat membedakan pantang dan puasa serta dapat melaksanakannya dengan tepat. Lebih dari itu, melalui kegiatan ini siswa juga dapat menyadari siapa saja yang memiliki keharusan maupun kewajiban dalam berpantang dan berpuasa.</p>

                                      
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- Blog End -->

                            <!-- <div class="entry-author">
                                <div class="author-info">
                                    <div class="author-avatar">
                                        <img src="/images/blog/blog-author.png" alt="image">
                                    </div>
                                    <div class="author-description">
                                        <h6 class="author-name">Eloise Smith</h6>
                                        <span class="designation">CEO at Flow</span>
                                        <div class="author-biographical-info">
                                            She is a lawyer, podcaster, speaker, and writer. As an educational content director, she helps develop HasThemes' premium training products.
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <!-- <div class="blog-nav-links">
                                <h4 class="title">Related Posts </h4>
                                <div class="nav-list">
                                    <div class="nav-item prev">
                                        <div class="inner">
                                            <a href="#">
                                                <div class="hover-bg has-thumbnail" :style="{backgroundImage: `url('/images/pagination/blog-pagination.jpg')`}"></div>
                                                <span class="cate">Marketing</span>
                                                <h6>Eleven top tips for developing agile marketing strategies that work</h6>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="nav-item next">
                                        <div class="inner">
                                            <a href="#">
                                                <div class="hover-bg has-thumbnail" :style="{backgroundImage: `url('/images/pagination/blog-pagination-2.jpg')`}"></div>
                                                <span class="cate">Startup</span>
                                                <h6>Growing a startup involves balancing out the financial stack</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <!-- <div class="comment-list-wrapper">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h4 class="title">Comments (4) </h4>
                                    </div>
                                    <div class="col-lg-12">
                                        <ul class="comment-list"> -->
                                            <!-- <li class="comment">
                                                <div class="comment-2">
                                                    <div class="comment-author vcard">
                                                        <img alt="" src="/images/comment/comment1.png">
                                                    </div>
                                                    <div class="comment-content">
                                                        <div class="meta">
                                                            <h6 class="fn">Thomas Smith</h6>
                                                            <div class="comment-datetime"> 10 Oct, 2019. 10:00AM </div>
                                                        </div>
                                                        <div class="comment-text">
                                                            <p>An interesting article​ about ​content marketing. It has evolved moving from If you are interested in content marketing, have a look at the article's traditional media into the digital landscape.</p>
                                                        </div>
                                                        <div class="comment-actions">
                                                            <a class="comment-reply-link" href="javascript:void(0)">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> -->
                                            <!-- comment End-->
                                            <!-- <li class="children comment">
                                                <div class="comment-6">
                                                    <div class="comment-author vcard">
                                                        <img alt="" src="/images/comment/comment2.png">
                                                    </div>
                                                    <div class="comment-content">
                                                        <div class="meta">
                                                            <h6 class="fn">Eloise Smith</h6>
                                                            <div class="comment-datetime">10 Oct, 2019. 10:00AM</div>
                                                        </div>
                                                        <div class="comment-text">
                                                            <p>An interesting article​ about ​content marketing. It has evolved moving from If you are interested in content marketing, have a look at the article's traditional media into the digital landscape.</p>
                                                        </div>
                                                        <div class="comment-actions">
                                                            <a class="comment-reply-link" href="javascript:void(0)">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> -->
                                            <!-- comment End -->
                                            <!-- <li class="comment">
                                                <div class="comment-2">
                                                    <div class="comment-author vcard">
                                                        <img alt="" src="/images/comment/comment3.png">
                                                    </div>
                                                    <div class="comment-content">
                                                        <div class="meta">
                                                            <h6 class="fn">Stella Smith</h6>
                                                            <div class="comment-datetime"> 10 Oct, 2019. 10:00AM </div>
                                                        </div>
                                                        <div class="comment-text">
                                                            <p>An interesting article​ about ​content marketing. It has evolved moving from If you are interested in content marketing, have a look at the article's traditional media into the digital landscape.</p>
                                                        </div>
                                                        <div class="comment-actions">
                                                            <a class="comment-reply-link" href="javascript:void(0)">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> -->
                                        <!-- </ul>
                                    </div>
                                </div>
                            </div> -->

                            <!-- <div class="comment-form-wrap">
                                <div class="comment-respond">
                                    <h3 class="title">Leave a Reply</h3>
                                    <form action="#" method="post">
                                        <div class="row">
                                            <div class="col-md-6 col-12 mb-3">
                                                <input type="text" placeholder="Your Name *" name="name">
                                            </div>
                                            <div class="col-md-6 col-12 mb-3">
                                                <input type="email" placeholder="Email *" name="email">
                                            </div>
                                            <div class="col-12 mb-3">
                                                <textarea name="message" placeholder="Your Comment"></textarea>
                                            </div>
                                            <div class="col-12 text-left">
                                                <button class="btn btn-primary btn-hover-secondary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div> -->
                        </div>
                    </div>

                    <!-- <div class="col-lg-4 col-12 order-lg-2 mt-50">
                        <BlogSidebar />
                    </div> -->
                </div>
            </div>
        </div>
        <!-- Blog Section End -->

        <!-- <CallToActionTwo /> -->

        

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
                        text: 'Berita',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Blog Details'
            }
        },
    };
</script>


