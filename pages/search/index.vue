<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>

        <div class="filtr__section">
            <div class="product-show">
                <div class="container">
                    <!-- <div class="title-box">
                        <ul>
                            <li v-if="linksForTitle.length > 0">
                                <nuxt-link :to="linksForTitle">
                                    {{ linksForTitle }}
                                </nuxt-link>
                                /
                            </li>

                            <li
                                v-if="categoryLinksForTitle.length > 0"
                                v-for="title in categoryLinksForTitle"
                                :key="title._id"
                            >
                                <nuxt-link :to="title._id">
                                    {{ title.name.uz }}
                                </nuxt-link>
                                /
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>

            <section class="container popular__container search__noData">
                <div class="popular__heading">
                    {{ $t("notfound") }}
                </div>
            </section>
        </div>

        <div class="filtr__section">
            <div class="product-show">
                <div class="container">
                    <!-- <div class="title-box">
                        <ul>
                            <li v-if="linksForTitle.length > 0">
                                <nuxt-link :to="linksForTitle">
                                    {{ linksForTitle }}
                                </nuxt-link>
                                /
                            </li>

                            <li
                                v-if="categoryLinksForTitle.length > 0"
                                v-for="title in categoryLinksForTitle"
                                :key="title._id"
                            >
                                <nuxt-link :to="title._id">
                                    {{ title.name.uz }}
                                </nuxt-link>
                                /
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>

            <section
                class="container popular__container catalog__page__filtr__box"
            >
                <div class="popular__dropdown__box">
                    <div class="person__home--description">
                        <select
                            name="region"
                            id="region"
                            v-model="filter.sort"
                            @change="filterBySort()"
                        >
                            <option value="" disabled selected>
                                {{ $t("sortBy") }}
                            </option>
                            <option value="new"> {{ $t("sortNew") }} </option>
                            <option value="popular">
                                {{ $t("sortPop") }}
                            </option>
                            <option value="priceDown">
                                {{ $t("sortUb") }}
                            </option>
                            <option value="priceUp">
                                {{ $t("sortVoz") }}
                            </option>
                        </select>
                    </div>
                </div>
            </section>

            <section class="catalog__container container">
                <div class="catalog__filtraiton__box" v-if="!isProductOnlyOne">
                    <form @submit.prevent class="filtraiton__form__box">
                        <h5
                            class="filtraiton__header"
                            v-if="!isSliderPricesEqual"
                        >
                            {{ $t("sortPrice") }}
                        </h5>

                        <div class="input__range" v-if="!isSliderPricesEqual">
                            <vue-slider
                                v-model="sliderValue"
                                :min="sliderMinPrice"
                                :max="sliderMaxPrice"
                                :interval="1"
                                :process-style="{
                                    backgroundColor: '#FE9E0D'
                                }"
                                :tooltip-style="{
                                    backgroundColor: 'black',
                                    borderColor: 'black'
                                }"
                            ></vue-slider>
                        </div>

                        <h5
                            class="filtraiton__header"
                            v-if="brandsOnPage.length > 1"
                        >
                            {{ $t("sortBrand") }}
                        </h5>

                        <div
                            class="center__input__label"
                            v-for="brand in brandsOnPage"
                            :key="brand._id"
                        >
                            <input
                                class="filtraiton__form--input"
                                type="checkbox"
                                v-model="filter.brands"
                                :id="brand._id"
                                :name="brand"
                                :value="brand._id"
                            />
                            <label
                                class="filtraiton__form--label"
                                :for="brand._id"
                            >
                                {{ brand.name }}</label
                            ><br />
                        </div>
                        <div class="submit__box">
                            <input
                                class="filtraiton__form--submit"
                                type="submit"
                                value="Фильтр"
                                @click.prevent="filterProducts"
                            />
                        </div>
                    </form>
                </div>
                <div class="catalog__page__about">
                    <loading-on-blocks
                        v-if="!filter.isGetData"
                    ></loading-on-blocks>
                    <section
                        class="container popular__container"
                        v-if="filter.isGetData && products.length > 0"
                    >
                        <div class="card-row">
                            <div
                                class="card-4"
                                v-for="product in products"
                                :key="product._id"
                            >
                                <ProductCard :product="product" />
                            </div>
                        </div>

                        <a
                            href="#"
                            class="popular__btn"
                            v-if="products.length >= limit"
                            @click.prevent="showProductMore"
                            >Показать ещё</a
                        >
                    </section>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import LoadingOnBlocks from "../../components/UI/LoadingOnBlocks.vue";
