<template>
    <div class="section-padding">
        <div class="container-fluid px-0">
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title">DAFTAR UNIT</h2>
                <p class="sub-title">YAYASAN YOHANNES GABRIEL PERWAKILAN I</p>
            </div>

            <div class="messonry-button text-center mb-60">
                <!-- <button data-filter="all"><span class="filter-text">Semua</span></button> -->
                <button data-filter=".tk"><span class="filter-text">TK</span></button>
                <button data-filter=".sd"><span class="filter-text">SD</span></button>
                <button data-filter=".smp"><span class="filter-text">SMP</span></button>
                <button data-filter=".sma"><span class="filter-text">SMA</span></button>
                <!-- S<button data-filter=".design"><span class="filter-text">Design</span></button> -->
            </div>

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 no-gutters box">
                <div class="col mix" :class="unit.category" v-for="(unit, index) in unitData.unit" :key="index">
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img class="img-fluid" :src="unit.imgSrc" :alt="unit.title">
                        </div>
                        <div class="content">
                            <h5 class="title">
                                <n-link to="/project-details">{{ unit.title }}</n-link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import unitData from "~/data/unit.json";

    export default {
        data() {
            return {
                unitData,
                mixer: null
            }
        },

        mounted () {
            this.$nextTick(() => {
                const containerEl = document.querySelector('.box')
                this.mixer = new this.mixitup(containerEl)
            })
        },
    };
</script>