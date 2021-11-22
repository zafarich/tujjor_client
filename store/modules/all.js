export default {
    state() {
        categoryAll: [];
        brandsAll: [];
        scrollTop: 0;
        limit1: 10;
        limit2: 20;
        limit3: 10;
    },
    mutations: {
        GET_CATEGORY(state, data) {
            state.categoryAll = data;
        },
        GET_BRANDS(state, data) {
            state.brandsAll = data;
        },
        SCROLL_TOP(state, data) {
            state.scrollTop = data;
        },
        LIMIT_1(state, data) {
            state.limit1 = data;
        },
        LIMIT_2(state, data) {
            state.limit2 = data;
        },
        LIMIT_3(state, data) {
            state.limit3 = data;
        }
    },
    actions: {
        async getCat({ commit }) {
            let category = await this.$axios.$get("category/all");
            commit("GET_CATEGORY", category.data);
        },
        async getBrands({ commit }) {
            let brands = await this.$axios.$get("brand/all");
            commit("GET_BRANDS", brands.data);
        }
    },
    getters: {}
};