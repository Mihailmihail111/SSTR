<template>
    <div class="wrapper login">
        <div class="inside">
            <registration/>
        </div>
    </div>
</template>

<script>
    import registration from '~/components/registration/registration.vue'
    export default {
		components: {
			registration,
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