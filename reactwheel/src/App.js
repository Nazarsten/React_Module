import {Route, Routes, Link} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UsersPage from "./components/pages/UsersPage/UsersPage";
import PostsPage from "./components/pages/PostsPage/PostsPage";


function App() {
    return (

        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>
            </Routes>

        </div>

    );
}

export default App;
