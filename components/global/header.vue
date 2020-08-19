<template>

<div class="header_wrap" :class="{fix: scrollPosition > 100}">
    <div class="header_fix"></div>
    <header>
        <div class="inside">
            <div class="header">
                <nav>
                    <client-only>
                        <ul class="flex flex_m flex_sb">
                            <li><a href="/" :class="{'nuxt-link-active':this.$route.name=='index'}"><img src="@/assets/images/logo.svg" alt=""></a></li>
                            <li v-if="!isAuthenticated"><nuxt-link to="/registration"><img src="@/assets/images/header_icon1.svg" alt=""></nuxt-link></li>
                            <li v-if="isAuthenticated"><nuxt-link to="/lk"><img src="@/assets/images/header_icon4.svg" alt=""></nuxt-link></li>
                            <li><a href=""><img src="@/assets/images/header_icon2.svg" alt=""></a></li>
                            <li v-if="!isAuthenticated"><nuxt-link to="/login"><img src="@/assets/images/header_icon3.svg" alt=""></nuxt-link></li>
                            <li v-if="isAuthenticated"><nuxt-link to="/logout"><img src="@/assets/images/header_icon3.svg" alt=""></nuxt-link></li>
                        </ul>
                    </client-only>
                </nav>
                <nav>
                    <client-only>
                        <ul v-if="isAuthenticated" class="flex flex_m flex_sb">
                            <li><div style="color: white;"><p>Баланс</p>{{balance}}</div></li>
                            <li><div style="color: white;"><p>Депозит</p>{{deposit}}</div></li>
                        </ul>
                    </client-only>
                </nav>
            </div>
        </div>
    </header>
</div>
  
</template>


<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser','balance','deposit'])
    },
    data() {
        return{
            scrollPosition: null,
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        ...mapActions({
            setBalance: 'setBalance',
            setDeposit: 'setDeposit',
        })
    },

    async mounted() {
        window.addEventListener('scroll', this.updateScroll);
        
        if (this.isAuthenticated) {
            if (this.balance == null) {
                    this.setBalance();
            }
            if (this.deposit == null) {
                    this.setDeposit();
            }
        }
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
            &.nuxt-link-active{
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