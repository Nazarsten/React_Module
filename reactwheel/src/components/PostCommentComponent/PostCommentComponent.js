import React from 'react';
import css from "../styles/Posts.module.css"

const PostCommentComponent = (props) => {
    const{comment}=props
    return (
        <div className={css.comment}>
            <ul>
                <li>email:{comment.email}</li>
                <li>comment:{comment.body}</li>
            </ul>
        </div>
    );
};

export default PostCommentComponent;