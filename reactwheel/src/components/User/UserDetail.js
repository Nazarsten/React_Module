import React from 'react';

import '../UserStyle/User.css'

const UserDetail = (props) => {
    const {userItem,getPosts} = props
    return (
        <div className='user_detail'>
            <ul>
                <li>id: {userItem.id}</li>
                <li>name: {userItem.name}</li>
                <li>username: {userItem.username}</li>
                <li>email: {userItem.email}</li>
                <li>website: {userItem.website}</li>
                <li>Addres:
                    <ul>
                        <li>suite: {userItem.address.suite}</li>
                        <li>zipcode: {userItem.address.zipcode}</li>
                        <li>city: {userItem.address.city}</li>
                        <li> geo.lat: {userItem.address.geo.lat}</li>
                        <li>geo.lng: {userItem.address.geo.lng}</li>
                    </ul>
                </li>
                <li>Company:
                    <ul>
                        <li>bs: {userItem.company.bs}</li>
                        <li>catchPhrase: {userItem.company.catchPhrase}</li>
                        <li>name: {userItem.company.name}</li>
                    </ul>
                </li>
            </ul>
            <button onClick={()=>getPosts(userItem.id)}>get posts</button>
        </div>
    );
};
export default UserDetail;