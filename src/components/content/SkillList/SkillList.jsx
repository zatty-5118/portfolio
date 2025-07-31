"use client";
import style from './SkillList.module.scss';
import ScrollReveal from '../../module/ScrollReveal/ScrollReveal.jsx';
import Image from 'next/image';
import html from '/public/images/skillList/icon/html-5.svg';
import css from '/public/images/skillList/icon/css-3.svg';
import sass from '/public/images/skillList/icon/sass.svg';
import javascript from '/public/images/skillList/icon/javascript.svg';
import typescript from '/public/images/skillList/icon/typescript.svg';
import react from '/public/images/skillList/icon/react.svg';
import vue from '/public/images/skillList/icon/vue.svg';
import astro from '/public/images/skillList/icon/astro.svg';
import nextjs from '/public/images/skillList/icon/nextjs.svg';
import nuxt from '/public/images/skillList/icon/nuxt.svg';
import tailwindcss from '/public/images/skillList/icon/tailwindcss.svg';
import git from '/public/images/skillList/icon/git.svg';
import github from '/public/images/skillList/icon/github.svg';
import visualStudioCode from '/public/images/skillList/icon/visual-studio-code.svg';
import vite from '/public/images/skillList/icon/vite.svg';
import npm from '/public/images/skillList/icon/npm.svg';
import nodejs from '/public/images/skillList/icon/nodejs.svg';
import photoshop from '/public/images/skillList/icon/adobe-photoshop.svg';
import illustrator from '/public/images/skillList/icon/adobe-illustrator.svg';
import xd from '/public/images/skillList/icon/adobe-xd.svg';
import notion from '/public/images/skillList/icon/notion.svg';
import wordpress from '/public/images/skillList/icon/wordpress.svg';
import figma from '/public/images/skillList/icon/figma.svg';
import bitbucket from '/public/images/skillList/icon/bitbucket.svg';
import confluence from '/public/images/skillList/icon/confluence.svg';
import teams from '/public/images/skillList/icon/microsoft-teams.svg';
import slack from '/public/images/skillList/icon/slack.svg';
import sourcetree from '/public/images/skillList/icon/sourcetree.svg';
import jira from '/public/images/skillList/icon/jira.svg';
import partytown from '/public/images/skillList/icon/partytown.svg';
import gpt from '/public/images/skillList/icon/gpt.svg';
import storybook from '/public/images/skillList/icon/storybook-icon.svg';
import windows from '/public/images/skillList/icon/microsoft-windows.svg';
import mac from '/public/images/skillList/icon/apple.svg';

