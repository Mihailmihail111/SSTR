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