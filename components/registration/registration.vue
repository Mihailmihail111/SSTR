<template>
    <div>
        <form @submit.prevent="onSubmit" ref="formHTML">
            <div class="account_h1"><p>Регистрация</p></div>
            <div class="account_h2"><p>Пожалуйста, введите свои учетные данные</p></div>
            <div class="input_wrap">
                <input type="text" id="Login" name="Login" v-model="form.Login" placeholder="Логин">
            </div>
            <div class="input_wrap">
                <input type="password" name="Password" v-model="form.Password" placeholder="Пароль">
            </div>
            <div class="input_wrap">
                <input type="password" name="repeat_password" v-model="form.repeat_password" placeholder="Повторите пароль">
            </div>
            <div class="input_wrap">
                <input type="text" id="Email" name="Email" v-model="form.Email" placeholder="Email:">
            </div>
            <div class="account_button">
                <button type="submit" value="Submit" class="button">Зарегистрироваться</button> 
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
                form: {
                    Login: "",
                    Email: "",
                    Password: "",
                    repeat_password: ""
                },
            };
        },
        methods: {
            async onSubmit() {
                try {
                    if (this.form.Login.length == 0) {
                        this.$toast.error("Поле пользователь не может быть пустым");
                        return;
                    }
                    if (this.form.Password.length == 0) {
                        this.$toast.error("Поле пользователь не может быть пустым");
                        return;
                    }
                    if (this.form.Password != this.form.repeat_password) {
                        this.$toast.error("Пароли не совпадают");
                        return;
                    }
                    var formData = new FormData( this.$refs.formHTML);

                    this.$axios.$post('/api.php?method=register', this.form)
                    .then((response) => {
                        if (response['message'] == 'success') {
                            this.$auth.loginWith('local', {data: this.form}).then((response) => {
                                if (response.data.error != null) {
                                    this.$toast.error(response.data.error);
                                }
                            });
                        }

                        if (response['error'] != null) {
                            this.$toast.error(response['error']);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                } catch (error) {
                    console.log('Login error:', error)
                }
            }
        }
    };
</script>