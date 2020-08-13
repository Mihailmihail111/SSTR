<template>
    <div class="wrapper lk">
        <header_header/>
        <div class="body inside">
            <lk/>
        </div>
        <footer_footer/>
    </div>
</template>

<script>
    import header_header from '~/components/global/header.vue'
    import footer_footer from '~/components/global/footer.vue'
    import lk from '~/components/lk/lk.vue'

    export default {
		components: {
            header_header,
            footer_footer,
			lk,
    	}
    };
</script>

<style lang="scss">
    .lk{
        .body.inside{
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
    .button{
        a{
            border: 2px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 21px;
            padding: 9px 36px;
            font-weight: 600;
            font-size: 15px;
            color: #fff;
        }
        &.button_active{
            a{
                color: #131419;
                background: #fff;
            }
        }
    }   
</style>