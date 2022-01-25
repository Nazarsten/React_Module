import React from 'react';
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <div>
                PostsPage
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;