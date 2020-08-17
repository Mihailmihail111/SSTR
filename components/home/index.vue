<template>
  <div class="wrapper home_page">
    <header_header/>
    <main_section/>
    <what_sstr_section/>
    <resource_work_section/>
    <services_section/>
    <reviews_section/>
    <libra_section/>
    <news_section/>
    <partners_section/>
    <footer_footer/>

    <video_pop_up/>
    <news_pop_up/>
    <info_pop_up/>
  </div>
</template>


<script>
    import header_header from '~/components/global/header.vue'
    import footer_footer from '~/components/global/footer.vue'
    import main_section from '~/components/home/main_section.vue'
    import what_sstr_section from '~/components/home/what_sstr_section.vue'
    import resource_work_section from '~/components/home/resource_work_section.vue'
    import services_section from '~/components/home/services_section.vue'
    import reviews_section from '~/components/home/reviews_section.vue'
    import libra_section from '~/components/home/libra_section.vue'
    import news_section from '~/components/home/news_section.vue'
    import partners_section from '~/components/home/partners_section.vue'
    import video_pop_up from '~/components/pop_up/video_pop_up.vue'
    import news_pop_up from '~/components/pop_up/news_pop_up.vue'
    import info_pop_up from '~/components/pop_up/info_pop_up.vue'
    export default {
        components: {
            header_header,
            footer_footer,
            main_section,
            what_sstr_section,
            resource_work_section,
            services_section,
            reviews_section,
            libra_section,
            news_section,
            partners_section,
            video_pop_up,
            news_pop_up,
            info_pop_up
        }
    }
</script>


