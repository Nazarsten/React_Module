import {Route, Routes, Link, Navigate} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UsersPage from "./Pages/UsersPage/UsersPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import UserDetailsPage from "./Pages/UserDetailsPage/UserDetailsPage";
import PostDetailsPage from "./Pages/PostDetailsPage/PostDetailsPage";
import UserPostsPage from "./Pages/UserPostsPage/UserPostsPage";
import PostCommentsPage from "./Pages/PostCommentsPage/PostCommentsPage";


function App() {
    return (

        <div >
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to ={'users'}/>} />
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </div>

    );
}

export default App;
