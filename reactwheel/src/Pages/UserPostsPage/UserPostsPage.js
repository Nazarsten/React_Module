import React, {useEffect, useState} from 'react';
import {useParams,} from "react-router-dom";
import {userService} from "../../services/user.service/user.service";
import UserPosts from "../../components/UserPostsComponent/UserPosts";


const UserPostsPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        userService.getAllById(id).then(value => setPosts([...value]))
    }, [id])
    console.log(posts)

    return (
        <div>
            {posts.map(post => <UserPosts key={post.id} post={post}/>)}
        </div>
    );
}

export default UserPostsPage;