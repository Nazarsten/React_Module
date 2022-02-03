import React from 'react';

const Cat = ({cat:{name,id},dispatch}) => {
    return (
        <div>
            <button onClick={()=>dispatch({type:'dec',payload:{id}})}>delete</button>
            {name}

        </div>
    );
};

export default Cat;