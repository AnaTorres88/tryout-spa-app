import { useLoaderData } from "react-router-dom";

export default function UserDetail() {
    const { newsDetail } = useLoaderData();
    const date = new Date(newsDetail.published_at);

    return (
    <>
        <section className="p-3">
            <h3>{newsDetail.title}</h3>
            <img src={newsDetail.image_url} alt={newsDetail.snippet}/>
            <p>{date.toDateString()}</p>
            <p>{newsDetail.description}</p>
        </section>
    </>
    );
}