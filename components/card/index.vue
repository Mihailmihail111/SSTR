<template>
    <div class="wrapper card_page">
        <div class="inside">
            <card :cardType="cardType" />
        </div>
    </div>
</template>

<script>
    import card from '~/components/card/card.vue'
    export default {
    components: {
      card,
        },
        props: ['cardType'],
    };
</script>

<style lang="scss">
    .card_page{
        width: 100%;
        padding: 25px 0;
        background: url(~@/assets/images/card_bg.png) left 0;
    }
</style>