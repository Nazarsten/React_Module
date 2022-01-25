import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

const UserDetailsPage = () => {
    const {id} = useParams();
    const {state:selectedUser} = useLocation();
    const [user,setUser] = useState({});

    useEffect(()=>{
        setUser(selectedUser)
    },[id])
    console.log(user)
    return (
        <div>
            <div>
                <ul>
                    <li>id: {user.id}</li>
                    <li>name: {user.name}</li>
                    <li>username: {user.username}</li>
                    <li>email: {user.email}</li>
                    <li>website: {user.website}</li>
                    <li>Addres:
                        <ul>
                            <li>suite: {user.address?.suite}</li>
                            <li>zipcode: {user.address?.zipcode}</li>
                            <li>city: {user.address?.city}</li>
                            <li> geo.lat: {user.address?.geo.lat}</li>
                            <li>geo.lng: {user.address?.geo.lng}</li>
                        </ul>
                    </li>
                    <li>Company:
                        <ul>
                            <li>bs: {user.company?.bs}</li>
                            <li>catchPhrase: {user.company?.catchPhrase}</li>
                            <li>name: {user.company?.name}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div><Outlet/></div>
            <Link to={'posts'} state={selectedUser}>
                <button>Posts</button>
            </Link>
        </div>
    );
}

export default UserDetailsPage;