import style from './SkillList.module.scss';
import ScrollReveal from '../../module/ScrollReveal/ScrollReveal.jsx';
export default function Home() {
    return (
        <>
            <section id="skillList" className={style.skillList}>
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/html-5.svg" alt="html アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/css-3.svg" alt="css アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/sass.svg" alt="sass アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/javascript.svg" alt="javascript アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/typescript.svg" alt="typescript アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/react.svg" alt="React アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/vue.svg" alt="Vue アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/astro.svg" alt="Astro.js アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/nextjs.svg" alt="Next.js アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/nuxt.svg" alt="Nuxt.js アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/tailwindcss.svg" alt="tailwindcss アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/git.svg" alt="git アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/github.svg" alt="github アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/visual-studio-code.svg" alt="Visual Studio Code アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/vite.svg" alt="vite アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/npm.svg" alt="npm アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/nodejs.svg" alt="Node.js アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/adobe-illustrator.svg" alt="illustrator アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/adobe-photoshop.svg" alt="Photoshop アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/adobe-xd.svg" alt="XD アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/notion.svg" alt="notion アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                                                <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/08f979ddd7f2ed365b459eb65fe9466934152ff7/public/images/skillList/wordpress.svg" alt="wordpress アイコン" width={256} height={256} loading="lazy" decoding="async" />
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
                            </ul>
                        </div>
                    </div>
                </div>
              </section>
        </>
    );
  }
  