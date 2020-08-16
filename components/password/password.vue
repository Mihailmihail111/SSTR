<template>
    <div>
        <div class="account_h1"><p>{{ $store.state.translations.personalinfo_page_header }}</p></div>
        <form @submit.prevent="onSubmit" ref="formHTML">
            <div class="input_wrap">
                <input type="password" id="old" name="old" v-model="formdata.old" :placeholder="$store.state.translations.personalinfo_page_table_oldpass">
            </div>
            <div class="input_wrap">
                <input type="password" id="new" name="new" v-model="formdata.new" :placeholder="$store.state.translations.personalinfo_page_table_newpass">
            </div>
            <div class="input_wrap">
                <input type="password" id="repeat" name="repeat" v-model="formdata.repeat" :placeholder="$store.state.translations.personalinfo_page_table_repeatpass">
            </div>
            <div class="account_button">
                <button type="submit" value="Submit" class="button">Изменить</button> 
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
                formdata: []
            };
        },
        methods: {
            async onSubmit() {
                this.$axios.$post('/api.php?method=userdata&action=password', this.formdata)
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