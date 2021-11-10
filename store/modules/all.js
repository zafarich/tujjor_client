export default {
    state() {
        categoryAll: [];
        brandsAll: [];
    },
    mutations: {
        GET_CATEGORY(state, data) {
            state.categoryAll = data;
        },
        GET_BRANDS(state, data) {
            state.brandsAll = data;
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