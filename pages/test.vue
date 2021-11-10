<template>
    <div>
        <button @click="isCategoryModal = true">Category</button>
        <button @click="visibleMobile = true">Mobile</button>
        <div
            @click="isCategoryModal = false"
            v-if="isCategoryModal"
            class="fixvh-category"
        ></div>
        <div
            :class="
                isCategoryModal
                    ? 'category-modal'
                    : 'hidden-category category-modal'
            "
            v-if="categoryAll != null"
        >
            <div class="category-nav">
                <button class="close-btn" @click="isCategoryModal = false">
                    <fa class="icon-times" icon="times" />
                </button>
                <div class="category-left scroll-modal">
                    <ul>
                        <li
                            :class="tabIndex == index ? 'active-li' : ''"
                            v-for="(item, index) in categoryAll"
                            :key="index"
                        >
                            <button @click="clickParent(item, index)">
                                {{ item.name[$i18n.locale] }}
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="category-content scroll-modal">
                    <h3 class="category-title">
                        {{ visibleCategory.name[$i18n.locale] }}
                    </h3>

                    <div class="category-child">
                        <div
                            class="row"
                            v-if="visibleCategory.children.length > 0"
                        >
                            <div
                                class="col-lg-4 "
                                v-for="(item,
                                index) in visibleCategory.children"
                                :key="index"
                            >
                                <nuxt-link
                                    class="click-parent"
                                    :to="{
                                        name: `search-id___${$i18n.locale}`,
                                        params: { id: item._id }
                                    }"
                                >
                                    {{ item.name[$i18n.locale] }}
                                </nuxt-link>

                                <ul v-if="item.children.length > 0">
                                    <li
                                        v-for="(child, i) in item.children"
                                        :key="i"
                                    >
                                        <nuxt-link
                                            :to="{
                                                name: `search-id___${$i18n.locale}`,
                                                params: { id: child._id }
                                            }"
                                            >{{
                                                child.name[$i18n.locale]
                                            }}</nuxt-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div v-else class="visible-all">
                            <nuxt-link
                                :to="{
                                    name: `search-id___${$i18n.locale}`,
                                    params: { id: visibleCategory._id }
                                }"
                            >
                                Barchasini ko'rish
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="category-mobile"
            v-if="categoryAll != null && visibleMobile"
        >
            <div class="title-t">
                <h3>{{ $t("cat") }}</h3>

                <button @click="visibleMobile = false">
                    <fa icon="times" class="close-mobile" />
                </button>
            </div>

            <div class="category-acc">
                <div
                    class="acc-item"
                    v-for="(item, index) in categoryAll"
                    :key="index"
                >
                    <button @click="clickAcc(index)">
                        <b> {{ item.name[$i18n.locale] }} </b>
                        <fa
                            icon="chevron-down"
                            :class="
                                indexAcc == index
                                    ? 'rotate icon-down'
                                    : 'icon-down'
                            "
                        />
                    </button>

                    <div class="acc-content" v-if="indexAcc == index">
                        <ul v-if="item.children.length > 0">
                            <li v-for="(child, i) in item.children" :key="i">
                                <nuxt-link
                                    :to="{
                                        name: `search-id___${$i18n.locale}`,
                                        params: { id: child._id }
                                    }"
                                >
                                    {{ child.name[$i18n.locale] }}
                                </nuxt-link>

                                <ul v-if="child.children.length > 0">
                                    <li
                                        v-for="(grandchild,
                                        j) in child.children"
                                        :key="j"
                                    >
                                        <nuxt-link
                                            :to="{
                                                name: `search-id___${$i18n.locale}`,
                                                params: { id: grandchild._id }
                                            }"
                                        >
                                            {{ grandchild.name[$i18n.locale] }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div v-else>
                            <nuxt-link
                                class="visible-all-mobile"
                                :to="{
                                    name: `search-id___${$i18n.locale}`,
                                    params: { id: item._id }
                                }"
                            >
                                Barchasini ko'rish
                            </nuxt-link>
                        </div>
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
            categoryAll: null,
            tabIndex: 0,
            visibleCategory: null,
            isCategoryModal: false,
            indexAcc: -1,
            visibleMobile: false
        };
    },
    async mounted() {
        const res = await this.$axios.$get("category/all");
        this.categoryAll = res.data;
        this.visibleCategory = this.categoryAll[0];
    },
    methods: {
        clickParent(item, index) {
            this.visibleCategory = item;
            this.tabIndex = index;
        },
        clickAcc(index) {
            if (this.indexAcc == index) {
                this.indexAcc = -1;
            } else {
                this.indexAcc = index;
            }
        }
    }
};
</script>

