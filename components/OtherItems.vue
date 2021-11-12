<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>

        <section class="container popular__container" v-if="isGet">
            <div class="grid">
                <div class="left" v-if="bannerOne.length > 0">
                    <a :href="`${bannerOne[0].url}&lang=${$i18n.locale}`">
                        <img
                            v-if="$i18n.locale == 'ru'"
                            :src="$cdn + bannerOne[0].image.ru"
                            alt=""
                        />
                        <img
                            v-if="$i18n.locale == 'uz'"
                            :src="$cdn + bannerOne[0].image.uz"
                            alt=""
                        />
                    </a>
                </div>
                <div class="right">
                    <div class="rtop" v-if="bannerTwo.length > 0">
                        <a :href="`${bannerTwo[0].url}&lang=${$i18n.locale}`">
                            <img
                                v-if="$i18n.locale == 'ru'"
                                :src="$cdn + bannerTwo[0].image.ru"
                                alt="Other item photo"
                            />
                            <img
                                v-if="$i18n.locale == 'uz'"
                                :src="$cdn + bannerTwo[0].image.uz"
                                alt="Other item photo"
                            />
                        </a>
                    </div>
                    <div class="rbottom">
                        <div class="rb" v-if="bannerThree.length > 0">
                            <a
                                :href="
                                    `${bannerThree[0].url}&lang=${$i18n.locale}`
                                "
                            >
                                <img
                                    v-if="$i18n.locale == 'ru'"
                                    :src="$cdn + bannerThree[0].image.ru"
                                    alt="Other item photo"
                                />
                                <img
                                    v-if="$i18n.locale == 'uz'"
                                    :src="$cdn + bannerThree[0].image.uz"
                                    alt="Other item photo"
                                />
                            </a>
                        </div>
                        <div class="rb" v-if="bannerFour.length > 0">
                            <a
                                :href="
                                    `${bannerFour[0].url}&lang=${$i18n.locale}`
                                "
                            >
                                <img
                                    v-if="$i18n.locale == 'ru'"
                                    :src="$cdn + bannerFour[0].image.ru"
                                    alt="Other item photo"
                                />
                                <img
                                    v-if="$i18n.locale == 'uz'"
                                    :src="$cdn + bannerFour[0].image.uz"
                                    alt="Other item photo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-row">
                <div
                    class="card-5"
                    v-for="product in allProducts.data"
                    :key="product._id"
                >
                    <ProductCard :product="product" />
                </div>
            </div>

            <a
                href="#"
                class="popular__btn text-center"
                v-if="allProducts.data.length >= allProducts.limit"
                @click.prevent="updateFetchLimit"
                >{{ $t("all") }}</a
            >
        </section>
    </section>
</template>

<script>
import BaseLoading from "../components/UI/BaseLoading.vue";
export default {
    components: {
        BaseLoading
    },
    data() {
        return {
            slide: 0,
            sliding: null,

            bannerOne: [],
            bannerTwo: [],
            bannerThree: [],
            bannerFour: [],
            bannerFive: [],

            allProducts: {
                data: [],
                page: 1,
                limit: 20
            },
            isGet: false
        };
    },
    methods: {
        async updateFetchLimit() {
            this.allProducts.limit += 20;
            this.allProducts.page += 1;
            const products = await this.fetchProduct();
            products.data.forEach(item => {
                this.allProducts.data.push(item);
            });
        },

        async fetchProduct() {
            const page = this.allProducts.page;
            const res = await this.$axios
                .$post("product/filter?page=" + page + "&limit=" + 20, {
                    category: [],
                    brand: [],
                    search: "",
                    sort: "",
                    start: null,
                    end: null
                })
                .then(response => {
                    if (response.success) {
                        console.log("search", response);
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));
            return res;
        },

        //  go to product on click card of product
        goToProduct(slug) {
            this.$router.push({
                name: "product-id",
                params: { id: slug }
            });
        },

        // update price on currency format
        updatePriceFormat(price) {
            const form = new Intl.NumberFormat("en-US").format(price);
            return form.replaceAll(",", " ");
        },

        // banner option
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    },

    async mounted() {
        const products = await this.fetchProduct();
        this.allProducts.data = products.data;
        this.isGet = true;

        // banner options
        let res = await this.$axios.get("/banner/all");
        let data = res.data.data;

        let one = data.filter(item => item.position == 1);
        let two = data.filter(item => item.position == 2);
        let three = data.filter(item => item.position == 3);
        let four = data.filter(item => item.position == 4);
        let five = data.filter(item => item.position == 5);

        this.bannerOne = one;
        this.bannerTwo = two;
        this.bannerThree = three;
        this.bannerFour = four;
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
<style lang="scss">
.grid {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    height: 450px;
    div {
        overflow: hidden;
        width: calc((100% - 20px) / 2);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .left {
        height: 100%;
    }
    .right {
        display: flex;
        flex-direction: column;
        .rtop {
            height: calc((100% - 20px) / 2);
            width: 100%;
            margin-bottom: 20px;
        }
        .rbottom {
            height: calc((100% - 20px) / 2);
            width: 100%;
            display: flex;
            justify-content: space-between;
            .rb {
                width: calc((100% - 20px) / 2);
            }
        }
    }
}
.other__item__banner {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    padding: 5px;
    margin-bottom: 10px;

    &--carousel {
        flex-basis: 49%;
        height: auto;
        margin-right: 9px;

        overflow: hidden;
        border-radius: 5px;

        .b-carousel {
            width: 100% !important;
            height: 100% !important;
            .carousel-inner {
                width: 100% !important;
                height: 100% !important;

                .b-carousel-slide {
                    width: 100% !important;
                    height: 100% !important;
                    img {
                        width: 100% !important;
                        object-fit: cover;
                    }
                }
            }
        }
    }
    &--banner--box {
        flex-basis: 49%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: flex-start;
    }

    &--banner--1 {
        flex-basis: 100%;
        height: 49%;
        margin-bottom: 1%;
        overflow: hidden;
        border-radius: 5px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &--banner--2,
    &--banner--3 {
        flex-basis: 49%;
        height: 49%;
        overflow: hidden;
        border-radius: 5px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

@media only screen and (max-width: 1200px) and (min-width: 765px) {
    .other__item__banner {
        &--banner {
            flex-basis: 30%;
        }
    }
}

@media only screen and (max-width: 543px) {
    .grid {
        flex-direction: column;
        height: unset;
        div.left {
            height: 450px;
            width: 100%;
            margin-bottom: 20px;
            img {
                object-fit: cover;
            }
        }
        div.right {
            width: 100%;
            div {
                height: calc(450px / 2) !important;
            }
        }
    }

    .other__item__banner {
        &--carousel {
            flex-basis: 100%;
            height: auto;
            margin-right: 0;
            margin-bottom: 5px;

            .banner--carousel--img {
                width: 100%;
                height: 100%;
            }
        }

        &--banner--box {
            flex-basis: 100%;
        }
    }
}

@media only screen and (max-width: 575px) {
   .grid {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    height: unset !important;
    div {
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .left {
        height: unset !important;
        margin-bottom: 10px !important;
    }
    .right {
      
        .rtop {
            height: unset !important;
            margin-bottom:  10px !important
            
        }
        .rbottom {
               height: unset !important;
           ;
            .rb {
                width: calc((100% - 10px) / 2);
                   height: unset !important;
            }
        }
    }
}
    .other__item__banner {
        &--carousel {
            display: none;
        }
    }
}
</style>
