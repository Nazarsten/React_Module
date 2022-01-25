import React from 'react';
import css from '../styles/Posts.module.css'
import {Link} from "react-router-dom";

const PostComponent = (props) => {
    const {post} = props
    return (
        <div className={css.post}>
            <Link to={post.id.toString()} state={post} >
                {post.title}
            </Link>
        </div>
    );
};

export default PostComponent;