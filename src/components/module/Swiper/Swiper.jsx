"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import 'swiper/css/bundle';
import style from "./Swiper.module.scss";

export default function MySwiper(){
    const delaySpeed = 3000;

    return (
        <Swiper
            slidesPerView = { 1 }
            centeredSlides = { true }
            loop = { true }
            speed = { 1000 }
            allowTouchMove = { false }
            init = { false }
            observer={true}
            modules = {
                [ Autoplay,EffectFade ] 
            }
            effect='fade'
            autoplay = {
                {
                    delay: delaySpeed,
                    disableOnInteraction: false
                }
            }
            
            onSlideChangeTransitionStart = {
                () => {
                    const progressBar = document.querySelector('.progressbar_in');
                    function start_progressBar() {
                        progressBar.style.transitionDuration = '0s',
                        progressBar.style.transform = 'scaleX(0)'
                    };
                    start_progressBar();
                }
            }

            onSlideChangeTransitionEnd = {
                () => {
                    const progressBar = document.querySelector('.progressbar_in');
                    function end_progressBar() {
                        progressBar.style.transitionDuration = delaySpeed + 'ms';
                        progressBar.style.transform = 'scaleX(1)';
                    }
                    end_progressBar();
                }
            }
        >
            <SwiperSlide>
                <div className={style.slide_item}>
                    <figure>
                        <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/mainView/swiper/slide_1.webp" alt="ハワイ・昼間のカイルアビーチ" width={1950} height={845}/>
                    </figure>
                    <figcaption>
                        <p>ハワイ・昼間のカイルアビーチ</p>
                        <p>撮影日：2019/3/15</p>
                    </figcaption>
                    <span></span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.slide_item}>
                    <figure>
                        <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/mainView/swiper/slide_2.webp" alt="シンガポール・マーライオンの景色" width={1950} height={845}/>
                    </figure>
                    <figcaption>
                        <p>シンガポール・マーライオン</p>
                        <p>撮影日：2019/1/6</p>
                    </figcaption>
                    <span></span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.slide_item}>
                    <figure>
                        <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/mainView/swiper/slide_3.webp" alt="ハワイ・ワイキキビーチと夕陽" width={1950} height={845}/>
                    </figure>
                    <figcaption>
                        <p>ハワイ・ワイキキビーチと夕陽</p>
                        <p>撮影日：2017/9/12</p>
                    </figcaption>
                    <span></span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.slide_item}>
                    <figure>
                        <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/mainView/swiper/slide_4.webp" alt="京都・圓光寺の敷き紅葉とお地蔵さん" width={1950} height={845}/>
                    </figure>
                    <figcaption>
                        <p>京都・圓光寺の敷き紅葉とお地蔵さん</p>
                        <p>撮影日：2016/11/25</p>
                    </figcaption>
                    <span></span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.slide_item}>
                    <figure>
                        <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/mainView/swiper/slide_5.webp" alt="沖縄・果報バンタの絶景" width={1950} height={845}/>
                    </figure>
                    <figcaption>
                        <p>沖縄・果報バンタの絶景</p>
                        <p>撮影日：2023/3/1</p>
                    </figcaption>
                    <span></span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.slide_item}>
                    <figure>
                        <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/mainView/swiper/slide_6.webp" alt="ハワイ・ダイヤモンドヘッドからの眺め" width={1950} height={845}/>
                    </figure>
                    <figcaption>
                        <p>ハワイ・ダイヤモンドヘッドからの眺め</p>
                        <p>撮影日：2023/3/16</p>
                    </figcaption>
                    <span></span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.slide_item}>
                    <figure>
                        <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/mainView/swiper/slide_7.webp" alt="ハワイ・昼間のワイキキビーチ" width={1950} height={845}/>
                    </figure>
                    <figcaption>
                        <p>ハワイ・昼間のワイキキビーチ</p>
                        <p>撮影日：2023/3/16</p>
                    </figcaption>
                    <span></span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.slide_item}>
                    <figure>
                        <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/mainView/swiper/slide_8.webp" alt="新潟・上越国際スキー場の景色" width={1950} height={845}/>
                    </figure>
                    <figcaption>
                        <p>新潟・上越国際スキー場の景色</p>
                        <p>撮影日：2022/1/29</p>
                    </figcaption>
                    <span></span>
                </div>
            </SwiperSlide>
            <div className={style.progressbar}>
                <span className="progressbar_in"></span>
            </div>
        </Swiper>

    )
}