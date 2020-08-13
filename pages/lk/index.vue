<template>
    <div v-if="this.$store.state.auth.loggedIn">
        <lk/>
    </div>
</template>

<script>
    import lk from '~/components/lk'
    
    export default {
        components: {
            lk,
        },
        middleware: 'authenticated'
    }
</script>
