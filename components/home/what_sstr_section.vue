<template>
    <section id="what_sstr_section">
        <div class="inside">
            <div class="what_sstr_section">
                <div class="title_h1"><p>Что такое SSTR?</p></div>
                <swiper ref="mySwiper" :options="swiperOption" class="what_sstr_slider_wrap">
                    <swiper-slide>
                        <div class="what_sstr_slide">
                            <a href="">
                                <div class="what_sstr_img">
                                    <img src="@/assets/images/what_sstr_img1.jpg" alt="">
                                </div>
                                <div class="what_sstr_text"><p>Successful Stock Trading Resource office in Norway</p></div>
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="what_sstr_slide">
                            <a href="">
                                <div class="what_sstr_img">
                                    <img src="@/assets/images/what_sstr_img1.jpg" alt="">
                                </div>
                                <div class="what_sstr_text"><p>Successful Stock Trading Resource office in Norway</p></div>
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="what_sstr_slide">
                            <a href="">
                                <div class="what_sstr_img">
                                    <img src="@/assets/images/what_sstr_img1.jpg" alt="">
                                </div>
                                <div class="what_sstr_text"><p>Successful Stock Trading Resource office in Norway</p></div>
                            </a>
                        </div>
                    </swiper-slide>
                </swiper>
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
                slidesPerView: "auto",
                spaceBetween: 15,
                centeredSlides: true,
                loop: true,
            }
        }
    }

};

</script>


