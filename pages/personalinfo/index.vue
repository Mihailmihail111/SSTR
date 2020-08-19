<template>
    <div class="wrapper personalinfo">
        <header_header/>
        <div class="body inside">
            <div>
                <div class="account_h1"><p>{{ $store.state.translations.personalinfo_page_header }}</p></div>
                <form @submit.prevent="onSubmit" ref="formHTML">
                    <div class="input_wrap">
                        <input type="text" id="id" name="id" v-model="userdata.id" :placeholder="$store.state.translations.personalinfo_page_table_userid" readonly>
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="email" name="email" v-model="userdata.email" :placeholder="$store.state.translations.personalinfo_page_table_email">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="phonenumber" name="phonenumber" v-model="userdata.phonenumber" :placeholder="$store.state.translations.personalinfo_page_table_phonenumber">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="viber" name="viber" v-model="userdata.viber" :placeholder="$store.state.translations.personalinfo_page_table_viber">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="whatsup" name="whatsup" v-model="userdata.whatsup" :placeholder="$store.state.translations.personalinfo_page_table_whatsup">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="telegram" name="telegram" v-model="userdata.telegram" :placeholder="$store.state.translations.personalinfo_page_table_telegram">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="signalnumber" name="signalnumber" v-model="userdata.signalnumber" :placeholder="$store.state.translations.personalinfo_page_table_signal">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="email2" name="email2" v-model="userdata.email2" :placeholder="$store.state.translations.personalinfo_page_table_email2">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="country" name="country" v-model="userdata.country" :placeholder="$store.state.translations.personalinfo_page_table_country">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="city" name="city" v-model="userdata.city" :placeholder="$store.state.translations.personalinfo_page_table_city">
                    </div>
                    <select v-model="userdata.lang" class="select_wrap active">
                        <option v-for="lang in languages" v-bind:key="lang.id" v-bind:value="lang.id">{{ lang.name }}</option>
                    </select>
                    <div class="input_wrap">
                        <input type="text" id="role" name="role" v-model="userdata.role" :placeholder="$store.state.translations.personalinfo_page_table_role">
                    </div>
                    <select v-model="userdata.card" class="select_wrap active">
                        <option v-for="card in cards" v-bind:key="card.id" v-bind:value="card.id">{{ card.number }}</option>
                    </select>
                    <div class="account_button">
                        <button type="submit" value="Submit" class="button">Изменить</button> 
                    </div>
                </form>
                <div class="account_button">
                    <button v-on:click="changePassword()" class="button">Изменить пароль</button> 
                </div>
                <div class="account_button">
                    <button v-on:click="addCard()" class="button">Добавить карту</button> 
                </div>
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
        data() {
            return {
                errors: [],
                userdata: [],
                languages: [],
                cards: [],
            };
        },
        async asyncData (context) {
            var userdata = await context.$axios.$get('/api/userdata/');
            var cards = await context.$axios.$get('/api/cards/');
            var languages = await context.$axios.$get('/api/langs/');

            return {
                userdata: (!userdata.empty)?userdata.data : [],
                cards: (!cards.empty)?cards.data : [],
                languages: (!languages.empty)?languages.data : [],
            }
        },
        methods: {
            changePassword () {
                this.$router.push({ path: '/password' });
            },
            addCard () {
                this.$router.push({ path: '/creditcard' });
            },
            async onSubmit() {
                this.$axios.$put('/api/userdata/index.php', this.userdata)
                .then((response) => {
                    if (response['message'] == 'success') {
                        this.$toast.success(this.$store.state.translations.global_success);
                    }

                    if (response['error'] != null) {
                        this.$toast.error(response['error']);
                    }
                })
                .catch((error) => {
                    this.$toast.error(error);
                    console.log(error);
                });
            },
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