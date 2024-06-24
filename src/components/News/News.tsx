import { useEffect, useState } from "react";
import { NewsItem } from "../../core/interfaces/NewsItem";
import { fetchNews } from "../../core/http/http";
import "./News.scss";
import homeimg1 from "../../assets/home-img1.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function News() {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState<NewsItem[]>([]);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        async function getNews() {
            setIsLoading(true);

            try {
                const news = await fetchNews()
                setNews(news);
                setIsLoading(false);
            } catch (error: any) {
                setError(error.message || { message: "ERROR" });
                setIsLoading(false);
            }
        }
        getNews()
    }, []);
    if(error) {
        return <div>Error loading user data</div>
    }
    return (
       <section id="hero-news" className="container">
            <h2 className="p-2">{t('news.title')}</h2>
            <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2">
                {isLoading ? <p>Loading...</p> :
                    <ul className="list-group news-container">
                        { news.map((newsItem) =>
                            <Link to={`/news/${newsItem.id}`}  key={newsItem.id} className="list-group-item">
                                    <li className="new-element">
                                        <div className="img-container">
                                            <img src={newsItem.image_url}/>
                                        </div>
                                        <div>
                                            <h4>{newsItem.title}</h4>
                                            <p>{newsItem.snippet}</p>
                                        </div>
                                    </li>
                            </Link>
                        )}
                    </ul>
                }
                <img className= "home-news-img img-fluid" src={homeimg1} alt="Berries closeup"/>
            </div>
        </section>
    );
}
  