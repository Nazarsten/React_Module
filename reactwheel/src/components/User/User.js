import React from 'react';
import {Link} from "react-router-dom";

const User = (props) => {
    const {user} = props
    return (
        <div>
            <Link to={user.id.toString()} state={user}>
                {user.name}
            </Link>
        </div>
    );
};

export default User;