import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'
import {userService} from "../../../services/user.service/user.service";
import User from "../../User/User";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll.then(users =>{setUsers(users)})
    },[])


    return (
        <div>
            <div>
                {users.map(user=><User key={user.id} user={user}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};
export default UsersPage;