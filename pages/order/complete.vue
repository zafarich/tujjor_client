<template>
    <div>
        <div class="complete-order">
            <div class="container">
                <div class="box-alert">
                    <h1>Xaridingiz uchun rahmat!</h1>
                    <h2>Tez orada hodimlarimiz siz bilan bog'lanishadi</h2>
                    <h2>Buyurtma raqami: № {{ $route.query.order }}</h2>
                    <div class="btn-div">
                        <button @click="payOrder">To'lash</button>
                    </div>
                    <div class="btn-div">
                        <nuxt-link
                            :to="{ name: `index___${$i18n.locale}` }"
                            class="outline"
                            >Bosh sahifa</nuxt-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        payOrder() {
            const teene = this.$route.query.amount * 100;
            const str =
                "m=6113b418754e932e68fd87ad;ac.order=" +
                this.$route.query.order +
                ";a=" +
                +teene +
                ";c=https://tujjor.org/profile";

            const base64 = btoa(str);
            console.log("base64", str);
            const link = "https://checkout.paycom.uz/" + base64;

            window.location = link;
        }
    }
};
</script>

<style lang="scss">
div.box-alert {
    max-width: 320px;
    margin: 0 auto;
    padding: 80px 0px;
    h1 {
        font-size: 22px;
        margin-bottom: 15px;
        text-align: center;
    }
    h2 {
        font-size: 16px;
        text-align: center;
        color: #666;
    }
    div.btn-div {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    button {
        padding: 8px 20px;
        border-radius: 5px;
        font-size: 16px;
        color: #fff;
        background: $gc;
    }

    a.outline {
        border: 1px solid $gc;
        background: #fff;
        color: $gc;
        display: block;
        padding: 8px 20px;
        border-radius: 5px;
        font-size: 16px;
    }
}
</style>
