import css from './App.module.css'
import {Route,Routes,Link} from "react-router-dom";
import UsersPage from "./components/pages/UsersPage/UsersPage";
import PostsPage from "./components/pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";

function App() {
    return (

        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>
            </Routes>

        </div>

    );
}

export default App;
