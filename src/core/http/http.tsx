import { Backend } from "../enums/app-enums";
import { NewsItem } from "../interfaces/NewsItem";
import { UsersData } from "../interfaces/UsersData";
import { Content } from "../interfaces/Content";
const { URL } = Backend;

export async function fetchContent(): Promise<Content> {
  const response = await fetch(`${URL}/content`);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch content!!");
  }
  return resData.content;
}


export async function fetchNews(): Promise<NewsItem[]> {
    const response = await fetch(`${URL}/news`);
    const resData = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch news!!");
    }
    return resData.news;
}

export async function fetchUsers(): Promise<UsersData> {
    const response = await fetch(`${URL}/users`);
    const resData = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch users!!");
    }
    return resData.users;
}

export async function deleteUser(userId: number): Promise<void> {
  const response = await fetch(`${URL}/users/${userId}`, {
    method: 'PUT',
  });
  if (!response.ok) {
    throw new Error("Failed to delete user!!");
  }
}
// TODO: delete a user