export default function Home() {
    return (
        <>
            <section id="skillList" className={style.skillList}>
                <div className={style.wave_top}></div>
                <div className="inner">
                    <ScrollReveal move="left">
                        <h2>Skill List</h2>
                    </ ScrollReveal>
                    <div className={style.wrapper}>
                        <div id="language">
                            <ScrollReveal move="left">
                                <h3>言語</h3>
                            </ ScrollReveal>
                            <ul className={style.skill_list}>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={html} alt="html アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>HTML-5</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本ルールを理解し、タグの使い分けやSEOへの最適化も考慮したコーディングが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={css} alt="css アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>CSS-3</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>セレクタやプロパティを理解し、レスポンシブ対応を考慮したコーディングが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={sass} alt="sass アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Sass(SCSS)</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>@mixinや@functionを活用したコーディングも可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={javascript} alt="javascript アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>JavaScript</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>モーダルやタブ切り替えなどに加えて、fetchを活用したAPIの取得にも対応可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={typescript} alt="typescript アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>TypeScript</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_0}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>今後学習予定</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                            </ul>
                        </div>
                        <div id="library">
                            <ScrollReveal move="left">
                                <h3>ライブラリ</h3>
                            </ ScrollReveal>
                            <ul className={style.skill_list}>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={react} alt="react アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>React</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>Swiperやリアルタイム検索機能、モーダルなど部分的なコーディングが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={vue} alt="vue アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Vue</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_0}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>現在学習中</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={partytown} alt="partytown アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>partytown</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>GTMをWebWorker上で動作させることが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={storybook} alt="storybook アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Storybook</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>コンポーネントの作成やカスタマイズなどが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                            </ul>
                        </div>
                        <div id="framework">
                            <ScrollReveal move="left">
                                <h3>フレームワーク</h3>
                            </ ScrollReveal>
                            <ul className={style.skill_list}>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={astro} alt="Astro.js アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Astro.js</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本文法や仕組みを理解し、300ページ近くの大規模サイトを1から作成可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={nextjs} alt="Next.js アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Next.js</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_1}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本的な知識は備えているため、環境構築から簡単な静的ページを作成することが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={nuxt} alt="Nuxt.js アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Nuxt.js</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_0}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>今後学習予定</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={tailwindcss} alt="tailwindcss アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Tailwind CSS</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_1}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本的な知識は備えているため、ページ制作に用いることが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                            </ul>
                        </div>
                        <div id="devTool">
                            <ScrollReveal move="left">
                                <h3>開発ツール</h3>
                            </ ScrollReveal>
                            <ul className={style.skill_list}>
                            <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={git} alt="git アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Git</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>ローカルレポジトリの作成、クローン、コミット、プッシュまで一通りの操作が可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={github} alt="github アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Github</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>レポジトリの作成やGitHub PagesとActionsを活用した静的ページの公開が可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={visualStudioCode} alt="Visual Studio Code アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Visual Studio Code</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>拡張機能の導入や、Live Shareによる複数人での共同作業が可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={vite} alt="vite アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Vite</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>プロジェクトの作成やconfigファイルを活用した設定変更が可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={npm} alt="npm アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>npm</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>パッケージのインストールやテストサーバーの立ち上げ、scriptの実行などが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={nodejs} alt="Node.js アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Node.js</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>package.jsonの編集やfsモジュールを活用したscriptの記述が可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={bitbucket} alt="Bitbucket アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Bitbucket</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_1}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>プルリクエストの作成やマージなどの操作が可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={sourcetree} alt="sourcetree アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>sourcetree</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>ローカルレポジトリの作成、クローン、コミット、プッシュまで一通りの操作が可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                            </ul>
                        </div>
                        <div id="designTool">
                            <ScrollReveal move="left">
                                <h3>デザインツール</h3>
                            </ ScrollReveal>
                            <ul className={style.skill_list}>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={illustrator} alt="illustrator アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>illustrator</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本操作を理解し、テキストの装飾やグラデーション、地図の作成が可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={photoshop} alt="Photoshop アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Photoshop</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本操作を理解し、画像の加工や切り抜きなどが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={xd} alt="XD アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Adobe XD</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本操作を理解し、ランディングページのデザインカンプを1から作成可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={figma} alt="Figma アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Figma</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本操作を理解し、バナーの作成や開発モードを使用したマークアップが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>

                            </ul>
                        </div>
                        <div id="aiTool">
                            <ScrollReveal move="left">
                                <h3>AIツール</h3>
                            </ ScrollReveal>
                            <ul className={style.skill_list}>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={gpt} alt="GPT アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Chat GPT</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>出力構造と挙動特性を把握し、プロンプトの構文設計・再現性向上のための制御テンプレート開発に対応可能。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                            </ul>
                        </div>
                        <div id="chatTool">
                            <ScrollReveal move="left">
                                <h3>チャットツール</h3>
                            </ ScrollReveal>
                            <ul className={style.skill_list}>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={teams} alt="teams アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Microsoft teams</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>チャットのやり取りやグループの作成などが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={slack} alt="slack アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>slack</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_3}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>リストによるタスク管理やハドルミーティングを行うことが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                            </ul>
                        </div>
                        <div id="os">
                            <ScrollReveal move="left">
                                <h3>OS</h3>
                            </ ScrollReveal>
                            <ul className={style.skill_list}>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={windows} alt="Windows アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Windows</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本操作を理解し、環境構築やレジストリの変更、修正などに対応可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={mac} alt="Mac アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Mac</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_1}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本操作を理解し、環境構築などにも対応可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                            </ul>
                        </div>
                        <div id="other">
                            <ScrollReveal move="left">
                                <h3>その他</h3>
                            </ ScrollReveal>
                            <ul className={style.skill_list}>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={notion} alt="notion アイコン" layout={"responsive"}/>

                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>Notion</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_2}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>インテグレーションの作成や、データベースの操作などが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={wordpress} alt="wordpress アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>WordPress</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_1}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>基本的な操作を理解し、ブログなどの記事ページを作成することが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={jira} alt="JIRA アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>JIRA</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_1}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>チケットの作成やコメントでのやり取りが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                                <li>
                                    <ScrollReveal move="left">
                                        <div className={style.skill_item}>
                                            <div className={style.image}>
                                                <Image loader={({src}) => src} src={confluence} alt="confluence アイコン" layout={"responsive"}/>
                                            </div>
                                            <div className={style.details}>
                                                <div className={style.header}>
                                                    <div className={style.name}>
                                                        <h3>confluence</h3>
                                                    </div>
                                                    <div className={style.rate}>
                                                        <span className={`${style.rate_star} ${style.rate_1}`}></span>
                                                    </div>
                                                </div>
                                                <div className={style.description}>
                                                    <p>ページの作成やカスタマイズが可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ ScrollReveal>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.wave_bottom}></div>
              </section>
        </>
    );
  }
  