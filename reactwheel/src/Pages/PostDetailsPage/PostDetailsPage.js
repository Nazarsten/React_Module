import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams, Link} from "react-router-dom";
import css from '../../components/styles/Posts.module.css'

const PostDetailsPage = () => {
    const {id} = useParams();
    const {state: selectedPost} = useLocation();
    const [post, setPost] = useState({});
    useEffect(() => {
        setPost(selectedPost)
    }, [id])
    return (
        <div>
            <div className={css.postOne}>
                <ul>
                    <li>userId:{post?.userId}</li>
                    <li>postId:{post?.id}</li>
                    <li>title:{post?.title}</li>
                    <li>body:{post?.body}</li>
                </ul>
                <Link to={'comments'}>
                    <button>Comments</button>
                </Link>
            </div>
            <div><Outlet/></div>
        </div>
    );
};
export default PostDetailsPage;