<template>
    <div class="wrapper style_block">
        <div class="inside">
            <style_block/>
        </div>
    </div>
</template>

<script>
    import style_block from '~/components/style_block/style_block.vue'
    export default {
		components: {
			style_block,
    	}
    };
</script>

<style lang="scss">
    .style_block{
        .inside{
            padding: 0 25px;
        }
    }
    
    
</style>