<template>
    <div class="pop_w pop_center video_pop_up">
        <div class="pop_bg"></div>
        <div class="pop_scroll">
            <div class="inside">
                <div class="pop">
                    <div class="pop_in_wrap">
                        <div class="video_pop_up_h1"><p>Обращение создателя</p></div>
                        <swiper ref="mySwiper" :options="swiperOption" class="video_pop_up_slider_wrap">
                            <swiper-slide>
                                <div class="video_pop_up_slide">
                                    <video controls controlsList="nodownload" inline playsinline>
                                        <source src="@/assets/video/test.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="video_pop_up_slide">
                                    <video controls controlsList="nodownload" inline playsinline>
                                        <source src="@/assets/video/test.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </swiper-slide>
                            <div class="swiper_button swiper_button_prev" slot="button-prev"></div>
                            <div class="swiper_button swiper_button_next" slot="button-next"></div>
                            <div class="swiper_pagination" slot="pagination"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import  'swiper/css/swiper.css';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return{
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.video_pop_up_slider_wrap .swiper_button_next',
                    prevEl: '.video_pop_up_slider_wrap .swiper_button_prev'
                },
                pagination: {
                    clickable: true,
                    el: ".video_pop_up_slider_wrap .swiper_pagination",
                },
            }
        }
    }

};

</script>


<style lang="scss">
    .video_pop_up{
        .inside{
            padding: 0;
        }
        .pop_in_wrap{
            padding: 40px 0;
        }
    }
    .video_pop_up_h1{
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #fff;
        margin-bottom: 19px;
    }
    .video_pop_up_slide{
        video{
            width: 100%;
            height: 213px;
        }
    }
    .video_pop_up_slider_wrap{
        .swiper_pagination{
            margin-top: 19px;
        }
        .swiper_button{
            bottom: 0;
            width: 14px;
            height: 14px;
            position: absolute;
            z-index: 10;
            cursor: pointer;
            background: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.0799994 7.38006C0.127594 7.50281 0.19896 7.61496 0.29 7.71006L5.29 12.7101C5.38324 12.8033 5.49393 12.8773 5.61575 12.9277C5.73757 12.9782 5.86814 13.0042 6 13.0042C6.2663 13.0042 6.5217 12.8984 6.71 12.7101C6.80324 12.6168 6.8772 12.5061 6.92766 12.3843C6.97812 12.2625 7.00409 12.1319 7.00409 12.0001C7.00409 11.7338 6.8983 11.4784 6.71 11.2901L3.41 8.00006L13 8.00006C13.2652 8.00006 13.5196 7.8947 13.7071 7.70717C13.8946 7.51963 14 7.26528 14 7.00006C14 6.73484 13.8946 6.48049 13.7071 6.29295C13.5196 6.10542 13.2652 6.00006 13 6.00006L3.41 6.00006L6.71 2.71006C6.80373 2.6171 6.87812 2.5065 6.92889 2.38464C6.97966 2.26278 7.0058 2.13207 7.0058 2.00006C7.0058 1.86805 6.97966 1.73734 6.92889 1.61548C6.87812 1.49362 6.80373 1.38302 6.71 1.29006C6.61704 1.19633 6.50643 1.12194 6.38458 1.07117C6.26272 1.0204 6.13201 0.994261 6 0.994261C5.86799 0.994261 5.73728 1.0204 5.61542 1.07117C5.49356 1.12194 5.38296 1.19633 5.29 1.29006L0.29 6.29006C0.19896 6.38516 0.127593 6.49731 0.0799994 6.62006C-0.0200182 6.86352 -0.0200181 7.1366 0.0799994 7.38006Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat center 0;
        }
        .swiper_button_prev{
            left: 10px;
        }
        .swiper_button_next{
            right: 10px;
            transform: rotate(180deg);
        }
    }

</style>