import BaseLoading from "../../components/UI/BaseLoading.vue";
export default {
    components: { LoadingOnBlocks, BaseLoading },

    data() {
        return {
            sliderMaxPrice: 0,
            sliderMinPrice: 0,
            isSliderPricesEqual: false,
            isProductOnlyOne: false,
            sliderValue: [5000, 100000],
            linksForTitle: "",
            categoryLinksForTitle: [],
            brandsOnPage: [],

            isGet: false,
            noData: false,

            filter: {
                sort: "",
                brands: [],
                start: null,
                end: null,
                isGetData: false
            },

            products: [],
            page: 1,
            limit: 12
        };
    },

    computed: mapGetters(["searchBody"]),

    methods: {
        ...mapActions(["searchProduct", "productCount"]),
        ...mapMutations([
            "setSearchBrand",
            "setSearchPriceStart",
            "setSearchPriceEnd",
            "setSearchSort",
            "resetSearchSettings",
            "setSearchShop"
        ]),

        async fetchAllBrands() {
            return await this.$axios
                .$get("brand/all")
                .then(response => {
                    if (response.success) {
                        return response.data;
                    } else {
                        throw new Error("Could not fetch data");
                    }
                })
                .catch(err => console.error(err));
        },

        // add to router link on the top of page
        addLinksOnTheTopPage() {
            if (this.searchBody.search.length > 0) {
                this.linksForTitle = this.searchBody.search;
            } else {
                if (!!this.searchBody.mainCategory.name)
                    this.categoryLinksForTitle.push(
                        this.searchBody.mainCategory
                    );

                if (!!this.searchBody.childCategory.name)
                    this.categoryLinksForTitle.push(
                        this.searchBody.childCategory
                    );
            }
        },

        // filter brands for page to show
        filterBrandForShowOnPage(data, brands) {
            if (data.count > 0) {
                brands.forEach(item => {
                    if (data.brands.includes(item._id)) {
                        this.brandsOnPage.push(item);
                    }
                });
            }
        },

        // filter max end min value in search product and show
        filterMaxAndMin(search) {
            if (search.data.length > 0) {
                const maxValue = search.data.reduce(function(acc, item) {
                    acc.price < item.price ? (acc = item) : acc;
                    return acc;
                });
                const minValue = search.data.reduce(function(acc, item) {
                    acc.price > item.price ? (acc = item) : acc;
                    return acc;
                });
                [this.sliderMinPrice, this.sliderMaxPrice] = [
                    minValue.price,
                    maxValue.price
                ];
                if (minValue.price === maxValue.price) {
                    this.isSliderPricesEqual = true;
                }
                this.sliderValue = [minValue.price, maxValue.price];
            }
        },
        // filter products on click on filter
        async filterProducts() {
            const [start, end, brand] = [
                this.sliderValue[0],
                this.sliderValue[1],
                this.filter.brands
            ];

            const page = this.page;
            const limit = 12;

            this.setSearchPriceStart(start);
            this.setSearchPriceEnd(end);
            this.setSearchBrand(brand);
            this.filter.isGetData = false;
            const search = await this.searchProduct({ page, limit });
            this.products = search.data;
            this.filter.isGetData = true;
        },

        // sort products
        async filterBySort() {
            const page = this.page;
            const limit = 12;
            this.setSearchSort(this.filter.sort);
            this.filter.isGetData = false;
            const search = await this.searchProduct({ page, limit });
            this.products = search.data;
            this.filter.isGetData = true;
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

        async showProductMore() {
            this.limit += 12;
            this.page += 1;
            const page = this.page;
            const limit = 12;
            const search = await this.searchProduct({ page, limit });
            search.data.forEach(item => {
                this.products.push(item);
            });
        }
    },

    async mounted() {
        if (this.$route.query.lang == "uz") {
            this.$i18n.setLocale("uz");
        }
        if (this.$route.query.lang == "ru") {
            this.$i18n.setLocale("ru");
        }
        const page = this.page;
        const limit = 12;
        let [brands, Allbrands, search] = await Promise.all([
            this.productCount(),
            this.fetchAllBrands(),
            this.searchProduct({ page, limit })
        ]);
        this.products = search.data;
        this.filter.isGetData = this.isGet = true;

        // add to router link on the top of page
        this.addLinksOnTheTopPage();

        if (search.data.length === 1) {
            this.isProductOnlyOne = true;
        } else {
            // filter brands for page to show
            this.filterBrandForShowOnPage(brands, Allbrands);

            //     // filter max end min value in search product and show
            this.filterMaxAndMin(search);
        }

        if (search.data.length === 0) this.noData = true;
    }
};
</script>

<style lang="scss">
.filtr__section {
    .search__noData {
        height: 50vh;
        display: flex;

        .popular__heading {
            margin-top: 10%;
            text-align: center;
        }
    }

    .product-show {
        .container {
            .title-box {
                padding-bottom: 0;
            }
        }
    }
    .catalog__page__filtr__box {
        margin-top: 0;
        display: flex;
        justify-content: flex-end;

        .popular__dropdown__box {
            .person__home--description {
                span {
                    font-family: Roboto, sans-serif;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 28px;
                    /* identical to box height, or 168% */
                    color: #000000;
                }

                input,
                select {
                    width: 180px;
                    // border: ;
                    border: 1.4px solid #f7931e;
                    outline: none;
                    background-color: transparent;
                    padding: 3px 10px;
                    border-radius: 5px;

                    /* asosiy */

                    text-align: left;
                    font-family: Roboto, sans-serif;
                    color: #f7931e;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 28px;

                    // To center vector png
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                /* Firefox */
                input[type="number"] {
                    -moz-appearance: textfield;
                }

                select {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;

                    background-image: url("@/assets/img/other/vector.png");
                    background-repeat: no-repeat;
                    background-position: 97% 50%;
                }
            }
        }
    }
}
.catalog__container {
    margin-top: 15px;
    display: flex;

    .catalog__filtraiton__box {
        flex-shrink: 0;
        flex-basis: 230px;

        padding: 0 8px;

        .filtraiton__header {
            font-family: Roboto;
            font-size: 18px;
            line-height: 100%;
            color: #000000;

            padding-bottom: 13px;
            border-bottom: 1px solid rgba(102, 102, 102, 0.5);

            &:not(:first-child) {
                padding-top: 13px;
            }
        }

        .filtraiton__form__box {
            .input__range {
                padding: 18px 4px 9px;
            }

            padding: 5px 0;

            .center__input__label {
                display: flex;
                align-items: center;
                .filtraiton__form--input {
                    width: 16px;
                    height: 16px;
                }
                .filtraiton__form--input,
                .filtraiton__form--label {
                    cursor: pointer;
                    padding: 0;
                    margin: 0 0 8px;

                    &:hover {
                        opacity: 0.7;
                    }
                }

                .filtraiton__form--label {
                    font-size: 16px;
                    font-weight: 500;
                    padding: 0 10px;
                }
            }
            .filtraiton__form--submit {
                margin-top: 15px;
                margin-bottom: 50px;

                background: #003466;
                border-radius: 5px;
                width: 119px;
                height: 36px;

                font-size: 14px;
                color: #fff;

                transition: all 0.2s;
                @include hover__active--animation;
                &:hover {
                    background-color: rgba(0, 52, 102, 0.9);
                }
            }
        }
    }

    .catalog__page__about {
        margin-bottom: 40px;
        flex-grow: 1;
        padding-left: 20px;
        .popular__container {
            margin: 0;
            padding: 0;
        }

        .catalog__page__btn--box {
            margin: 70px 0;
            height: auto;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .catalog__page--btn {
                background-color: #dddddd;
                width: 36px;
                height: 31px;
                border-radius: 5px;

                color: #252424;
                font-weight: 700;
                &:not(:last-child) {
                    margin-right: 15px;
                }

                display: flex;
                justify-content: center;
                align-items: center;

                &--active {
                    background-color: #f7931e;
                    color: #fff;
                }
            }
        }
    }
}
@media only screen and (max-width: 1200px) {
    .catalog__container {
        margin-top: 0;
    }
}
@media only screen and (max-width: 960px) {
    .catalog__container {
        .catalog__filtraiton__box {
            flex-basis: 245px;
        }
    }
}

@media only screen and (max-width: 768px) {
    .catalog__container {
        .catalog__page__about {
            .catalog__page__btn--box {
                .catalog__page--btn {
                    width: 31px;
                    height: 27px;
                }
            }
        }
    }
}

@media only screen and (max-width: 633px) {
    .catalog__container {
        .catalog__filtraiton__box {
            flex-basis: 225px;
        }
    }
}

@media only screen and (max-width: 602px) {
    .catalog__container {
        flex-wrap: wrap;
        .catalog__filtraiton__box {
            flex-basis: 100%;

            .submit__box {
                display: flex;
                justify-content: center;
            }
        }

        .catalog__page__about {
            .catalog__page__btn--box {
                justify-content: center;
            }
        }
    }

    .filtr__section {
        position: relative;
        .catalog__page__filtr__box {
            justify-content: flex-start;
            width: 100%;
        }
    }
}

@media only screen and (max-width: 395px) {
    .catalog__container {
        .catalog__page__about {
            .popular__item-box {
                justify-content: space-between;
            }
        }
    }
}

@media only screen and (max-width: 370px) {
    .catalog__container {
        .catalog__page__about {
            .catalog__page__btn--box {
                justify-content: space-between;
                .catalog__page--btn {
                    &:not(:last-child) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>
