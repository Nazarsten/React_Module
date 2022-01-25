import React from 'react';
import {Outlet} from "react-router-dom";

const PostDetailsPage = () => {
    return (
        <div>
            <div>
                PostDetailsPage
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostDetailsPage;