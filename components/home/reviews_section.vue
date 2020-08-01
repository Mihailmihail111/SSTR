<template>
    <section id="reviews_section">
        <div class="inside">
            <div class="reviews_section">
                <div class="title_h1"><p>Отзывы наших клиентов</p></div>
                <swiper ref="mySwiper" :options="swiperOption" class="reviews_slider_wrap">
                    <swiper-slide>
                        <div class="reviews_slide">
                            <div class="reviews_slide_img">
                                <img src="@/assets/images/reviews_img1.jpg" alt="">
                            </div>
                            <div class="reviews_slide_name">
                                <p>Evgeniy Chernyak</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="reviews_slide">
                            <div class="reviews_slide_img">
                                <img src="@/assets/images/reviews_img2.jpg" alt="">
                            </div>
                            <div class="reviews_slide_name">
                                <p>Oleh Horokhovskyi</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="reviews_slide">
                            <div class="reviews_slide_img">
                                <img src="@/assets/images/reviews_img3.jpg" alt="">
                            </div>
                            <div class="reviews_slide_name">
                                <p>Yury Dud</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="reviews_slide">
                            <div class="reviews_slide_img">
                                <img src="@/assets/images/reviews_img3.jpg" alt="">
                            </div>
                            <div class="reviews_slide_name">
                                <p>Yury Dud</p>
                            </div>
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
                spaceBetween: 10,
            }
        }
    }

};

</script>

