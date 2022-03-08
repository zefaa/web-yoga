<template>
    <div class="cta-section section-padding-250">
        <div class="container text-center icon-up-down-animation">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title fz-34">Let's talk about your project and see how we can work together</h2>
                <p class="sub-title">Our team of designers, developers and creatives are perfectionists who love what they do and love where they work</p>
            </div>
            <!-- Section Title End -->
            <n-link to="/contact-us" class="btn btn-primary btn-hover-secondary">Contact Us</n-link>

            <!-- Icon Animation Start -->
            <div class="shape" v-for="(shape, index) in shapeData" :key="index" :class="shape.className">
                <span>
                    <img :src="shape.imgSrc" alt="icon">
                </span>
            </div>
            <!-- Icon Animation End -->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shapeData: [
                    {
                        imgSrc:"/images/icon-animation/icon-agreement.png",
                        className:"shape-1"
                    },
                    {
                        imgSrc:"/images/icon-animation/icon-conversation.png",
                        className:"shape-2"
                    },
                    {
                        imgSrc:"/images/icon-animation/icon-freedom.png",
                        className:"shape-3"
                    },
                    {
                        imgSrc:"/images/icon-animation/icon-idea.png",
                        className:"shape-4"
                    },
                    {
                        imgSrc:"/images/icon-animation/icon-muscle.png",
                        className:"shape-5"
                    },
                    {
                        imgSrc:"/images/icon-animation/icon-etica.png",
                        className:"shape-6"
                    },
                    // {
                    //     imgSrc:"/images/icon-animation/icon-comm.png",
                    //     className:"shape-7"
                    // },
                    {
                        imgSrc:"/images/icon-animation/icon-comm.png",
                        className:"shape-8"
                    },
                    // {
                    //     imgSrc:"/images/icon-animation/icon-9.png",
                    //     className:"shape-9"
                    // }
                ]
            }
        }
    };
</script>