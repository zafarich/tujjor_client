<template>
    <div id="filter">
        <div class="container">
            <div class="title-filter">
                <select v-model="filter.sort">
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

            <div class="filter-content">
                <div class="filter-nav">
                    <h5 class="filter-title">
                        {{ $t("sortPrice") }}
                    </h5>

                    <div class="filter-range">
                        <vue-slider
                            v-model="priceRange"
                            :min="0"
                            :max="400000"
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
                                {{ beautySum(priceRange[0]) }} {{ $t("sum") }}
                            </h6>
                            <h6>-</h6>
                            <h6>
                                {{ beautySum(priceRange[1]) }} {{ $t("sum") }}
                            </h6>
                        </div>
                    </div>

                    <h5 class="filter-title">
                        {{ $t("sortBrand") }}
                    </h5>

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
                </div>
                <div class="filter-right">
                    <div class="card-row">
                        <div
                            class="card-4"
                            v-for="product in products"
                            :key="product._id"
                        >
                            <ProductCard :product="product" />
                        </div>
                    </div>

                    <div class="btn-again">
                        <button>{{ $t("all") }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            priceRange: [0, 400000],
            filter: {
                page: 1,
                limit: 12,
                category: [],
                brand: [],
                search: "",
                start: "",
                end: "",
                sort: ""
            },
            brands: []
        };
    },
    async mounted() {
        if (this.$route.query.category) {
            this.getChildren(
                this.$route.query.category,
                this.$store.state.all.categoryAll
            );
        }

        let filterNav = await this.$axios.$post(`product/count`, this.filter);

        filterNav.brands.forEach(item => {
            let brand = this.$store.state.all.brandsAll.find(
                i => i._id == item
            );
            this.brands.push(brand);
        });

        await this.getData();
    },
    methods: {
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
            let products = await this.$axios.$post(
                `product/filter?page=${this.filter.page}&limit=${this.filter.limit}`,
                this.filter
            );
        }
    }
};
</script>

<style lang="scss">
div#filter {
    padding: 15px 0px;
    div.title-filter {
        display: flex;
        justify-content: flex-end;

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
        div.filter-nav {
            width: 265px;
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
            padding-left: 15px;
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
</style>
