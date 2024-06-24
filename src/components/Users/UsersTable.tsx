import { Link } from "react-router-dom";
import { User } from "../../core/interfaces/User";
import { deleteUser } from "../../core/http/http";
import { useTranslation } from "react-i18next";
export default function UsersTable({ users, handleUpdateUsers }: { users: User[], handleUpdateUsers: Function }) {
    const { t } = useTranslation();
    const tableHeadings: string[] = t('users.tableHeadings', {returnObjects: true});
    async function  handleDeleteUser(id: number): Promise<void> {
        try {
            await deleteUser(id);
            handleUpdateUsers(id);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
    return (
       <table className="table">
            <thead>
                <tr>
                    {tableHeadings.map(heading => <th scope="col" key={heading}>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                { users.map((user) => 
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td><img className="avatar" src = {user.avatar}/></td>
                        <td>
                            <Link to={`/users/${user.id}`}><button className="btn btn-primary">{t('users.detailBtn')}</button></Link>
                            <button className="btn btn-link" onClick={() => handleDeleteUser(user.id)}>{t('users.deleteBtn')}</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
       </table>
    );
}
  