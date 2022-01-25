import {Routes, Route} from "react-router-dom";
import PostsPage from "./components/postsPage/postsPage";


function App() {
    return (

        <div>
            <Routes path={'/'} element={<PostsPage/>}>

            </Routes>
        </div>

    );
}

export default App;
