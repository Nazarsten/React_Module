import  {useRef} from 'react';
import React from 'react';
import './../../App.css'

const FormComponent = ({dispatch}) => {

    const form =(e)=>{
        e.preventDefault();
        e.target.reset()
    }

    const catInput = useRef();
    const dogInput = useRef();


    const saveCat=()=>{
        dispatch({type:'cat', payload:{cat:catInput.current.value}})
    }

    const saveDog=()=>{
        dispatch({type:'dog', payload:{dog:dogInput.current.value}})
    }


    return (
        <div>
            <form onSubmit={form} className={'forms'}>
                <div>
                    <button onClick={saveCat}>save</button>
                    <input type="text" placeholder={'cats'} ref={catInput}/>
                </div>

                <div>
                    <input type="text" placeholder={'dogs'} ref={dogInput}/>
                    <button onClick={saveDog}>save</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;


