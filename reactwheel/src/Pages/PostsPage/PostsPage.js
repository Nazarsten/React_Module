import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {postService} from "../../services/post.service/post.service";
import PostComponent from "../../components/PostComponent/PostComponent";
import css from '../../components/styles/Posts.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll.then(value => setPosts(value))

    }, [])
    console.log(posts)
    return (
        <div className={css.wrap_post_and_posts}>
            <div className={css.posts}>
                {posts.map(post => <PostComponent key={post.id} post={post}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;