<template>
    <div class="card card1" :class="{'active': isActive}" @click="cart_rotate">
        <div class="card_front flex flex_b">
            <div class="card_nick_front"><p>mr.Nickname</p></div>
        </div>
        <div class="card_back">
            <div class="card_nick_back"><p>mr.Nickname</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                isActive: false,
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