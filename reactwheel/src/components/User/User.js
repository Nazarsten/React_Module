import React from 'react';

const User = (props) => {
    const {name, getUserId, id, getPosts} = props
    return (
        <div className='user'>
            {name}
            <button onClick={() => {
                getUserId(id)
                getPosts('')
            }}>more
            </button>
        </div>
    );
};
export default User;