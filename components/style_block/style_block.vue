<template>
    <div>
        <div class="account_h1"><p>Вход в личный аккаунт</p></div>
        <div class="account_h2"><p>Пожалуйста, введите свои учетные данные</p></div>
        <div class="input_wrap">
            <input type="text" placeholder="Логин">
        </div>
        <div class="account_button">
            <a href="">Войти</a>   
        </div>
        <div class="account_h3"><p>или</p></div>
        <div class="account_button account_button_google">
            <a href="">Войти с помощью Google</a>   
        </div>
        <div class="account_h4"><p>Дополнительная информация</p></div>
        <div class="input_wrap">
            <label>
                <p>страна</p>
                <input type="text" placeholder="Логин">
            </label>
        </div>
        <div class="input_wrap input_icon_wrap">
            <input type="text" placeholder="Логин">
            <div class="input_icon"><img src="@/assets/images/camera.svg" alt=""></div>
        </div>
        <div class="input_wrap_flex flex flex_sb">
            <div class="input_wrap">
                <input type="text" placeholder="Логин">
            </div>
            <div class="input_wrap">
                <input type="text" placeholder="Логин">
            </div>
        </div>
        <div class="input_wrap_button flex flex_sb">
            <div class="input_wrap">
                <input type="text" placeholder="Логин">
            </div>
            <div class="account_button"><a href=""><div><img src="@/assets/images/button_icon.svg" alt=""></div></a></div>
        </div>


        <div class="account_button user_account_button">
            <a href="">
                <p>Мой профиль</p>
            </a>
            <div class="user_account_button_icon">
                <img src="@/assets/images/user_account_button_icon.svg" alt="">
            </div>
        </div>

        <div class="input_checbox_wrap">
            <label class="flex flex_m">
                <input type="checkbox" class="hidden">
                <div class="input_checbox"></div>
                <p>Текст чекбокса</p>
            </label>
        </div>

        <div class="select_wrap active">
            <div class="select">
                <p>select 0</p>
            </div>
            <div class="select_drop">
                <p>select 1</p>
                <p>select 2</p>
                <p>select 3</p>
                <p>select 4</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>


<style lang="scss">
.style_block{
    padding-bottom: 350px;
}

    .account_h1{
        font-size: 28px;
        line-height: 32px;
        text-align: center;
        color: #FFF;
        margin-bottom: 5px;
    }
    .account_h2{
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 41px;
    }
    .account_h3{
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #FFF;
        opacity: 0.7;
        margin-bottom: 15px;
    }
    .account_h4{
        font-size: 22px;
        line-height: 32px;
        text-align: center;
        color: #FFFFFF;
        text-align: left;
        margin-bottom: 32px;
    }
    .input_wrap{
        margin-bottom: 15px;
        position: relative;
        p{
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 1.125px;
            text-transform: uppercase;
            color: #828282;
            margin-bottom: 8px;
            text-align: left;
        }
        label{
            display: block;
        }
        input{
            border: 1px solid rgba(198, 198, 198, 0.5);
            box-sizing: border-box;
            border-radius: 5px;
            background: none;
            width: 100%;
            height: 51px;
            font-size: 15px;
            letter-spacing: 1.125px;
            color: #fff;
            padding: 0 15px;
            &::placeholder{
                color: #828282;
            }
        }
    }
    .account_button{
        margin-bottom: 15px;
        a, button{
            background: #828282;
            border: 1px solid rgba($color: #828282, $alpha: 0.5);
            box-sizing: border-box;
            border-radius: 5px;
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            color: #FFFFFF;
            padding: 16px 10px;
            width: 100%;
            position: relative;
        }
    }
    .account_button_google{
        a, button{
            &::before{
                content: "";
                position: absolute;
                left: 13px;
                top: 13px;
                width: 24px;
                height: 24px;
                background: url(~@/assets/images/google.svg) no-repeat center 0;
            }
        }
    }
    .input_icon{
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }

    .input_wrap_flex{
        > div{
            width: 48%;
        }
    }
    .input_wrap_button{
        .input_wrap{
            width: calc(97% - 50px);
        }
        .account_button{
            a, button{
                height: 50px;
                width: 50px;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .input_icon_wrap{
        input{
            padding-right: 50px;
        }
    }

    .user_account_button{
        position: relative;
        a{
            font-size: 20px;
            padding: 10px 50px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
            border-radius: 41px;
        }
        img{
            display: block;
        }
    }

    .user_account_button_icon{
        position: absolute;
        left: 26px;
        top: 50%;
        transform: translateY(-50%);
    }

    .input_checbox_wrap{
        margin: 25px 0;
        label{
            cursor: pointer;
        }
        input:checked + .input_checbox{
            background: #fff;
            transition: 0.3s;
        }
        .input_checbox{
            border: 1px solid #fff;
            border-radius: 3px;
            width: 22px;
            height: 22px;
            box-sizing: border-box;
            transition: 0.3s;
        }
        p{
            font-size: 15px;
            text-align: left;
            margin-left: 10px;
            color: #fff;
        }
    }

    .select_wrap{
        position: relative;
        text-align: left;
        &.active{
            .select_drop{
                overflow: visible;
                z-index: 10;
                opacity: 1;
            }
        }
    }

    .select{
        width: 100%;
        max-width: 100%;
        background: #fff;
        color: #000;
        font-weight: 500;
        font-size: 16px;
        box-sizing: border-box;
        padding: 12px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    .select_drop{
        position: absolute;
        left: 0;
        top: 105%;
        width: 100%;
        box-sizing: border-box;
        padding: 15px 25px;
        border-radius: 5px;
        background: #fff;
        z-index: 10;
        overflow: hidden;
        z-index: -10;
        opacity: 0;
        color: #000;
        font-weight: 500;
        font-size: 16px;
        p{
            cursor: pointer;
            padding: 10px 0;
        }
    }
</style>