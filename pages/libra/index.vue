<template>
    <div class="wrapper personalinfo">
        <header_header/>
        <div class="body inside">
            <div>
                <div class="input_wrap">
                    <label>
                        <p>Баланс</p>
                        <input type="text" id="id" name="id" v-model="data.balance" placeholder="Баланс" readonly>
                    </label>
                </div>
                <form @submit.prevent="onSubmit" ref="formHTML">
                    <div class="input_wrap">
                        <label>
                            <p>Сумма</p>
                            <input type="text" id="id" name="id" v-filter="'^[0-9]+[,.]?[0-9]{0,2}$'" v-model="data.value" placeholder="Сумма">
                        </label>
                    </div>
                    <div class="account_button">
                        <button type="submit" value="Submit" class="button">Купить</button> 
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
    import { mapActions } from 'vuex';

    export default {
        components: {
            header_header,
            footer_footer,
        },
        middleware: 'authenticated',
        data() {
            return {
                errors: [],
                data: {
                    balance: 0,
                    value: null,
                },
            };
        },
        async asyncData (context) {
            var balance = await context.$axios.$get('/api/libra/');
            var d = {
                balance: (!balance.empty)?balance.data : 0,
                value: null
            };

            return {
                data: d,
            }
        },
        methods: {
            async onSubmit() {
                this.$axios.$post('/api/libra/', this.data)
                .then((response) => {
                    if (response['message'] == 'success') {
                        this.$toast.success(this.$store.state.translations.global_success);

                        this.setBalance();
                        this.setDeposit();

                        this.$axios.$get('/api/libra/').then((response) => {
                            if (response['message'] == 'success') {
                                this.data.balance = (!response.empty)?response.data : 0;
                                this.data.value = null;
                            }

                            if (response['error'] != null) {
                                this.$toast.error(response['error']);
                            }
                        })
                        .catch((error) => {
                            if (error.response.data['error'] != null) {
                                this.$toast.error(error.response.data['error']);
                            } else {
                                this.$toast.error(error);
                            }
                            console.log(error);
                        });
                    }
                })
                .catch((error) => {
                    if (error.response.data['error'] != null) {
                        this.$toast.error(error.response.data['error']);
                    } else {
                        this.$toast.error(error);
                    }
                    console.log(error);
                });
            },
            ...mapActions({
                setBalance: 'setBalance',
                setDeposit: 'setDeposit',
            })
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