import Link from 'next/link';
import style from './WorkList.module.scss';
import ScrollReveal from '../../module/ScrollReveal/ScrollReveal.jsx';
import Modal from '../../module/Modal/Modal.jsx';

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
                                        img="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/workList/portfolio.webp"
                                        title="zatty's Portfolio"
                                        description="ポートフォリオです。業務では使っていないNext.jsをアウトプットするために使用しました。シンプル且つ素早く目的の情報にたどり着けるよう作成しました。SSGでビルドしているため、next/imageの代わりにsquooshを使ってwebpに変換してます。「News List」はNotion APIを使い、表示させています。"
                                        language="Sass(SCSS)"
                                        framework="Next.js"
                                        library="Swiper、react-scroll、scrollreveal"
                                        url=""
                                        status="open"
                                    />
                                </li>
                                <li>
                                    <Modal 
                                        buttonLabel="ブログ(製作中)"
                                        img="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/workList/blog.webp"
                                        title="zatty's Blog(製作中)"
                                        description="現在製作中のブログです。Astro.jsを使用し、ブログはmdxファイルで記述しています。構成はトップ画面、記事一覧、カテゴリー、プロフィールの4ページ構成を想定しています。"
                                        language="Sass(SCSS)、JavaScript"
                                        framework="Astro.js"
                                        library="React、Swiper"
                                        url=""
                                        status="close"
                                    />
                                </li>
                            </ul>
                        </div>
                </div>
            </section>
        </>
    );
}
  