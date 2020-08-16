<template>
    <div class="wrapper iplist">
        <header_header/>
        <div class="body inside">
            <div class="account_button">
                <button v-on:click="addIP()" class="button">{{ $store.state.translations.ipdict_page_button_add }}</button> 
            </div>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>{{ $store.state.translations.addcard_page_header }}</th>
                            <th>{{ $store.state.translations.ipdict_page_table_sum }}</th>
                            <th>{{ $store.state.translations.ipdict_page_table_percent }}</th>
                            <th>{{ $store.state.translations.ipdict_page_table_term }}</th>
                            <th>{{ $store.state.translations.ipdict_page_table_periodicity }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ip in iplist" v-bind:key="ip.id">
                            <td>{{ ip.name }}</td>
                            <td>{{ ip.sum }}</td>
                            <td>{{ ip.percent }}</td>
                            <td>{{ ip.term }}</td>
                            <td>{{ ip.periodicity }}</td>
                        </tr>
                    </tbody>
                </table>
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
                iplist: [],
            };
        },
        async asyncData (context) {
            var iplist = await context.$axios.$get('/api.php?method=ip&action=list');

            return {
                iplist: (!iplist.empty)?iplist.data : [],
            }
        },
        methods: {
            changeIP () {
                this.$router.push({ path: '/' });
            },
            addIP () {
                this.$router.push({ path: '/ip' });
            },
        }
    }
</script>

<style lang="scss">
    .iplist{
        .body.inside{
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
</style>