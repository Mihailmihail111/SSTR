<template>
    <div>
        <password/>
    </div>
</template>

<script>
import password from '~/components/password'
    export default {
        components: {
            password,
        },
        middleware: 'authenticated'
    }
</script>
