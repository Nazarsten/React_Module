import React from 'react';

const Dog = ({dog:{name,id},dispatch}) => {
    return (
        <div>
            {name}
            <button onClick={()=>{dispatch({type:'deg',payload:{id}})}}>delete</button>
        </div>
    );
};

export default Dog;