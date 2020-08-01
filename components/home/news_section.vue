<template>
    <section id="news_section">
        <div class="inside">
            <div class="news_section">
                <div class="title_h1"><p>Актуальные новости бизнеса</p></div>
                <swiper ref="mySwiper" :options="swiperOption" class="news_slider_wrap">
                    <swiper-slide>
                        <div class="news_slide">
                            <div class="news_slide_img">
                                <img src="@/assets/images/news_img1.jpg" alt="">
                            </div>
                            <div class="news_slide_name">
                                <p>Новости мира Forbes </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="news_slide">
                            <div class="news_slide_img">
                                <img src="@/assets/images/news_img2.jpg" alt="">
                            </div>
                            <div class="news_slide_name">
                                <p>Новости о громких Start Up</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="news_slide">
                            <div class="news_slide_img">
                                <img src="@/assets/images/news_img3.jpg" alt="">
                            </div>
                            <div class="news_slide_name">
                                <p>Лекции бизнес семинаров  </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="news_slide">
                            <div class="news_slide_img">
                                <img src="@/assets/images/news_img4.jpg" alt="">
                            </div>
                            <div class="news_slide_name">
                                <p>Выгодные предложения наших Компаньонов   </p>
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

