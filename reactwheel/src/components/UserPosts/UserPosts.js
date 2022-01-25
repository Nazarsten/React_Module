import React from 'react';

const UserPosts = (props) => {
    const{post}= props
    return (
        <div>
            {post.title}
        </div>
    );
};

export default UserPosts;