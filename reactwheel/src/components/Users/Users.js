import User from "../User/User";
import {useEffect, useState} from 'react'

const Users = ({users}) => {

    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    )
};

export default Users