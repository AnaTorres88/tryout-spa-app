import { User } from "./User";

export interface UsersData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}