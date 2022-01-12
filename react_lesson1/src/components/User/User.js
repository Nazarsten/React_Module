

import './user_style.css'

const User =(props) =>{
     const {id, name, username, email}=props;
    return(
        <div className={'user_item'}>
            {id}--{name}--{username}--{email}
        </div>
    )
};
export default User