<template>
    <section>
        <section class="container popular__container" v-if="popular != null">
            <div class="popular__heading">{{ $t("popular") }}</div>

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
            this.limit = await this.$store.state.all.limit3;

            this.$axios
                .$post(`product/filter?page=${this.page}&limit=${this.limit}`, {
                    sort: "popular"
                })
                .then(res => {
                    this.popular = res.data;
                });
        },
        updatePopular() {
            this.limit = this.limit + 10;
            this.$store.commit("LIMIT_3", this.limit);

            this.getData();
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
<style lang="scss">
// MAIN PAGE CONTAINER

.popular__container {
    margin-top: 80px;
    // padding: 0 80px;

    .popular__heading {
        font-family: Roboto, sans-serif;
        font-weight: 500;
        font-size: 48px;
        color: #f7931e;
        margin-bottom: 5px !important;
        text-shadow: 0px 0px 3px rgba(247, 147, 30, 0.3);
        display: inline-block;
    }

    .popular__item-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        &::after {
            content: "";
            flex: 0 1 32%;
        }

        .popular__items {
            flex: 0 0 auto;
            width: 222px;
            height: 355px !important;
            background-color: #ffffff;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
            border-radius: 5px;
            overflow: hidden;
            margin: 0 2px;
            margin-bottom: 37px;

            cursor: pointer;
            transition: all 0.2s;

            @include hover__active--animation;

            .popular__items__img {
                width: 222px;
                height: 222px;
            }
            .popular__items__desription {
                padding-left: 16px;

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                position: relative;

                &--name {
                    margin-top: 5px;
                    font-family: Roboto;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 1.2 !important;
                    height: 1.1em !important;
                    opacity: 0.7;
                    color: #666666;
                }

                &--categorie {
                    margin: 9px 0;
                    font-family: Roboto;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 1.1 !important;
                    height: 3.2em !important;
                    color: #000000;
                    overflow: hidden !important;
                }

                &--price {
                    flex-basis: 80% !important;
                    width: 80% !important;
                    font-family: Roboto;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 100%;
                    margin-top: 4px !important;
                    color: #219ebc;
                }

                &--old--price {
                    margin-top: 0 !important;
                    margin-bottom: 0 !important;
                    font-size: 14px;
                    color: #f7931e;
                    text-decoration: line-through;
                }
            }
        }
    }
    .popular__btn {
        &,
        &:link,
        &:visited {
            display: block;
            border-radius: 5px;
            transition: all 0.2s;

            width: 224px;
            height: 50px;

            margin: 0 auto;
            margin-top: 20px;
            padding: 10px;
            text-align: center;
            text-decoration: none;
            font-family: inherit;
            font-weight: 500;
            font-size: 18px;
            color: rgb(255, 255, 255, 0.9);

            // Change for the <button> element
            background-color: #f7931e;
            border: none;
            cursor: pointer;
        }

        @include hover__active--animation;
    }
}

@media only screen and (max-width: 1440px) and (min-width: 1200px) {
    .popular__container {
        .popular__item-box {
            padding: 0 4px;
        }
    }
}

@media only screen and (max-width: 1200px) and (min-width: 765px) {
    .popular__container {
        margin-top: 10px !important;
        padding: 20px;
        .popular__item-box {
            .popular__items {
                width: 229px;
                height: 358px !important;
                margin-bottom: 22px;

                .popular__items__img {
                    width: 230px;
                    height: 230px;
                }
            }
        }
    }
}

@media only screen and (max-width: 765px) {
    .popular__container {
        padding: 16px;
        margin-top: 10px !important;
        .popular__heading {
            font-size: 22px;
            margin-bottom: 28px;
        }

        .popular__item-box {
            .popular__items {
                width: 164px;
                height: 255px !important;
                margin-bottom: 14px;

                .popular__items__img {
                    width: 164px;
                    height: 164px;
                }
                .popular__items__desription {
                    padding-left: 12px;

                    &--name {
                        margin-top: 3.7px;
                        font-size: 10px;
                    }

                    &--categorie {
                        margin: 0;
                        margin-top: 6.6px;
                        font-size: 12px;
                        height: 50px;
                        padding: 0;
                    }

                    &--price {
                        font-size: 14px;
                    }

                    &--old--price {
                        font-size: 10px;
                    }
                }
            }
        }

        .popular__btn {
            &,
            &:link,
            &:visited {
                width: 160px;
                height: 35px;

                margin-top: 18px;
                padding: 8px;
                font-size: 12px;
            }
        }
    }
}

@media only screen and (max-width: 365px) {
    .popular__container {
        padding: 14px;
        .popular__heading {
            font-size: 22px;
            margin-bottom: 12px;
        }

        .popular__item-box {
            .popular__items {
                width: 140px;
                height: 225px !important;
                .popular__items__img {
                    width: 140px;
                    height: 140px;
                }
                .popular__items__desription {
                    &--categorie {
                        margin-top: 3.6px;
                        font-size: 12px;
                        height: 47px;
                        padding: 0;
                    }

                    &--price {
                        font-size: 12px;
                    }

                    &--old--price {
                        font-size: 9px;
                        bottom: 17px;
                    }
                }
            }
        }
    }
}
</style>
