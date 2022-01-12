
import {useState, useEffect} from 'react'
import Coment from "../Coment/Coment";



const Coments =()=>{

    const [coments, setComents] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComents(value))
    });

    return(
        <div>
            {coments.map(value => <Coment  key={value.id}
                                           id={value.id}
                                           name={value.name}
                                           email={value.email}
                                           body={value.body}/>)}
        </div>
    )
};
export default Coments