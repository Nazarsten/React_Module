
import Post from "../Post/Post";
import {useState, useEffect} from 'react'

const Posts =()=>{
        const [posts,setPosts] = useState([]);
        useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/posts')
               .then(value => value.json())
               .then(value => setPosts(value))
        },[]);

    return(
        <div>
            {posts.map(value => <Post key={value.id}  id={value.id} title={value.title} body={value.body} userId={value.userId} />)}
        </div>
    )

};

export default Posts;