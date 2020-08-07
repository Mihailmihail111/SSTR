<template>
    <div class="wrapper card_page">
        <div class="inside">
            <card/>
        </div>
    </div>
</template>

<script>
    import card from '~/components/card/card.vue'
    export default {
		components: {
			card,
    	}
    };
</script>

<style lang="scss">
    .card_page{
        padding: 25px 0;
    }
</style>