import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../../services/post.service/post.service";
import PostCommentComponent from "../../PostCommentComponent/PostCommentComponent";

const PostCommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        postService.getAllCommentsById(id).then(value => setComments([...value]))
    }, [id])
    console.log(comments)
    console.log(id)
    return (
        <div>
            {comments.map(comment => <PostCommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostCommentsPage;