<template>
    <section>
        <banner-on-main-page />
        <!-- <catalog-magazines-main-page /> -->
        <on-sale-item />
        <other-items />
        <logo-rectangle />
        <popular-item />
        <brands />
        <news />
    </section>
</template>

<script>
export default {
    layout: "main__page__layout",
    data() {
        return {
            seach: null
        };
    },
    mounted() {},

    created() {
        window.addEventListener("scroll", this.scrollTop);
        // window.scrollTo({
        //     top: this.$store.state.all.scrollTop
        // });
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrollTop);
    },
    methods: {
        scrollTop() {
            this.$store.commit("SCROLL_TOP", window.scrollY);
        }
    }
};
</script>

<style lang="scss">
html,
body {
    touch-action: auto !important;
}
section {
    padding: 0;
    margin: 0;
}
</style>
