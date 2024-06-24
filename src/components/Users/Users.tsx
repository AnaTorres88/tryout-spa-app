// Get users from api and render table
import { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { User } from "../../core/interfaces/User";
import "./Users.scss";
import { fetchUsers } from "../../core/http/http";
import { useTranslation } from 'react-i18next';

export default function Users() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState(null);
    const { t } = useTranslation();
    useEffect(() => {
        async function getUsers() {
            setIsLoading(true);
            try {
                const users = await fetchUsers();
                setUsers(users.data);
                setIsLoading(false);
            } catch (error: any) {
                setError(error);
                setIsLoading(false);
            }
        }
        getUsers()
    }, []);

    // Update locally
    function handleUpdateUsers(id: number) {
        const filteredData = users.filter(user => user.id !== id);
        setUsers(filteredData);
    }
    if(error) {
        return <div>Error loading user data</div>
    }
     return (
       <section className="users p-3">
            <h2>{t('users.title')}</h2>
            {!isLoading && <UsersTable users={users} handleUpdateUsers = {handleUpdateUsers}/>}
       </section>
    );
}
  