<template>
    <div>
        <div class="account_h1"><p>Вход в личный аккаунт</p></div>
        <div class="account_h2"><p>Пожалуйста, введите свои учетные данные</p></div>
        <div class="input_wrap">
            <input type="text" placeholder="Логин">
        </div>
        <div class="account_button">
            <a href="">Войти</a>   
        </div>
        <div class="account_h3"><p>или</p></div>
        <div class="account_button account_button_google">
            <a href="">Войти с помощью Google</a>   
        </div>
        <div class="account_h4"><p>Дополнительная информация</p></div>
        <div class="input_wrap">
            <label>
                <p>страна</p>
                <input type="text" placeholder="Логин">
            </label>
        </div>
        <div class="input_wrap input_icon_wrap">
            <input type="text" placeholder="Логин">
            <div class="input_icon"><img src="@/assets/images/camera.svg" alt=""></div>
        </div>
        <div class="input_wrap_flex flex flex_sb">
            <div class="input_wrap">
                <input type="text" placeholder="Логин">
            </div>
            <div class="input_wrap">
                <input type="text" placeholder="Логин">
            </div>
        </div>
        <div class="input_wrap_button flex flex_sb">
            <div class="input_wrap">
                <input type="text" placeholder="Логин">
            </div>
            <div class="account_button"><a href=""><div><img src="@/assets/images/button_icon.svg" alt=""></div></a></div>
        </div>


        <div class="account_button user_account_button">
            <a href="">
                <p>Мой профиль</p>
            </a>
            <div class="user_account_button_icon">
                <img src="@/assets/images/user_account_button_icon.svg" alt="">
            </div>
        </div>

        <div class="input_checbox_wrap">
            <label class="flex flex_m">
                <input type="checkbox" class="hidden">
                <div class="input_checbox"></div>
                <p>Текст чекбокса</p>
            </label>
        </div>

        <div class="select_wrap active">
            <div class="select">
                <p>select 0</p>
            </div>
            <div class="select_drop">
                <p>select 1</p>
                <p>select 2</p>
                <p>select 3</p>
                <p>select 4</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>


<style lang="scss">

</style>