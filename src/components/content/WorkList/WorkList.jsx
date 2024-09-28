import Link from 'next/link';
import style from './WorkList.module.scss';
import ScrollReveal from '../../module/ScrollReveal/ScrollReveal.jsx';
import Modal from '../../module/Modal/Modal.jsx';
import portfolio from '/public/images/workList/portfolio.jpg';
import blog from '/public/images/workList/blog.jpg';

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
                            </ul>
                        </div>
                </div>
            </section>
        </>
    );
}
  