<template>
    <section id="main_section">
        <div class="inside">
            <div class="main_section">
                <swiper ref="mySwiper" :options="swiperOption" class="main_slider_wrap">
                    <swiper-slide >
                        <div class="main_slider">
                            <div class="main_slider_img">
                                <img src="@/assets/images/main_img.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide >
                        <div class="main_slider">
                            <div class="main_slider_img">
                                <img src="@/assets/images/main_img2.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide >
                        <div class="main_slider">
                            <div class="main_slider_img">
                                <img src="@/assets/images/main_img3.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide >
                        <div class="main_slider">
                            <div class="main_slider_img">
                                <img src="@/assets/images/main_img4.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="main_slider_text"><p>Successful Stock Trading Resource</p></div>
            </div>
        </div>
    </section>
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
                spaceBetween: 10,
                loop: true,
                autoplay: {
                    delay: 10000,
                },
            }
        }
    }

};

</script>


