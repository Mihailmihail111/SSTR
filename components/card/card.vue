<template>
    <div class="card" :class="{'active': isActive}" @click="cart_rotate">
        <div class="card_front flex flex_b">
            <div class="card_nick_front"><p>mr.Nickname</p></div>
        </div>
        <div class="card_back">
            <div class="card_nick_back"><p>mr.Nickname</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                isActive: false,
            }
        },
        methods: {
            cart_rotate() {
                this.isActive = !this.isActive;
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
</style>