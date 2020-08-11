<template>
    <div class="wrapper personalinfo">
        <header_header/>
        <div class="body inside">
            <personalinfo/>
        </div>
        <footer_footer/>
    </div>
</template>

<script>
    import header_header from '~/components/global/lkheader.vue'
    import footer_footer from '~/components/global/lkfooter.vue'
    import personalinfo from '~/components/personalinfo/personalinfo.vue'

    export default {
		components: {
            header_header,
            footer_footer,
			personalinfo,
    	}
    };
</script>

<style lang="scss">
    .personalinfo{
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