"use client";
import { useEffect, useRef } from "react";
import style from './MainView.module.scss';
import Swiper from '../../module/Swiper/Swiper.jsx';
import Image from 'next/image';
import mainView_title from '/public/images/mainView/mainView_title.svg';

export default function MainView() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [videoRef]);

    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

    return (
        <>
            <section id="mainView" className={style.mainView}>
                {/* <Swiper></Swiper> */}
                <div className={style.video}>
                    <video ref={videoRef} autoPlay muted loop playsInline>
                        <source src={`${basePath}/video/mainView.mp4`} type="video/mp4" />
                    </video>
                </div>
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
  