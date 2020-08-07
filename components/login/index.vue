<template>
    <div class="wrapper login">
        <div class="inside">
            <login/>
        </div>
    </div>
</template>

<script>
    import login from '~/components/login/login.vue'
    export default {
		components: {
			login,
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