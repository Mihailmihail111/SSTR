<template>
    <div class="card_wrap">
        <div class="card" :class="{'active': isActive}" @click="cart_rotate">
            <div class="card_front flex flex_b">
                <div class="card_nick_front"><p>mr.Nickname</p></div>
            </div>
            <div class="card_back">
                <div class="card_nick_back"><p>mr.Nickname</p></div>
            </div>
        </div>
        <div class="card card1" :class="{'active': isActive1}" @click="cart_rotate1">
            <div class="card_front flex flex_b">
                <div class="card_nick_front"><p>mr.Nickname</p></div>
            </div>
            <div class="card_back">
                <div class="card_nick_back"><p>mr.Nickname</p></div>
            </div>
        </div>
        <div class="card card2" :class="{'active': isActive2}" @click="cart_rotate2">
            <div class="card_front flex flex_b">
                <div class="card_nick_front"><p>mr.Nickname</p></div>
            </div>
            <div class="card_back">
                <div class="card_nick_back"><p>mr.Nickname</p></div>
            </div>
        </div>
        <div class="card card3" :class="{'active': isActive3}" @click="cart_rotate3">
            <div class="card_front flex flex_b">
                <div class="card_nick_front"><p>mr.Nickname</p></div>
            </div>
            <div class="card_back">
                <div class="card_nick_back"><p>mr.Nickname</p></div>
            </div>
        </div>
        <div class="card card4" :class="{'active': isActive4}" @click="cart_rotate4">
            <div class="card_front flex flex_b">
                <div class="card_nick_front"><p>mr.Nickname</p></div>
            </div>
            <div class="card_back">
                <div class="card_nick_back"><p>mr.Nickname</p></div>
            </div>
        </div>
        <div class="card card5" :class="{'active': isActive5}" @click="cart_rotate5">
            <div class="card_front flex flex_b">
                <div class="card_nick_front"><p>mr.Nickname</p></div>
            </div>
            <div class="card_back">
                <div class="card_nick_back"><p>mr.Nickname</p></div>
            </div>
        </div>
        <div class="card card6" :class="{'active': isActive6}" @click="cart_rotate6">
            <div class="card_front flex flex_b">
                <div class="card_nick_front"><p>mr.Nickname</p></div>
            </div>
            <div class="card_back">
                <div class="card_nick_back"><p>mr.Nickname</p></div>
            </div>
        </div>
        <div class="card card7" :class="{'active': isActive7}" @click="cart_rotate7">
            <div class="card_front flex flex_b">
                <div class="card_nick_front"><p>mr.Nickname</p></div>
            </div>
            <div class="card_back">
                <div class="card_nick_back"><p>mr.Nickname</p></div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return{
                isActive: false,
                isActive1: false,
                isActive2: false,
                isActive3: false,
                isActive4: false,
                isActive5: false,
                isActive6: false,
                isActive7: false,
            }
        },
        methods: {
            cart_rotate() {
                this.isActive = !this.isActive;
            },
            cart_rotate1() {
                this.isActive1 = !this.isActive1;
            },
            cart_rotate2() {
                this.isActive2 = !this.isActive2;
            },
            cart_rotate3() {
                this.isActive3 = !this.isActive3;
            },
            cart_rotate4() {
                this.isActive4 = !this.isActive4;
            },
            cart_rotate5() {
                this.isActive5 = !this.isActive5;
            },
            cart_rotate6() {
                this.isActive6 = !this.isActive6;
            },
            cart_rotate7() {
                this.isActive7 = !this.isActive7;
            },
        },
    };
</script>


<style lang="scss">

    .card{
        width: 360px;
        height: 230px;
        position: relative;
        perspective: 1000px;
        box-sizing: border-box;
        padding: 1px;
        margin-bottom: 25px;
        &.active{
            .card_front{
                transform: rotateY(-180deg);
            }
            .card_back{
                transform: rotateY(0deg);
            }
        }
    }
    .card_front, .card_back{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: 1s;
        backface-visibility: hidden;
        border-radius: 15px;
        transform-style: preserve-3d;
        transform-origin: 50%;
    }
    .card_front{
        background: url(~@/assets/images/card/card_front.svg) no-repeat center 0;
    }
    .card_back{
        transform: rotateY(180deg);
        background: url(~@/assets/images/card/card_back.svg) no-repeat center 0;
    }
    .card_nick_front{
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25), -1px 0px 1px #151515, 1px 0px 1px #151515, 0px -1px 1px #151515, 0px 1px 1px #151515;
        margin-left: 27px;
        margin-bottom: 30px;
        p{
            font-family: "Roboto Mono";
        }
    }
    .card_nick_back{
        font-size: 10px;
        line-height: 12px;
        text-align: right;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25), -1px 0px 1px #151515, 1px 0px 1px #151515, 0px -1px 1px #151515, 0px 1px 1px #151515;
        margin-right: 17px;
        margin-top: 66px;
        display: flex;
        justify-content: flex-end;
        p{
            font-family: "Roboto Mono";
        }
    }
    .card1{
        .card_front{
        background: url(~@/assets/images/card/card_front1.svg) no-repeat center 0;
        }
        .card_back{
            background: url(~@/assets/images/card/card_back1.svg) no-repeat center 0;
        }
    }
    .card2{
        .card_front{
        background: url(~@/assets/images/card/card_front2.svg) no-repeat center 0;
        }
        .card_back{
            background: url(~@/assets/images/card/card_back2.svg) no-repeat center 0;
        }
    }
    .card3{
        .card_front{
        background: url(~@/assets/images/card/card_front3.svg) no-repeat center 0;
        }
        .card_back{
            background: url(~@/assets/images/card/card_back3.svg) no-repeat center 0;
        }
    }
    .card4{
        .card_front{
        background: url(~@/assets/images/card/card_front4.svg) no-repeat center 0;
        }
        .card_back{
            background: url(~@/assets/images/card/card_back4.svg) no-repeat center 0;
        }
    }
    .card5{
        .card_front{
        background: url(~@/assets/images/card/card_front5.svg) no-repeat center 0;
        }
        .card_back{
            background: url(~@/assets/images/card/card_back5.svg) no-repeat center 0;
        }
    }
    .card6{
        .card_front{
        background: url(~@/assets/images/card/card_front6.svg) no-repeat center 0;
        }
        .card_back{
            background: url(~@/assets/images/card/card_back6.svg) no-repeat center 0;
        }
    }
    .card7{
        .card_front{
        background: url(~@/assets/images/card/card_front7.svg) no-repeat center 0;
        }
        .card_back{
            background: url(~@/assets/images/card/card_back7.svg) no-repeat center 0;
        }
    }

</style>