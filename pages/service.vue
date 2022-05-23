<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

       

        <BreadcrumbOne :items="items" title="We work with bold brands that we believe in" backgroundUrl= "/images/bg/breadcrumb-bg-three.jpg" />

        <ServiceWrapper />

        <SuccessStory :style="{backgroundColor: '#f8faff'}" />

        <AboutFour />

        <FunfactWithTitle />

        <ContactSectionTwo />

       <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30">
          <div
            class="col mt-30"
            v-for="(team, index) in teamData.slice(0, 4)"
            :key="index"
          >
            <TeamMember :team="team" />
          </div>
        </div>
        <TheFooter />

    </div>
</template>

<script>
import teamData from "~/data/team.json";
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
           
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            ServiceWrapper: () => import('@/components/ServiceWrapper'),
            SuccessStory: () => import('@/components/SuccessStory'),
            AboutFour: () => import('@/components/AboutFour'),
            FunfactWithTitle: () => import('@/components/FunfactWithTitle'),
            ContactSectionTwo: () => import('@/components/ContactSectionTwo'),
            TeamMember: () => import ('@/components/TeamMember'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                 teamData,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Service',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Service'
            }
        },
    };
</script>


