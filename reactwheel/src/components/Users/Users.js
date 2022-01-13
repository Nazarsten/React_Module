import React from 'react';
import {useEffect, useState} from 'react'

import User from "../User/User";
import '../UserStyle/User.css'
import UserDetail from "../User/UserDetail";
import UserPost from "../User/UserPost";

const Users = () => {
    const [userslist, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [postList, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                setUsers(users);
            })
    }, [])

    const getUserId = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(user => {
                setUser(user);
            })

    }

    const getPosts = (userId) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                setPost(posts.filter(post => post.userId === userId))
            })
    }


    return (
        <div className='wrap_for_user_and_userdetails'>
            <div>{userslist.map(user => <User
                key={user.id}
                id={user.id}
                name={user.name}
                getUserId={getUserId}
                getPosts={getPosts}
            />)}</div>

            {user && <UserDetail
                key={user.id}
                userItem={user}
                getPosts={getPosts}
            />}

            <div >{postList.map(post => <UserPost
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}
            />)}</div>
        </div>
    );
}

export default Users;