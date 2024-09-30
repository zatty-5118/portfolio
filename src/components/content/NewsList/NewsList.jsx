import style from './NewsList.module.scss';
import ScrollReveal from '../../module/ScrollReveal/ScrollReveal.jsx';
import array__allNewsData from '../../api/notion/route.jsx';

export default async function NewsList(){
    
    return (
        <section id="newsList" className={style.newsList}>
            <div className="inner">
                <ScrollReveal move="top">
                    <h2>News List</h2>
                </ ScrollReveal>
                <ScrollReveal move="top">
                    <div className={style.wrapper}>
                        <ul>
                            {array__allNewsData.map((news,index) =>
                                <li key={index}>
                                    <div className={style.head}>
                                        <div className={style.date}>
                                            <time dateTime={news.date}>{`${new Date(news.date).getFullYear()}/${('0'+(new Date(news.date).getMonth()+1)).slice(-2)}/${('0'+(new Date(news.date).getDate())).slice(-2)}`}</time>
                                        </div>
                                        <div className={style.category}>
                                            <p className={`${news.category === "Portfolio" ? style.portfolio : style.blog}`}>{news.category}</p>
                                        </div>
                                    </div>
                                    <div className={style.title}>
                                        <p>{news.title}</p>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </ ScrollReveal>
            </div>
        </section>

    )
}
