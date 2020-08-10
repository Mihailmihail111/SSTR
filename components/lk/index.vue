<template>
    <div class="wrapper lk">
        <div class="inside">
            <lk/>
        </div>
    </div>
</template>

<script>
    import lk from '~/components/lk/lk.vue'
    export default {
		components: {
			lk,
    	}
    };
</script>

<style lang="scss">
    .login{
        .inside{
            padding: 0 25px;
        }
    }
    
    
</style>