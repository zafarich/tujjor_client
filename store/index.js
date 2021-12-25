import favourites from "./modules/favourites";
import basket from "./modules/basket";
import orders from "./modules/orders";
import search from "./modules/search";
import redirect from "./modules/redirect";
import authSets from "./modules/auth";
import all from "./modules/all";

export const state = () => ({
    isLogin: false,
    isCheck: false
});
export const mutations = {
    CHANGE_LOGIN(state, data) {
        state.isLogin = data;
    },
    CHANGE_CHECK(state, data) {
        state.isCheck = data;
    }
};
export const actions = {};

export const modules = {
    favourites,
    basket,
    orders,
    search,
    redirect,
    authSets,
    all
};
