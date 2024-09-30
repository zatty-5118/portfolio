"use client";
import { Link as Scroll } from 'react-scroll';
import Link from 'next/link';
import style from './AboutMe.module.scss';
import ScrollReveal from '../../module/ScrollReveal/ScrollReveal.jsx';
import Image from 'next/image';
import profile_icon from '/public/images/aboutMe/profile_icon.webp';
import aboutMe_img_1 from '/public/images/aboutMe/aboutMe_img_1.webp';
import aboutMe_img_2 from '/public/images/aboutMe/aboutMe_img_2.webp';
import aboutMe_img_3 from '/public/images/aboutMe/aboutMe_img_3.webp';
import aboutMe_img_4 from '/public/images/aboutMe/aboutMe_img_4.webp';
import aboutMe_img_5 from '/public/images/aboutMe/aboutMe_img_5.webp';

export default function AboutMe() {
    return (
        <>
            <section id="aboutMe" className={style.aboutMe}>
                <div className="inner">
                    <ScrollReveal move="right">
                        <h2>About Me</h2>
                    </ ScrollReveal>
                    <div className={style.profile}>
                        <div>
                            <ScrollReveal move="right">
                                <div className={style.profile_icon}>
                                    <Image loader={({src}) => src} src={profile_icon} alt="プロフィール画像" layout={"responsive"}/>
                                </div>
                            </ ScrollReveal>
                            <ScrollReveal move="right">
                                <div className={style.summary}>
                                    <p>2019年新卒で旅行会社に入社。商品企画や営業を経験した後、2022年にフロントエンドエンジニアの部署に配属となる。業務ではページのデザインカンプを作成するところから、コーディング、テスト、公開まで一貫して担当。JavaScriptやフレームワークを使用したページの作成を得意とし、フロントエンドだけでなくデザインにも関われることが強み。</p>
                                </div>
                            </ ScrollReveal>
                            <div className={style.image_pc}>
                                <div className={style.image}>
                                    <ScrollReveal move="left">
                                        <Image loader={({src}) => src} src={aboutMe_img_1} alt="About Me PC用画像" layout={"responsive"}/>
                                    </ ScrollReveal>
                                </div>
                                <div className={style.image}>
                                    <ScrollReveal move="right">
                                        <Image loader={({src}) => src} src={aboutMe_img_2} alt="About Me PC用画像" layout={"responsive"}/>
                                    </ ScrollReveal>
                                </div>
                                <div className={style.image}>
                                    <ScrollReveal move="left">
                                        <Image loader={({src}) => src} src={aboutMe_img_3} alt="About Me PC用画像" layout={"responsive"}/>
                                    </ ScrollReveal>
                                </div>
                                <div className={style.image}>
                                    <ScrollReveal move="right">
                                        <Image loader={({src}) => src} src={aboutMe_img_4} alt="About Me PC用画像" layout={"responsive"}/>
                                    </ ScrollReveal>
                                </div>
                                <div className={style.image}>
                                    <ScrollReveal move="left">
                                        <Image loader={({src}) => src} src={aboutMe_img_5} alt="About Me PC用画像" layout={"responsive"}/>
                                    </ ScrollReveal>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.profile_item}>
                                <ScrollReveal move="right">
                                    <dl>
                                        <dd>名前</dd>
                                        <dt>R.M</dt>
                                    </dl>
                                </ ScrollReveal>
                            </div>
                            <div className={style.profile_item}>
                                <ScrollReveal move="right">
                                    <dl>
                                        <dd>生年月日</dd>
                                        <dt>1996/04/29</dt>
                                    </dl>
                                </ ScrollReveal>
                            </div>
                            <div className={style.profile_item}>
                                <ScrollReveal move="right">
                                    <dl>
                                        <dd>出身地</dd>
                                        <dt>東京都</dt>
                                    </dl>
                                </ ScrollReveal>
                            </div>
                            <div className={style.profile_item}>
                                <ScrollReveal move="right">
                                    <dl>
                                        <dd>最終学歴</dd>
                                        <dt>法政大学 卒業</dt>
                                    </dl>
                                </ ScrollReveal>
                            </div>
                            <div className={style.profile_item}>
                                <dl>
                                    <dd>
                                        <ScrollReveal move="right">
                                            スキル
                                        </ ScrollReveal>
                                    </dd>
                                    <dt>
                                        <ScrollReveal move="right">
                                            <div>
                                                <p>言語</p>
                                                <p>HTML、CSS、Sass(SCSS)、JavaScript</p>
                                            </div>
                                        </ ScrollReveal>
                                        <ScrollReveal move="right">
                                            <div>
                                                <p>ライブラリ</p>
                                                <p>React</p>
                                            </div>
                                        </ ScrollReveal>
                                        <ScrollReveal move="right">
                                            <div>
                                                <p>フレームワーク</p>
                                                <p>Astro.js</p>
                                            </div>
                                        </ ScrollReveal>
                                        <ScrollReveal move="right">
                                        <div>
                                            <p>開発ツール</p>
                                            <p>Github、Visual Studio Code、npm、Node.js、vite</p>
                                        </div>
                                        </ ScrollReveal>
                                        <ScrollReveal move="right">
                                        <div>
                                            <p>デザインツール</p>
                                            <p>illustrator、Photoshop、Adobe XD</p>
                                        </div>
                                        </ ScrollReveal>
                                        <ScrollReveal move="right">
                                            <Scroll to='skillList' smooth={ true }>詳しくはこちら↓</Scroll>
                                        </ ScrollReveal>
                                    </dt>
                                </dl>
                            </div>
                            <div className={style.profile_item}>
                                <dl>
                                    <dd>
                                        <ScrollReveal move="right">
                                            趣味
                                        </ ScrollReveal>
                                    </dd>
                                    <dt>
                                        <ScrollReveal move="right">
                                            <div>
                                                <p>野球観戦</p>
                                                <p>横浜DeNAベイスターズの大ファン（ファン歴17年）です。</p>
                                            </div>
                                        </ ScrollReveal>
                                        <ScrollReveal move="right">
                                            <div>
                                                <p>旅行</p>
                                                <p>好きな旅先はハワイと宮古島です！<br />好きなビーチは「カイルアビーチ」と「与那覇前浜ビーチ」です！</p>
                                            </div>
                                        </ ScrollReveal>
                                        <ScrollReveal move="right">
                                            <div>
                                                <p>テニス</p>
                                                <p>小学校1年生の頃から続けている大好きなスポーツです。</p>
                                            </div>
                                        </ ScrollReveal>
                                        <ScrollReveal move="right">
                                            <div>
                                                <p>スキー</p>
                                                <p>中級レベルのコースまでなら転ばずに滑れます。</p>
                                            </div>
                                        </ ScrollReveal>
                                    </dt>
                                </dl>
                            </div>
                            <div className={style.profile_item}>
                                <dl>
                                    <dd>
                                        <ScrollReveal move="right">
                                            リンク
                                        </ ScrollReveal>
                                    </dd>
                                    <dt>
                                        <ScrollReveal move="right">
                                            <div className={style.link}>
                                                <Link href="https://github.com/zatty-5118/" target="_blank">Github</Link>
                                            </div>
                                        </ ScrollReveal>
                                        <ScrollReveal move="right">
                                            <div className={style.link}>
                                                <Link href="https://zatty-5118.github.io/blog/" target="_blank">ブログ</Link>
                                            </div>
                                        </ ScrollReveal>
                                    </dt>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
  