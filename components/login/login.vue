<template>
    <div>
        <form @submit.prevent="onSubmit" ref="formHTML">
            <div class="account_h1"><p>Вход в личный аккаунт</p></div>
            <div class="account_h2"><p>Пожалуйста, введите свои учетные данные</p></div>
            <div class="input_wrap">
                <input type="text" id="Login" name="Login" v-model="form.Login" placeholder="Логин">
            </div>
            <div class="input_wrap">
                <input type="password" name="Password" v-model="form.Password" placeholder="Пароль">
            </div>
            <div class="input_wrap">
                <recaptcha @error="onError" @expired="onExpired" />
            </div>
            <div class="input_checbox_wrap">
                <label class="flex flex_m">
                    <input type="checkbox" name="RememberMe" v-model="form.RememberMe" class="hidden">
                    <div class="input_checbox"></div>
                   <p>Запомнить меня</p>
                </label>
            </div>
            <div class="account_button">
                <button type="submit" value="Submit" class="button">Войти</button> 
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        components: {
        },


        data() {
            return {
                errors: [],
                form: {},
                backendUrl: process.env.backendUrl,
            };
        },

        mounted() {
            if (this.$store.state.auth.loggedIn) {
                window.location.href = '/'
            }
        },
        methods: {
            onError (error) {
                this.$toast.error('Каптча не прошла проверку: ' + error);
            },
            async onSubmit() {
                try {
                    const token = await this.$recaptcha.getResponse();
                    var formData = new FormData( this.$refs.formHTML);
                    this.form['captcha'] = token;

                    this.$auth.loginWith('local', {data: this.form}).then((response) => {
                        if (response.data.error != null) {
                            this.$toast.error(response.data.error);
                        }
                    })
                    
                    await this.$recaptcha.reset();
                } catch (error) {
                    console.log('Login error:', error)
                }
            },
            onExpired () {
                alert('Captcha expired');
            }
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