<template>
    <div class="pop_w pop_center news_pop_up">
        <div class="pop_bg"></div>
        <div class="pop_scroll">
            <div class="inside">
                <div class="pop">
                    <div class="pop_in_wrap">
                        <div class="news_pop_wrap flex flex_sb">
                            <div class="news_pop_item">
                                <a href="">
                                    <div class="news_pop_img">
                                        <img src="@/assets/images/news_pop_img1.jpg" alt="">
                                    </div>
                                    <div class="news_pop_text"><p>Новости мира Forbes </p></div>
                                </a>
                            </div>
                            <div class="news_pop_item">
                                <a href="">
                                    <div class="news_pop_img">
                                        <img src="@/assets/images/news_pop_img2.jpg" alt="">
                                    </div>
                                    <div class="news_pop_text"><p>Новости о громких Start Up</p></div>
                                </a>
                            </div>
                            <div class="news_pop_item">
                                <a href="">
                                    <div class="news_pop_img">
                                        <img src="@/assets/images/news_pop_img3.jpg" alt="">
                                    </div>
                                    <div class="news_pop_text"><p>Лекции бизнес семинаров </p></div>
                                </a>
                            </div>
                            <div class="news_pop_item">
                                <a href="">
                                    <div class="news_pop_img">
                                        <img src="@/assets/images/news_pop_img4.jpg" alt="">
                                    </div>
                                    <div class="news_pop_text"><p>Выгодные предложения наших Компаньонов </p></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>


export default {

};

</script>


<style lang="scss">
    .news_pop_up{
        .inside{
            padding: 0;
        }
        .pop_in_wrap{
            padding: 15px;
        }
    }
    .news_pop_item{
        margin-bottom: 10px;
        a{
            display: block;
            position: relative;
            &::before{
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 50%;
                background: linear-gradient(359.29deg, #171717 0.57%, rgba(0, 0, 0, 0) 99.35%);
            }
        }
    }

    .news_pop_text{
        font-weight: 500;
        font-size: 15px;
        line-height: 16px;
        color: #FFFFFF;
        position: absolute;
        left: 0;
        bottom: 15px;
        text-align: left;
        padding-left: 13px;
    }

    .news_pop_wrap{
        flex-wrap: wrap;
    }
    

</style>