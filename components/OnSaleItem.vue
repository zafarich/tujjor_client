<template>
    <section>
        <section class="container popular__container" v-if="popular != null">
            <div class="popular__heading">{{ $t("skidka") }}</div>

            <div class="card-row">
                <div
                    class="card-5"
                    v-for="product in popular"
                    :key="product._id"
                >
                    <ProductCard :product="product" />
                </div>
            </div>

            <a
                href="#"
                class="popular__btn text-center"
                v-if="popular.length >= limit"
                @click.prevent="updatePopular"
                >{{ $t("all") }}</a
            >
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            popular: null,
            page: 1,
            limit: 10
        };
    },
    async mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            if (this.$store.state.all.limit1) {
                this.limit = await this.$store.state.all.limit1;
            }

            this.$axios
                .$get(`home/discount?page=${this.page}&limit=${this.limit}`, {
                    discount: true
                })
                .then(res => {
                    this.popular = res.data;
                });
        },
        updatePopular() {
            this.limit = this.limit + 10;
            this.$store.commit("LIMIT_1", this.limit);
            this.getData();
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
<style lang="scss"></style>
