<template>
    <div class="wrapper personalinfo">
        <header_header/>
        <div class="body inside">
            <div>
                <div class="account_h1"><p>{{ $store.state.translations.ipadd_page_header }}</p></div>
                <form @submit.prevent="onSubmit" ref="formHTML">
                    <div class="input_wrap">
                        <input type="text" id="name" name="name" v-model="ipdata.name" :placeholder="$store.state.translations.ipadd_page_form_name">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="sum" name="sum" v-model="ipdata.sum" :placeholder="$store.state.translations.ipadd_page_form_sum">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="percent" name="percent" v-model="ipdata.percent" :placeholder="$store.state.translations.ipadd_page_form_percent">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="term" name="term" v-model="ipdata.term" :placeholder="$store.state.translations.ipadd_page_form_term">
                    </div>
                    <div class="input_wrap">
                        <input type="text" id="periodicity" name="periodicity" v-model="ipdata.term" :placeholder="$store.state.translations.ipadd_page_form_periodicity">
                    </div>
                        <select v-model="ipdata.card_type" class="select_wrap active">
                            <option v-for="type in types" v-bind:key="type.key" v-bind:value="type.key">{{ type.value }}</option>
                        </select>
                    <div class="account_button">
                        <button type="submit" value="Submit" class="button">{{ $store.state.translations.ipadd_page_form_button_add }}</button> 
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
        data() {
            return {
                errors: [],
                ipdata: [],
                types: {
                    0: {
                        key: 0, 
                        value: "Card",
                        front: "/assets/images/card/card_front.svg",
                        back: "/assets/images/card/card_back.svg"
                    },
                    1: {
                        key: 1, 
                        value: "Card1",
                        front: "/assets/images/card/card_front1.svg",
                        back: "/assets/images/card/card_back1.svg"
                    },
                    2: {
                        key: 2, 
                        value: "Card2",
                        front: "/assets/images/card/card_front2.svg",
                        back: "/assets/images/card/card_back2.svg"
                    },
                    3: {
                        key: 3, 
                        value: "Card3",
                        front: "/assets/images/card/card_front3.svg",
                        back: "/assets/images/card/card_back3.svg"
                    },
                    4: {
                        key: 4, 
                        value: "Card4",
                        front: "/assets/images/card/card_front4.svg",
                        back: "/assets/images/card/card_back4.svg"
                    },
                    5: {
                        key: 5, 
                        value: "Card5",
                        front: "/assets/images/card/card_front5.svg",
                        back: "/assets/images/card/card_back5.svg"
                    },
                    6: {
                        key: 6, 
                        value: "Card6",
                        front: "/assets/images/card/card_front6.svg",
                        back: "/assets/images/card/card_back6.svg"
                    },
                    7: {
                        key: 7, 
                        value: "Card7",
                        front: "/assets/images/card/card_front7.svg",
                        back: "/assets/images/card/card_back7.svg"
                    },
                },
            };
        },
        async asyncData (context) {
        },
        methods: {
            async onSubmit() {
                this.$axios.$post('/api/ip/', this.ipdata)
                .then((response) => {
                    if (response['message'] == 'success') {
                        this.$toast.success(this.$store.state.translations.global_success);
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