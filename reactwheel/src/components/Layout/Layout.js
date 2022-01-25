import React from 'react';
import css from './Layout.module.css'
import {Link,Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <Link to="/">User</Link>
                <Link to="/posts">Posts</Link>
            </div>
            <div><Outlet/></div>
        </div>

    );
};

export default Layout;