<style lang="scss">
div.fixvh-category {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: #333;
    opacity: 0.5;
    z-index: 1000;
}
div.category-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
    z-index: 1000;
    height: 100vh;
    transform: translateX(0);
    opacity: 1;
    transition: 0.2s;

    div.category-nav {
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: relative;
        z-index: 101;
        display: flex;
        padding: 15px 0px;
        button.close-btn {
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            background-color: $gc;
            border: none;
            right: -41px;
            top: 8px;
            z-index: 101;
            .icon-times {
                color: #fff;
            }
        }
        div.scroll-modal {
            overflow-y: scroll;
            overflow-x: hidden;
        }
        div.category-left {
            width: 400px;
            padding: 0px 15px;
            border-right: 1px solid #bbb;
            ul {
                list-style-type: none;
                padding-right: 15px;
            }
            li {
                button {
                    display: block;
                    padding: 8px 15px;
                    border-radius: 5px;
                    font-size: 16px;
                    color: #333;
                    font-weight: 500;
                    border: none;
                    background-color: transparent;
                    width: 100%;
                    text-align: left;
                    &:hover {
                        color: $gc;
                    }
                }
            }

            li.active-li {
                button {
                    background-color: $gc;
                    color: #fff;
                }
            }
        }
        div.category-content {
            width: calc(100% - 400px);
            padding: 0px 30px;
            position: relative;

            h3.category-title {
                font-size: 24px;
                font-weight: 500;
                margin-bottom: 25px;
            }
            div.visible-all {
                a {
                    font-size: 16px;
                    color: #888;
                    margin-bottom: 5px;
                    display: block;
                }
            }
            a {
                transition: 0.2s;
            }
            ul {
                list-style-type: none;
                margin-bottom: 25px;
                li {
                }
                a {
                    font-size: 16px;
                    color: #888;
                    margin-bottom: 5px;
                    display: block;
                }
            }
            a.click-parent {
                font-size: 18px;
                color: #333;
                margin-bottom: 10px;
                color: #333;
                display: block;
                font-weight: 500;
            }

            a:hover {
                color: $gc !important;
            }
        }

        /* width */
        div.scroll-modal::-webkit-scrollbar {
            width: 5px;
        }

        /* Track */
        div.scroll-modal::-webkit-scrollbar-track {
            background: rgb(241, 241, 241);
        }

        /* Handle */
        div.scroll-modal::-webkit-scrollbar-thumb {
            background: $gc;
            border-radius: 5px;
        }

        /* Handle on hover */
        div.scroll-modal::-webkit-scrollbar-thumb:hover {
            background: $gc;
        }
    }
}

div.hidden-category {
    transform: translateX(-104%);
    opacity: 0;
}

div.category-mobile {
    position: fixed;
    z-index: 1234454545;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    padding: 15px;
    a.visible-all-mobile {
        font-size: 16px;
        color: #333;
    }
    div.title-t {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            font-size: 24px;
            margin-bottom: 0px;
        }
        button {
            border: none;
            background-color: transparent;
            .close-mobile {
                font-size: 26px;
                color: $gc;
            }
        }
    }

    div.category-acc {
        margin-top: 20px;
        max-height: calc(100vh - 100px);
        overflow-y: scroll;
        div.acc-item {
            margin-bottom: 5px;
            button {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: $gch;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                border: 1px solid $gch;
                b {
                    font-size: 18px;
                }
                .icon-down {
                    font-size: 18px;
                    color: $gc;
                }
                .rotate {
                    transform: rotate(-180deg);
                }
            }
            div.acc-content {
                padding: 15px;
                // display: none;
                ul {
                    list-style-type: none;
                    li {
                        a {
                            color: #333;
                            display: block;
                            font-size: 16px !important;
                            font-weight: bold;
                            margin-bottom: 5px;
                            &:active {
                                color: $gc;
                            }
                        }
                        ul {
                            margin-bottom: 15px;
                            li {
                                a {
                                    font-weight: 400;
                                    color: #777;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 800px) {
    div.category-modal {
        div.category-nav {
            div.category-left {
                width: 280px;
            }
            div.category-content {
                width: calc(100% - 280px);
            }
        }
    }
}
</style>
