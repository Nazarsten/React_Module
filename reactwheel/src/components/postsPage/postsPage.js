import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axios.service";
import {postService} from "../../services/post.service/post.service";
import Post from "../Post/Post";


const PostsPage = () => {
  const [posts,setPosts]= useState([])

  useEffect(()=>{
      postService.getAll.then(posts=>setPosts([...posts]))
  },[])
    console.log(posts)
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;