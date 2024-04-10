import Header from '../components/base/Header/Header.jsx';
import Footer from '../components/base/Footer/Footer.jsx';
import MainView from '../components/content/MainView/MainView.jsx';
import WorkList from '../components/content/WorkList/WorkList.jsx';
import AboutMe from '../components/content/AboutMe/AboutMe.jsx';
import SkillList from '../components/content/SkillList/SkillList.jsx';
import NewsList from '../components/content/NewsList/NewsList.jsx';
import "../styles/global.scss";

const siteName = "zatty's Portfolio";
const description = "フロントエンドエンジニアの「zatty」が作成したNext.jsベースのポートフォリオです。シンプル且つ素早く目的の情報にたどり着けるよう作成しました。SSGでビルドしているため、next/imageの代わりにsquooshを使ってwebpに変換してます。「News List」はNotion APIを使い、表示させています。";
const url = "https://zatty-5118.github.io/portfolio/"

export const metadata = {
  title: siteName,
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
};

export default async function Home() {

  return (
    <>
      <Header />
      <main>
        <MainView />
        <WorkList />
        <AboutMe />
        <SkillList />
        <NewsList />
      </main> 
      <Footer />
    </>
  );
}
