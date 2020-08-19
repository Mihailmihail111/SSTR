<template>
    <div>
        <form @submit.prevent="onSubmit" ref="formHTML">
            <div class="account_h1"><p>Вход в личный аккаунт</p></div>
            <div class="account_h2"><p>Пожалуйста, введите свои учетные данные</p></div>
            <div class="input_wrap">
                <input type="text" id="Login" name="Login" v-model="data.Login" placeholder="Логин">
            </div>
            <div class="input_wrap">
                <input type="password" name="Password" v-model="data.Password" placeholder="Пароль">
            </div>
            <div class="input_wrap">
                <recaptcha @error="onError" @expired="onExpired" />
            </div>
            <div class="input_checbox_wrap">
                <label class="flex flex_m">
                    <input type="checkbox" name="RememberMe" v-model="data.RememberMe" class="hidden">
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
                data: {},
            };
        },
        methods: {
            onError (error) {
                this.$toast.error('Каптча не прошла проверку: ' + error);
            },
            async onSubmit() {
                try {
                    const token = await this.$recaptcha.getResponse();
                    this.data['captcha'] = token;

                    this.$auth.loginWith('local', {
                        data: this.data
                    })
                    .then((response) => {
                            if (response['message'] == 'success') {
                                this.$toast.success(response['message']);
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