import './App.css';
import Users from "./components/Users/Users"
import Posts from "./components/Posts/Posts.js"
import Coments from "./components/Coments/Coments.js"
import User from "./components/User/User";


function App() {
  return (
      <div>

        <div className={'wrap_for_user_post'}>

          <div>
            <p>Users:</p>
            <Users/>
          </div>


          <div className={'wrapper_for_posts'}>
            <p>Posts:</p>
            <Posts/>
          </div>

        </div>

        <p>Comments:</p>
        <div className={'wrapper_for_coments'}>
          <Coments/>
        </div>

      </div>
  );
}

export default App;

