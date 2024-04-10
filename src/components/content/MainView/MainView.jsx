import style from './MainView.module.scss';
import Swiper from '../../module/Swiper/Swiper.jsx';

export default function MainView() {
    return (
        <>
            <section id="mainView" className={style.mainView}>
                <Swiper></Swiper>
                <div className={style.pageTitle}>
                    <h1>
                        <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/cc213965352f2e94e4f30def25d075348d685e35/public/images/mainView/zatty'sPortfolio.svg" alt="zatty's Portfolio ロゴ" width={200} height={100}/>
                    </h1>
                </div>
                <div className={style.scrollDown}>
                    <span>Scroll</span>
                </div>
            </section>
        </>
    );
}
  