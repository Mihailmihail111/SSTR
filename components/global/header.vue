<template>

<div class="header_wrap fix">
    <div class="header_fix"></div>
    <header>
        <div class="inside">
            <div class="header">
                <nav>
                    <ul class="flex flex_m flex_sb">
                        <li>
                            <a href="" class="active"><img src="@/assets/images/logo.svg" alt=""></a>
                        </li>
                        <li><nuxt-link to="/registration"><img src="@/assets/images/header_icon1.svg" alt=""></nuxt-link></li>
                        <li><a href=""><img src="@/assets/images/header_icon2.svg" alt=""></a></li>
                        <li><nuxt-link to="/login"><img src="@/assets/images/header_icon3.svg" alt=""></nuxt-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</div>
  
</template>


<script>

export default {
    data() {
        return{
            scrollPosition: null,
            
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }

};

</script>


<style lang="scss">
    header{
        .inside{
            padding: 0;
        }
    }
    .header{
        padding: 24px 15px;
        box-sizing: border-box;
        background: #0F0F0F;
        a{
            opacity: 0.5;
            &.active{
                opacity: 1;
            }
        }
    }
    .header_fix{
        display: none;
        height: 75px;
    }
    .header_wrap{
        position: relative;
    }
    .fix{
        .header_fix{
            display: block;
        }
        header{
            position: fixed;
            left: 0;
            top: 0;
            z-index: 100;
            width: 100%;
        }
    }
</style>