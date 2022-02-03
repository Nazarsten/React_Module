import FormComponent from "./components/Form/FormComponent";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";
import {useReducer} from "react";
import './App.css'

const reducer = (state, action) => {
    switch (action?.type) {
        case 'cat':
            return {...state, cats:[...state.cats,{id: new Date().getTime(), name: action.payload.cat}]}
        case 'dog':
            return {...state, dogs:[...state.dogs,{id: new Date().getTime(), name: action.payload.dog}]}

        case 'dec':
            return {...state, cats:state.cats.filter(cat=> cat.id!== action.payload.id)}

        case 'deg':
            return {...state, dogs:state.dogs.filter(dog=> dog.id!== action.payload.id)}

        default : return state
    }

}


function App() {

    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <FormComponent dispatch={dispatch}/>
            <div className={'direction'}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;
