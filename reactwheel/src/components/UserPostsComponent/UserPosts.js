import React from 'react';
import css from '../styles/Users.module.css'
const UserPosts = (props) => {
    const{post}= props
    return (
        <div className={css.user}>
            {post.title}
        </div>
    );
};

export default UserPosts;