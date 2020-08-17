<template>
    <div class="wrapper admin">
        <header_header/>
        <div class="body inside">
            <div>
                <div class="account_button user_account_button">
                    <nuxt-link to="/iplist">
                        <p>{{ $store.state.translations.lk_page_href_ip_dictionary }}</p>
                    </nuxt-link>
                    <div class="user_account_button_icon">
                    </div>
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
        middleware: 'authenticated'
    }
</script>

<style lang="scss">
    .admin{
        .body.inside{
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }   
</style>