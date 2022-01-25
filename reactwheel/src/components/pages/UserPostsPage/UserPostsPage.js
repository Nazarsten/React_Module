import React, {useEffect, useState} from 'react';
import { useParams,} from "react-router-dom";
import {postService} from "../../../services/post.service/post.service";
import UserPosts from "../../UserPosts/UserPosts";



const UserPostsPage = () => {
    const {id} = useParams();
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        postService.getAllById(id).then(value=>setPosts([...value]))
    },[id])
    console.log(posts)

    return (
        <div>
            {posts.map(post=><UserPosts key={post.id} post={post}/>)}
        </div>
    );
}

export default UserPostsPage;