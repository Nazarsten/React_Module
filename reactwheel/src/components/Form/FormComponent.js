import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";

const reducer=(state, action)=> {
        switch (action.type){
            case 'dog':return{...state,dog:state.dog}
    }
}


const FormComponent = () => {

    const {register,handleSubmit} = useForm();

    const [state, dispatch] = useReducer(reducer,{dog:''});

    return (
        <div>
            <div>{state.dog}</div>
            <form onSubmit={handleSubmit(reducer)}>
                <div>Add dog:<input type="text" defaultValue={''}{...register('dog')}/></div>
                <button onClick={()=>dispatch({type:'dog'})}>Add dog</button>
            </form>
        </div>
    );
};

export default FormComponent;