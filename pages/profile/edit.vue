<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>

        <div class="container">
            <form v-on:submit.prevent class="checkout__box">
                <div class="person__home">
                    <h4>{{ $t("personData") }}</h4>
                    <h6>{{ $t("requstToFill") }}</h6>

                    <div class="person__home--description">
                        <span>{{ $t("yourName") }}</span>
                        <input
                            type="text"
                            :placeholder="$t('yourName')"
                            id="name"
                            name="name"
                            v-model="userMe.name"
                            disabled
                        />
                    </div>

                    <div class="person__home--description">
                        <span v-text="$t('surName')"></span>
                        <input
                            type="text"
                            :placeholder="$t('surName')"
                            id="surName"
                            name="surName"
                            v-model="userMe.name"
                            disabled
                        />
                    </div>

                    <div class="person__home--description">
                        <span>{{ $t("tel") }}</span>
                        <input
                            type="text"
                            :placeholder="$t('tel')"
                            id="Number"
                            name="Number"
                            v-mask="'+998 (##) ###-##-##'"
                            v-model="userMe.phone"
                            disabled
                        />
                    </div>

                    <div class="person__home--description">
                        <span>{{ $t("uploadImg") }} *</span>
                        <input
                            accept="image/png, image/gif, image/jpeg"
                            :placeholder="$t('upload')"
                            id="photoInput"
                            name="photoInput"
                            type="file"
                            ref="photoInput"
                            @change="handlePhotoInput"
                        />

                        <label for="photoInput">
                            <span v-text="inputMsg.span"> </span>
                            <span class="plus">
                                +
                            </span>
                        </label>
                    </div>

                    <div class="person__home--description">
                        <span>{{ $t("city") }} *</span>
                        <select
                            name="region"
                            id="region"
                            v-model="selectedAdress.region"
                            @change="giveCity()"
                        >
                            <option value="" disabled selected>{{
                                $t("myCity")
                            }}</option>
                            <option
                                v-for="region in allRegions"
                                :key="region._id"
                                :value="region.name.uz"
                            >
                                {{ region.name.uz }}</option
                            >
                        </select>
                    </div>

                    <div class="person__home--description">
                        <span>{{ $t("ray") }} *</span>
                        <select
                            name="village"
                            id="village"
                            v-model="selectedAdress.district"
                            @change="giveDistrict()"
                        >
                            <option value="" disabled selected>{{
                                $t("myRay")
                            }}</option>
                            <option
                                v-for="district in selectedCityDistricts"
                                :key="district._id"
                                :value="district.name.uz"
                            >
                                {{ district.name.uz }}
                            </option>
                        </select>
                    </div>

                    <div class="person__home--description">
                        <span>{{ $t("address") }} *</span>
                        <input
                            type="text"
                            :placeholder="$t('address')"
                            id="Adress"
                            name="Adress"
                            v-model="userUpdateData.address"
                        />
                    </div>
                </div>

                <div class="person__checkout">
                    <b-spinner
                        variant="warning"
                        v-if="modals.putLoading"
                    ></b-spinner>
                    <a
                        class="checkout__you__order submit"
                        target=""
                        @click="putUserData"
                        v-else
                    >
                        {{ $t("save") }}
                    </a>
                </div>
            </form>
        </div>

        <modal-success
            v-show="modals.putedSuccess"
            post-title="Данные успешно обновлены!"
        >
        </modal-success>
    </section>
</template>

