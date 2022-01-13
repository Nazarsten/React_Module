import React from 'react';

const UserPost = (props) => {
    const{title, body,userId,id}=props
    return (
        <div className='post_post'>
            <ul>
                <li>userId:{userId}</li>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>body:{body}</li>
            </ul>
        </div>
    );
};

export default UserPost;