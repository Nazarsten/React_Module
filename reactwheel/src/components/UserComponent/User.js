import React from 'react';
import {Link} from "react-router-dom";
import css from '../styles/Users.module.css'


const User = (props) => {
    const {user} = props
    return (
        <div className={css.user}>
            <Link to={user.id.toString()} state={user}>
                {user.name}
            </Link>
        </div>
    );
};

export default User;