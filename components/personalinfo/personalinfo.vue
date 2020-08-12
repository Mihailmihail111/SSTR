<template>
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
            <div class="input_wrap">
                <input type="text" id="lang" name="lang" v-model="userdata.lang" :placeholder="$store.state.translations.personalinfo_page_table_language">
            </div>
            <div class="input_wrap">
                <input type="text" id="role" name="role" v-model="userdata.role" :placeholder="$store.state.translations.personalinfo_page_table_role">
            </div>
            <div class="input_wrap">
                <input type="text" id="card" name="card" v-model="userdata.card" :placeholder="$store.state.translations.personalinfo_page_table_card">
            </div>
            <div class="account_button">
                <button type="submit" value="Submit" class="button">Изменить</button> 
            </div>
        </form>
            <div class="account_button">
                <button v-on:click="changePassword()" class="button">Изменить пароль</button> 
            </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
                userdata: [],
                languages: []
            };
        },
        async fetch() {
            var userdata = await this.$axios.$get('/api.php?method=userdata&action=get');
            var languages = await this.$axios.$get('/api.php?method=langs');

            if (!userdata.empty) {
                this.userdata = userdata.data;
            } else {
                this.userdata = [];
            }
            if (!languages.empty) {
                this.languages = languages.data;
            } else {
                this.languages = [];
            }
        },
        mounted() {
            if (!this.$store.state.auth.loggedIn) {
                this.$router.push({ path: 'login' });
            }
        },
        methods: {
            changePassword () {
                this.$router.push({ path: 'password' });
            },
            async onSubmit() {
                this.$axios.$post(this.$env.BACKEND_URL + '?method=userdata&action=update', this.userdata)
                .then((response) => {
                    if (response['message'] == 'success') {
                        this.$toast.error(this.$store.state.translations.global_success);
                    }

                    if (response['error'] != null) {
                        this.$toast.error(response['error']);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            },
        }
    };
</script>


<style lang="scss">

    .account_h1{
        font-size: 28px;
        line-height: 32px;
        text-align: center;
        color: #FFF;
        margin-bottom: 5px;
    }
    .account_h2{
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 41px;
    }
    .account_h3{
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #FFF;
        opacity: 0.7;
        margin-bottom: 15px;
    }
    .account_h4{
        font-size: 22px;
        line-height: 32px;
        text-align: center;
        color: #FFFFFF;
        text-align: left;
        margin-bottom: 32px;
    }
    .input_wrap{
        margin-bottom: 15px;
        position: relative;
        p{
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 1.125px;
            text-transform: uppercase;
            color: #828282;
            margin-bottom: 8px;
            text-align: left;
        }
        label{
            display: block;
        }
        input{
            border: 1px solid rgba(198, 198, 198, 0.5);
            box-sizing: border-box;
            border-radius: 5px;
            background: none;
            width: 100%;
            height: 51px;
            font-size: 15px;
            letter-spacing: 1.125px;
            color: #fff;
            padding: 0 15px;
            &::placeholder{
                color: #828282;
            }
        }
    }
    .account_button{
        margin-bottom: 15px;
        a, button{
            background: #000000;
            border: 1px solid rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
            border-radius: 5px;
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            color: #FFFFFF;
            padding: 16px 10px;
            width: 100%;
            position: relative;
        }
    }
    .account_button_google{
        a, button{
            &::before{
                content: "";
                position: absolute;
                left: 13px;
                top: 13px;
                width: 24px;
                height: 24px;
                background: url(~@/assets/images/google.svg) no-repeat center 0;
            }
        }
    }
    .input_icon{
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }

    .input_wrap_flex{
        > div{
            width: 48%;
        }
    }
    .input_wrap_button{
        .input_wrap{
            width: calc(97% - 50px);
        }
        .account_button{
            a, button{
                height: 50px;
                width: 50px;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .input_icon_wrap{
        input{
            padding-right: 50px;
        }
    }

    .user_account_button{
        position: relative;
        a{
            font-size: 20px;
            padding: 24px 50px;
        }
        img{
            display: block;
        }
    }

    .user_account_button_icon{
        position: absolute;
        left: 26px;
        top: 50%;
        transform: translateY(-50%);
    }

    .input_checbox_wrap{
        margin: 25px 0;
        label{
            cursor: pointer;
        }
        input:checked + .input_checbox{
            background: #fff;
            transition: 0.3s;
        }
        .input_checbox{
            border: 1px solid #fff;
            border-radius: 3px;
            width: 22px;
            height: 22px;
            box-sizing: border-box;
            transition: 0.3s;
        }
        p{
            font-size: 15px;
            text-align: left;
            margin-left: 10px;
            color: #fff;
        }
    }
</style>