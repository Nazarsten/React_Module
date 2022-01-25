import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

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
                {user.name}
                {}
            </div>
            <div><Outlet/></div>
        </div>
    );
}

export default UserDetailsPage;