<style lang="scss">
    #main_section{
        margin-top: -1px;
        .inside{
            padding: 0;
        }
    }
    .main_section{
        position: relative;
    }
    .main_slider{
        position: relative;
        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
            width: 100%;
            height: 190px;
            background: linear-gradient(1.03deg, #171717 6.51%, rgba(23, 23, 23, 0.56) 49.52%, rgba(0, 0, 0, 0) 93.28%);
            transform: rotate(180deg);
        }
        &::after{
            content: "";
            left: 0;
            bottom: 0;
            position: absolute;
            width: 100%;
            height: 190px;
            background: linear-gradient(1.03deg, #171717 6.51%, rgba(23, 23, 23, 0.56) 49.52%, rgba(0, 0, 0, 0) 93.28%);
        }
    }
    .main_slider_text{
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        letter-spacing: 1px;
        color: #FFFFFF;
        position: absolute;
        left: 0;
        top: 53px;
        box-sizing: border-box;
        padding: 0 25px;
        z-index: 10;
    }

    #what_sstr_section{
        padding: 75px 0;
        padding-bottom: 40px;
        .inside{
            padding: 0;
        }
    }

    .what_sstr_slider_wrap{
        margin-top: 41px;
        box-sizing: border-box;
        border-top: 4px solid #1D1D1D;
        border-bottom: 4px solid #1D1D1D;
        padding: 17px 0 !important;
        padding-bottom: 12px !important;
        .swiper-slide{
            width: 200px;
        }
    }

    .what_sstr_slide{
        border-radius: 15px;
        a{
            display: block;
            position: relative;
            img{
                border-radius: 15px;
            }
            &::before{
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -28px;
                margin-left: -28px;
                width: 56px;
                height: 56px;
                background: url(~@/assets/images/play.svg) no-repeat center , rgba($color: #828282, $alpha: 0.2);
                border-radius: 100%;
                z-index: 10;
            }
            &::after{
                content: "";
                left: 0;
                bottom: 0;
                position: absolute;
                width: 100%;
                height: 100px;
                background: linear-gradient(0deg, #171717 0%, rgba(23, 23, 23, 0) 100%);
                z-index: 5;
            }
            
            
        }
    }
    .what_sstr_text{
        position: absolute;
        left: 0;
        bottom: 13px;
        width: 100%;
        height: auto;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #fff;
        z-index: 15;
        text-align: left;
        padding-left: 8px;
    }


    .resource_work_slider_wrap{
        margin-top: 12px;
        margin-bottom: 4px;
        .swiper_pagination{
            margin-top: 41px;
            margin-bottom: 35px;
        }
        .swiper-pagination-bullet{
            margin: 0 5px !important;
        }
    }
    .resource_work_slide_img{
        img{
            max-width: 100%;
            border-radius: 8px;
        }
    }
    .resource_work_slide_h1{
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #828282;
        margin-bottom: 14px;
        min-height: 45px;
    }
    .swiper-pagination-bullet{
        opacity: 1;
        background: #424242 !important;
    }
    .swiper-pagination-bullet-active{
        background: #fff !important;
    }

    #resource_work_section{
        margin-bottom: 84px;
    }
    
    .resource_work_text{
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        color: #828282;
        //background: url(~@/assets/images/bg_logo.svg) no-repeat center bottom;
        p{
            margin-bottom: 24px;
        }
    }
    .services_section{
        .title_h1{
            font-size: 22px;
            line-height: 42px;
            text-align: left;
            padding: 0;
            letter-spacing: -0.1px;
        }
    }

    .services_wrap{
        margin-top: 41px;
    }

    .services_item{
        text-align: left;
        background-position: center;
        background-repeat: no-repeat;
        margin-bottom: 63px;
        &:nth-child(1){
            background-image: url(~@/assets/images/services_bg1.png);
        }
        &:nth-child(2){
            background-image: url(~@/assets/images/services_bg2.png);
        }
        &:nth-child(3){
            background-image: url(~@/assets/images/services_bg3.png);
        }
        &:nth-child(4){
            background-image: url(~@/assets/images/services_bg4.png);
        }
        &:nth-child(5){
            background-image: url(~@/assets/images/services_bg5.png);
        }
    }

    .services_icon{
        width: 48px;
        height: 48px;
        background: #313131;
        border-radius: 5px;
        margin-bottom: 24px;
        img{
            display: block;
        }
    }
    .services_h1{
        font-weight: 500;
        font-size: 17px;
        line-height: 24px;
        color: #F5F5F8;
        margin-bottom: 13px;
    }
    .services_h2{
        font-size: 15px;
        line-height: 20px;
        color: #828282;
        margin-bottom: 17px;
        letter-spacing: -0.15px;
    }
    .services_link a{
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.5px;
        color: #F5F5F8;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            right: -14px;
            top: 6px;
            width: 6px;
            height: 9px;
            background: url("data:image/svg+xml,%3Csvg width='6' height='9' viewBox='0 0 6 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L4 4.5L1 8' stroke='%23F5F5F8' stroke-width='2'/%3E%3C/svg%3E%0A") no-repeat center 0;
        }
    }

    #services_section{
        padding-bottom: 41px;
    }

    #reviews_section, #news_section{
        .inside{
            padding: 0;
        }
    }

    .reviews_slider_wrap, .news_slider_wrap{
        box-sizing: border-box;
        border-top: 4px solid #1D1D1D;
        border-bottom: 4px solid #1D1D1D;
        padding: 14px 0;
        padding-bottom: 17px;
        margin-top: 17px;
        .swiper-slide{
            width: 100px;
        }
        .swiper-wrapper{
            padding: 0 15px;
        }
    }

    .reviews_slide, .news_slide{
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 61px;
            background: linear-gradient(0deg, #171717 0%, rgba(23, 23, 23, 0) 100%);
        }
    }

    .reviews_slide_img, .news_slide_img{
        width: 100px;
        height: 176px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    .reviews_slide_name, .news_slide_name{
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #FFFFFF;
        position: absolute;
        left: 0;
        bottom: 10px;
        box-sizing: border-box;
        padding-left: 10px;
        text-align: left;
    }

    #libra_section{
        padding-top: 84px;
    }

    .libra_wrap{
        //background: url(~@/assets/images/bg_logo.svg) no-repeat center top;
        padding-bottom: 77px;
    }

    .libra_h1{
        font-size: 26px;
        line-height: 32px;
        text-align: center;
        color: #828282;
        margin-bottom: 42px;
        span{
            color: #fff;
        }
    }

    .button_wrap{
        .button{
            margin: 0 10px;
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
        &.button_arrow{
            a{
                position: relative;
                &::before{
                    content: "";
                    position: absolute;
                    right: 20px;
                    top: 13px;
                    width: 6px;
                    height: 9px;
                    background: url("data:image/svg+xml,%3Csvg width='6' height='9' viewBox='0 0 6 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L4 4.5L1 8' stroke='%23F5F5F8' stroke-width='2'/%3E%3C/svg%3E%0A") no-repeat center 0;
                }
            }
        }
    }

    .news_slider_wrap{
        margin-top: 32px;
    }

    #partners_section{
        padding-top: 54px;
        padding-bottom: 79px;
    }

    .partners_img{
        margin-top: 72px;
        padding-bottom: 15px;
        background: url(~@/assets/images/partners_bg_logo.svg) no-repeat center;
    }

    .footer{
        padding: 63px 0;
    }

    .main_slider_img{
        img{
            height: 330px;
            width: 100%;
            object-fit: cover;
        }
    }

    .partners_img{
        img{
            max-width: 100%;
        }
    }





</style>