<script>
import ModalSuccess from "../../components/Modals/SuccessModal.vue";
import BaseLoading from "../../components/UI/BaseLoading.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
    components: { BaseLoading, ModalSuccess },
    data() {
        return {
            isGet: false,
            token: this.$auth.strategy.token.get(),

            selectedAdress: {
                region: "",
                district: ""
            },

            selectedCityDistricts: [],

            userUpdateData: {
                name: "",
                surName: "",
                image: "",
                phone: "",
                address: "",
                region: "",
                district: ""
            },

            userMe: {},

            inputMsg: {
                span: "Загрузить"
            },

            modals: {
                putLoading: false,
                putedSuccess: false
            }
        };
    },
    computed: mapGetters(["allRegions"]),

    methods: {
        ...mapMutations([]),

        ...mapActions(["fetchRegion"]),

        giveCity() {
            // select region and find districts depends on it
            this.selectedAdress.district = "";
            const region = this.selectedAdress.region;
            const result = this.allRegions.filter(arr => {
                return arr.name.uz == region || arr.name.ru == region;
            });
            this.selectedCityDistricts = result[0].districts;
            this.userUpdateData.region = result[0]._id;
            console.log(result, this.userUpdateData.region);
        },

        giveDistrict() {
            const district = this.selectedAdress.district;

            const result = this.selectedCityDistricts.filter(arr => {
                return arr.name.uz === district || arr.name.ru === district;
            });
            this.userUpdateData.district = result[0]._id;
            console.log(result, this.userUpdateData.district);
        },

        handlePhotoInput(event) {
            const target = event.composedPath();
            const photoName = target[0].files[0].name;
            this.$nextTick(() => {
                this.inputMsg.span = photoName;
            });
            const file = this.$refs.photoInput.files[0];
            this.userUpdateData.image = file;
        },

        createFormData() {
            const formData = new FormData();
            // const phone = this.userUpdateData.phone.replace(/[^0-9]/g, "");
            // formData.append("name", this.userUpdateData.name);
            formData.append("image", this.userUpdateData.image);
            formData.append("address['region']", this.userUpdateData.region);
            formData.append(
                "address['district']",
                this.userUpdateData.district
            );
            formData.append("address['address']", this.userUpdateData.address);
            return formData;
        },

        async putUserData() {
            this.$nextTick(() => {
                this.modals.putLoading = true;
            });
            const token = this.token;
            const formData = this.createFormData();
            await this.$axios
                .$put("user/update", formData, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods":
                            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                        "Access-Control-Allow-Headers":
                            "Origin, Content-Type, X-Auth-Token",
                        token: token
                    }
                })
                .then(res => {
                    if (res.success) {
                        console.log("put", res);
                        this.$nextTick(() => {
                            this.modals.putedSuccess = true;
                            this.modals.putLoading = false;
                        });

                        setTimeout(() => {
                            this.modals.putedSuccess = false;
                        }, 2000);
                        return res;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(error => {
                    this.loadSpinner = false;
                    // handle error
                    console.log(error);
                });
            this.$nextTick(() => {
                this.modals.putLoading = false;
            });
        },

        async fetchUserMe() {
            const token = this.token;
            return await this.$axios
                .$get("user/me", {
                    headers: {
                        token: token
                    }
                })
                .then(response => {
                    if (response.success) {
                        console.log("user me", response);
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));
        }
    },

    async mounted() {
        const token = this.token;
        const [region, userMe] = await Promise.all([
            this.fetchRegion(token),
            this.fetchUserMe()
        ]);
        this.userMe = userMe.data;
        console.log("user me", this.userMe);

        this.isGet = true;
    }
};
</script>

<style lang="scss" scoped>
.checkout__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;

    .person__home {
        padding: 30px 0 46px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        h4 {
            margin-bottom: 34px;
            flex-basis: 100%;
            font-family: Montserrat, sans-serif;
            font-weight: bold;
            font-size: 24px;
            line-height: 100%;
            /* identical to box height, or 24px */
            color: #f7931f;
        }

        h6 {
            flex-basis: 100%;
        }

        .person__home--description {
            margin-top: 16px;
            flex-basis: 30%;
            padding: 0 10px;
            display: flex;
            flex-direction: column;

            span {
                font-family: Roboto, sans-serif;
                font-weight: 500;
                font-size: 16px;
                line-height: 28px;
                /* identical to box height, or 168% */
                color: #000000;
            }

            input,
            select,
            label {
                // border: ;
                border: 1.16px solid #f7931e;
                outline: none;
                background-color: transparent;
                padding: 8px 12px;
                border-radius: 5px;

                /* asosiy */

                text-align: left;
                font-family: Roboto, sans-serif;
                font-weight: normal;
                font-size: 16px;
                line-height: 28px;
                /* identical to box height, or 168% */
                color: #666666;

                // To center vector png
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    text-align: left;
                    font-family: Roboto, sans-serif;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 28px;
                    /* identical to box height, or 168% */
                    color: #666666;
                }

                .plus {
                    color: #f7931e;
                    font-weight: 500;
                    font-size: 20px;
                }
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

            input[type="file"] {
                display: none;
            }

            label:hover,
            select:hover {
                cursor: pointer;
            }

            select {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;

                background-image: url("@/assets/img/checkout__order/vector.png");
                background-repeat: no-repeat;
                background-position: 97% 50%;
            }
        }
    }

    .person__checkout {
        padding: 20px 0 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        .checkout__you__order {
            flex-basis: auto;
            width: auto;
            outline: none;
            border: none;

            background-color: #f7931e;
            /* asosiy */
            box-shadow: 0 2.32px 11.6px rgb(0 0 0 / 25%);

            border-radius: 5px;

            font-family: Roboto;
            font-weight: 500;
            font-size: 16px;
            /* or 147% */
            padding: 10px 50px;
            text-align: center;

            color: #fcf6f6;

            &:hover {
                opacity: 0.85;
                cursor: pointer;
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .checkout__box {
        .person__home {
            .person__home--description {
                flex-basis: 49%;
            }
        }
    }
}

@media screen and (max-width: 570px) {
    .checkout__box {
        .person__home {
            .person__home--description {
                flex-basis: 100%;
            }
        }
    }
}
</style>
