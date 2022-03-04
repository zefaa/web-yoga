<template>
    <div class="main-container">

        <BreadcrumbOne :items="items" title="Berita" backgroundUrl= "/images/bg/bannerNews.png" />

        <!-- Blog Section Start -->
        <div class="section-padding fix">
            <div class="container">
                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
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
                            :page-class="'page-item'">
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
    import blogData from "~/data/blog.json"

    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            BlogGridItem: () => import('@/components/BlogGridItem'),
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
                title: 'Berita'
            }
        },
    };
</script>


