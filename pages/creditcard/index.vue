<template>
    <div class="wrapper personalinfo">
        <header_header/>
        <div class="body inside">
            <div>
                <div class="account_h1"><p>{{ $store.state.translations.addcard_page_header }}</p></div>
                <form @submit.prevent="onSubmit" ref="formHTML">
                    <div class="input_wrap">
                        <input type="text" id="number" name="number" v-filter="'^\\d{1,16}$'" v-model="data.number" :placeholder="$store.state.translations.addcard_page_form_number">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="cardholder" name="cardholder" v-filter="'^[a-zA-Z]+\\s?[a-zA-Z]*$'" v-model="data.cardholder" :placeholder="$store.state.translations.addcard_page_form_cardholder">
                    </div>
                    <div class="input_wrap_flex flex flex_sb">
                        <div class="input_wrap">
                            <select v-model="data.month" class="select_wrap active">
                                <option v-for="month in months" v-bind:key="month" v-bind:value="month">{{ month }}</option>
                            </select>
                        </div>
                        <div class="input_wrap">
                            <select v-model="data.year" class="select_wrap active">
                                <option v-for="year in years" v-bind:key="year" v-bind:value="year">{{ year }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="cvc" name="cvc" v-filter="'^\\d{1,3}$'" v-model="data.cvc" :placeholder="$store.state.translations.addcard_page_form_cvc">
                    </div>
                    <select v-model="data.currency" class="select_wrap active">
                        <option v-for="cur in currency" v-bind:key="cur.id" v-bind:value="cur.id">{{ cur.code }}</option>
                    </select>
                    <div class="account_button">
                        <button type="submit" value="Submit" class="button">Добавить</button> 
                    </div>
                </form>
            </div>
        </div>
        <footer_footer/>
    </div>
</template>

<script>
    import header_header from '~/components/global/header.vue'
    import footer_footer from '~/components/global/footer.vue'

    export default {
        components: {
            header_header,
            footer_footer,
        },
        middleware: 'authenticated',
        async asyncData (context) {
            var currency = await context.$axios.$get('/api.php?method=currency');

            return {
                currency: (!currency.empty)?currency.data : [],
            }
        },
        data() {
            var years = {};
            var yearStart = (new Date()).getFullYear() - 10;
            var i = 0;

            for (i = yearStart; i < (yearStart + 20); i++) {
                years[i] = i;
            }

            return {
                errors: [],
                data: {
                    number: null,
                    cardholder: null,
                    month: null,
                    year: null,
                    cvc: null,
                    currency: null,
                },
                months: {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12},
                years: years
            };
        },
        methods: {
            async onSubmit() {
                this.$axios.$post(this.$env.BACKEND_URL + '?method=cards&action=update', this.data)
                .then((response) => {
                    if (response['message'] == 'success') {
                        this.$toast.error(this.$store.state.translations.global_success);
                        this.$router.push({ path: '/personalinfo' });
                    }

                    if (response['error'] != null) {
                        this.$toast.error(response['error']);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            cardNumber (event) {
                console.log(this.data.number);
            }
        }
    }
</script>

<style lang="scss">
    .personalinfo{
        .body.inside{
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
</style>