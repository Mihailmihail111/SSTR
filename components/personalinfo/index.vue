<template>
    <div class="wrapper personalinfo">
        <div class="inside">
            <personalinfo/>
        </div>
    </div>
</template>

<script>
    import personalinfo from '~/components/personalinfo/personalinfo.vue'
    export default {
		components: {
			personalinfo,
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