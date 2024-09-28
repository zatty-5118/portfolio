"use client";
import style from './MainView.module.scss';
import Swiper from '../../module/Swiper/Swiper.jsx';
import Image from 'next/image';
import mainView_title from '/public/images/mainView/mainView_title.svg';

export default function MainView() {
    return (
        <>
            <section id="mainView" className={style.mainView}>
                <Swiper></Swiper>
                <div className={style.pageTitle}>
                    <h1>
                        <Image loader={({src}) => src} src={mainView_title} alt="zatty's Portfolio ロゴ" layout={"responsive"}/>
                    </h1>
                </div>
                <div className={style.scrollDown}>
                    <span>Scroll</span>
                </div>
            </section>
        </>
    );
}
  