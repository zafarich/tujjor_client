<template>
    <div id="filter">
        <base-loading v-if="!isGet"></base-loading>
        <div class="container">
            <div v-if="products.length > 0">
                <div class="filter-content">
                    <div class="filter-nav">
                        <h5 class="filter-title">{{ $t("sortPrice") }}</h5>

                        <div class="filter-range">
                            <vue-slider
                                v-model="priceRange"
                                :min="0"
                                :max="4000000"
                                :interval="5000"
                                :process-style="{
                                    backgroundColor: '#FE9E0D'
                                }"
                                :tooltip-style="{
                                    backgroundColor: 'black',
                                    borderColor: 'black'
                                }"
                            ></vue-slider>

                            <div class="prices">
                                <h6>
                                    {{ beautySum(priceRange[0]) }}
                                    {{ $t("sum") }}
                                </h6>
                                <h6>-</h6>
                                <h6>
                                    {{ beautySum(priceRange[1]) }}
                                    {{ $t("sum") }}
                                </h6>
                            </div>
                        </div>

                        <h5 class="filter-title">{{ $t("sortBrand") }}</h5>

                        <div class="filter-brand">
                            <label
                                class="cont"
                                v-for="(item, index) in brands"
                                :key="index"
                            >
                                {{ item.name }}
                                <input
                                    type="checkbox"
                                    v-model="filter.brand"
                                    :value="item._id"
                                />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="btn-sor">
                            <button class="filter-btn" @click="filterData">
                                {{ $t("sarfil") }}
                            </button>
                        </div>
                    </div>
                    <div class="filter-right" v-if="products.length > 0">
                        <div class="title-filter">
                            <select v-model="filter.sort" @change="changeSort">
                                <option value disabled selected>{{
                                    $t("sortBy")
                                }}</option>
                                <option value="new">{{ $t("sortNew") }}</option>
                                <option value="popular">{{
                                    $t("sortPop")
                                }}</option>
                                <option value="priceDown">{{
                                    $t("sortUb")
                                }}</option>
                                <option value="priceUp">{{
                                    $t("sortVoz")
                                }}</option>
                            </select>
                        </div>
                        <div class="card-row">
                            <div
                                class="card-4"
                                v-for="product in products"
                                :key="product._id"
                            >
                                <ProductCard :product="product" />
                            </div>
                        </div>

                        <div
                            class="btn-again"
                            v-if="filterLimit != filter.page"
                        >
                            <button @click="addProducts">
                                {{ $t("all") }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>
                <h4>{{ $t("err4") }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import BaseLoading from "../../components/UI/BaseLoading.vue";
export default {
    components: { BaseLoading },
    data() {
        return {
            priceRange: [0, 4000000],
            filter: {
                page: 1,
                limit: 12,
                category: [],
                brand: [],
                search: "",
                start: 0,
                end: 0,
                sort: ""
            },
            brands: [],
            products: [],
            page: 1,
            filterLimit: 0,
            isGet: false
        };
    },
    async mounted() {
        if (this.$route.query.category) {
            this.getChildren(
                this.$route.query.category,
                this.$store.state.all.categoryAll
            );
        }

        if (this.$route.query.search) {
            this.filter.search = this.$route.query.search;
        }
        let filterNav = await this.$axios.$post(`product/count`, this.filter);

        if (filterNav.count) {
            this.filterLimit = Math.ceil(filterNav.count / this.filter.limit);

            filterNav.brands.forEach(item => {
                let brand = this.$store.state.all.brandsAll.find(
                    i => i._id == item
                );
                this.brands.push(brand);
            });
        }
        await this.getData();
    },
    methods: {
        async filterData() {
            this.filter.start = this.priceRange[0];
            this.filter.end = this.priceRange[1];

            this.filter.page = 1;
            this.products = [];
            await this.getNav();
            await this.getData();
        },

        async getNav() {
            let filterNav = await this.$axios.$post(
                `product/count`,
                this.filter
            );

            this.filterLimit = Math.ceil(filterNav.count / this.filter.limit);
        },
        changeSort() {
            this.getData();
        },
        // get find all children
        getChild(category) {
            category.forEach(item => {
                this.filter.category.push(item._id);
                if (item.children.length > 0) {
                    this.getChild(item.children);
                }
            });
        },

        // find id category
        getChildren(id, category) {
            category.forEach(item => {
                if (item._id == id) {
                    this.filter.category.push(item._id);
                    if (item.children.length > 0) {
                        this.getChild(item.children);
                    }
                } else if (item.children.length > 0 && item._id != id) {
                    this.getChildren(id, item.children);
                }
            });
        },

        async getData() {
            this.isGet = false;
            let products = await this.$axios.$post(
                `product/filter?page=${this.filter.page}&limit=${this.filter.limit}`,
                this.filter
            );
            this.products = products.data;

            this.isGet = true;
        },
        async addProducts() {
            if (this.filterLimit > this.filter.page) {
                this.filter.page = this.filter.page + 1;
                let products = await this.$axios.$post(
                    `product/filter?page=${this.filter.page}&limit=${this.filter.limit}`,
                    this.filter
                );

                this.products = this.products.concat(products.data);
            }
        }
    }
};
</script>

<style lang="scss">
div#filter {
    padding: 15px 0px;
    margin-top: 50px;
    div.title-filter {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        select {
            background: #ffffff;
            cursor: pointer;
            border: 1px solid #f7931e;
            box-sizing: border-box;
            border-radius: 5px;
            font-weight: normal;
            font-size: 16px;
            line-height: 100%;
            // height: 36px;
            padding: 5px 10px;
            color: #fb8500;
            &:focus {
                outline: none;
            }
        }
    }

    div.filter-brand {
        .cont {
            display: block;
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            font-weight: normal;
            font-size: 16px;
            line-height: 100%;
            cursor: pointer;
            color: #000000;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        /* Hide the browser's default checkbox */
        .cont input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 17px;
            width: 17px;
            border-radius: 2px;
            border: 1px solid #f7931e;
            background-color: #fff;
        }

        /* On mouse-over, add a grey background color */
        .cont:hover input ~ .checkmark {
            background-color: #fdf4e8;
        }

        /* When the checkbox is checked, add a blue background */
        .cont input:checked ~ .checkmark {
            background-color: #f7931e;
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }

        /* Show the checkmark when checked */
        .cont input:checked ~ .checkmark:after {
            display: block;
        }

        /* Style the checkmark/indicator */
        .cont .checkmark:after {
            left: 6px;
            top: 2px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }

    div.filter-content {
        display: flex;
        button.filter-btn {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            padding: 10px 30px;
            color: #ffffff;
            background: #003466;
            border-radius: 5px;
            border: none;
            margin-top: 15px;
        }
        div.filter-nav {
            width: 265px;
            padding-top: 50px;

            h5.filter-title {
                font-weight: 500;
                font-size: 18px;
                line-height: 100%;
                padding-bottom: 15px;
                color: #000000;
                border-bottom: 1px solid #b5b0a1;
                margin-bottom: 10px;
            }
            div.filter-range {
                margin-top: 25px;
                margin-bottom: 25px;
                div.prices {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;
                    h6 {
                        font-size: 13px;
                    }
                }
            }
        }

        div.filter-right {
            width: calc(100% - 265px);
            padding-left: 20px;
        }

        div.btn-again {
            display: flex;
            justify-content: center;
            button {
                background: #f7931e;
                border: 1px solid #f7931e;
                box-sizing: border-box;
                box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
                border-radius: 5px;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #fcf6f6;
                padding: 10px 20px;
                transition: 0.3s;

                &:hover {
                    background: #fff;
                    color: #f7931e;
                }
            }
        }
    }
}
@media only screen and (max-width: 440px) {
    #filter {
        margin-top: 0px !important;
    }
    .fil-btn {
        display: flex;
        justify-content: center;
    }
    .filter-content {
        flex-direction: column;
        .filter-nav {
            width: 100% !important;
            margin-bottom: 50px;
            padding-top: 20px !important;
            .btn-sor {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .filter-right {
            padding-left: 0 !important;
            width: 100% !important;
            .title-filter {
                justify-content: flex-start !important;
            }
        }
    }
}
</style>
