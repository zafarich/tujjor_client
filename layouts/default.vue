<template>
    <div class="layout" v-if="isData">
        <div class="header_back" id="header__back"></div>
        <Header-main-page />

        <Nuxt :key="$route.fullPath" />

        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isData: false
        };
    },
    async mounted() {
        await this.$store.dispatch("getCat");
        await this.$store.dispatch("getBrands");
        this.isData = true;

        this.$store.commit("LIMIT_1", 10);
        this.$store.commit("LIMIT_2", 20);
        this.$store.commit("LIMIT_3", 10);

        let orr = this.$axios.$get("order/me?status=notPayed");
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap");
</style>
<style lang="scss">
body {
    min-height: 100vh;
}
.layout {
    overflow: hidden;
}

.header_back {
    height: 81px;

    & {
        @media only screen and (max-width: 766px) {
            height: 58px;
        }

        @media only screen and (max-width: 560px) {
            height: 52px;
        }

        @media only screen and (max-width: 400px) {
            height: 47px;
        }
    }
}

* {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.container {
    max-width: 1200px;
}
a:hover {
    text-decoration: none;
}
</style>
