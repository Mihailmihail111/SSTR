<template>
    <div>
        <div class="account_h1"><p>{{ $store.state.translations.main_page_name }}</p></div>
        <div class="account_button user_account_button">
            <nuxt-link to="/personalinfo">
                <p>{{ $store.state.translations.lk_page_href_personal }}</p>
            </nuxt-link>
            <div class="user_account_button_icon">
                <img src="@/assets/images/user_account_button_icon.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
            };
        },
    };
</script>