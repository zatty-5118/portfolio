import Link from 'next/link';
import style from './WorkList.module.scss';
import ScrollReveal from '../../module/ScrollReveal/ScrollReveal.jsx';
import Modal from '../../module/Modal/Modal.jsx';
import portfolio from '/public/images/workList/thumbnail/portfolio.jpg';
import blog from '/public/images/workList/thumbnail/blog.jpg';
import gptdoc from '/public/images/workList/thumbnail/gptdoc.jpg';
import storybook from '/public/images/workList/thumbnail/storybook.jpg';

export default function WorkList() {
    return (
        <>
            <section id="workList" className={style.workList}>
                <div className="inner">
                    <ScrollReveal move="bottom">
                        <h2>Work List</h2>
                    </ ScrollReveal>
                    <div className={style.wrapper}>
                        <ul>
                            <li>
                                <Modal 
                                    buttonLabel="ポートフォリオ"
                                    img={portfolio}
                                    title="zatty's Portfolio"
                                    description="ポートフォリオです。業務では使っていないNext.jsをアウトプットするために使用しました。シンプル且つ素早く目的の情報にたどり着けるよう作成しました。SSGでビルドしているため、next/imageの代わりにsquooshを使ってwebpに変換してます。「News List」はNotion APIを使い、表示させています。"
                                    period="2024/4/3～2024/4/10"
                                    language="Sass(SCSS)"
                                    framework="Next.js"
                                    library="Swiper、react-scroll、scrollreveal"
                                    url="https://zatty-5118.github.io/portfolio/"
                                    status="open"
                                />
                            </li>
                            <li>
                                <Modal 
                                    buttonLabel="ブログ"
                                    img={blog}
                                    title="zatty's Blog"
                                    description="日々の出来事を気ままに発信するブログです。ブログの記事はNotionで書いています。フロントエンド周りはAstro.jsを使い、API経由でブログの記事を取得して表示させています。"
                                    period="2024/4/5～2024/4/15"
                                    language="Sass(SCSS)、JavaScript"
                                    framework="Astro.js"
                                    library="unified、remark"
                                    url="https://zatty-5118.github.io/blog/"
                                    status="open"
                                />
                            </li>
                            <li>
                                <Modal 
                                    buttonLabel="GPT出力制御プロジェクト"
                                    img={gptdoc}
                                    title="GPT出力制御プロジェクト"
                                    description="本ページは、ChatGPTを用いた創作出力の制御構造を設計・検証した記録をまとめたものです。出力内容の再現性を高めるため、独自のテンプレート制御・照合ルール・ループ構造を設計し、実際のプロンプト例や比較結果を通じて、構造設計の効果を可視化しています。"
                                    period="2025/4/1～2025/4/20"
                                    language="HTML、CSS、Javascript"
                                    framework="未使用"
                                    library="未使用"
                                    url="https://zatty-5118.github.io/gpt-doc/"
                                    status="open"
                                />
                            </li>
                            <li>
                                <Modal 
                                    buttonLabel="Storybook"
                                    img={storybook}
                                    title="zatty's Storybook"
                                    description="Vite×React×Storybookで作成したUIコンポーネントのカタログ集です。開発やデザインの効率化を目的として、ViteとReact、Storybookを活用して開発された再利用可能なUIコンポーネントを一覧で紹介しています。各コンポーネントは用途や動作が視覚的に確認できます。"
                                    period="2025/7/11～2025/7/30"
                                    language="HTML Sass(SCSS)、JavaScript"
                                    framework="React、Vite"
                                    library="Storybook"
                                    url="https://zatty-5118.github.io/storybook/"
                                    status="open"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.wave}></div>
            </section>
        </>
    );
}
  