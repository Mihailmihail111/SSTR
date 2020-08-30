<template>
    <div class="card" :class="[isActive ? 'active': '', cardType]" @click="cart_rotate">
        <div class="card_front flex flex_b">
            <div class="card_nick_front"><p>{{ username }}</p></div>
        </div>
        <div class="card_back">
            <div class="card_nick_back"><p>{{ username }}</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['cardType'],
        data() {
            let user; 
            if (this.$auth) {
                user = this.$auth.user.user;
            }
            return{
                isActive: false,
                username: user,
            }
        },
        methods: {
            cart_rotate() {
                this.isActive = !this.isActive;
            },
        },
    };
</script>


<style lang="scss">

    

</style>