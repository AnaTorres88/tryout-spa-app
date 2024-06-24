import { useLoaderData } from "react-router-dom";
export default function UserDetail() {
    const {user} = useLoaderData();
    
    return (
    <>
        <section className="p-3">
        <h2> User Detail</h2>
        <img src={user.avatar}/>
        <div>{user.first_name} {user.last_name}</div>
        <div>{user.email}</div>
        </section>
    </>
    );
}