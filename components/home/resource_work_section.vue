<template>
    <section id="resource_work_section">
        <div class="inside">
            <div class="resource_work_section">
                <div class="title_h1"><p>Работа ресурса</p></div>
                <swiper ref="mySwiper" :options="swiperOption" class="resource_work_slider_wrap">
                    <swiper-slide>
                        <div class="resource_work_slide">
                            <div class="resource_work_slide_h1"><p></p></div>
                            <div class="resource_work_slide_img">
                                <img src="@/assets/images/resource_work_img1.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="resource_work_slide">
                            <div class="resource_work_slide_h1"><p>Результаты ставок</p></div>
                            <div class="resource_work_slide_img">
                                <img src="@/assets/images/resource_work_img2.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="resource_work_slide">
                            <div class="resource_work_slide_h1"><p>Currency exchange</p></div>
                            <div class="resource_work_slide_img">
                                <img src="@/assets/images/resource_work_img3.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="resource_work_slide">
                            <div class="resource_work_slide_h1"><p>Money transfers</p></div>
                            <div class="resource_work_slide_img">
                                <img src="@/assets/images/resource_work_img4.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="resource_work_slide">
                            <div class="resource_work_slide_h1"><p>Нами уже зарезервировано 0,2531697%, акций Libra</p></div>
                            <div class="resource_work_slide_img">
                                <img src="@/assets/images/resource_work_img5.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="resource_work_slide">
                            <div class="resource_work_slide_h1"><p>Выплатная таблица дивидендов нашим Ационерам & Инвесторам</p></div>
                            <div class="resource_work_slide_img">
                                <img src="@/assets/images/resource_work_img6.jpg" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper_pagination" slot="pagination"></div>
                </swiper>
                <div class="resource_work_text">
                    <p> Реальное время - трансляция графиков “ТОР” валютных пар (USD, EUR, BTC, ETH)</p>
                    <p>Трансляция онлайн торгов нашими брокерами с офиса, реальные ставки и зароботки нашего ресурса</p>
                    <p>Графики идут с задержкой в 3 секунды, для правильной корректировки</p>
                </div>
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
                spaceBetween: 30,
                pagination: {
                    clickable: true,
                    el: ".resource_work_slider_wrap .swiper_pagination",
                },
            }
        }
    }

};

</script>


