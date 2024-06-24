import { json } from 'react-router-dom';
import type {User} from '../interfaces/User';
import {fetchUsers, fetchNews, fetchContent} from '../../core/http/http';
import { NewsItem } from '../interfaces/NewsItem';

export const usersLoader = async () => {
    const {data} = await fetchUsers();
    return json({ data });
}

export const languageLoader = async () => {
    const content = await fetchContent();
    return json({ content });
}

export const userDetailLoader = async ({params}) => {
    const users = await fetchUsers();
    const user = users.data.find((user: User) => user.id === +params.userId);
    return json({ user });
}

export const newsDetailLoader = async ({params}) => {
    const news = await fetchNews();
    const newsDetail = news.find((newsItem: NewsItem) => newsItem.id === +params.newsId);
    console.log(newsDetail);
    return json({ newsDetail });
}