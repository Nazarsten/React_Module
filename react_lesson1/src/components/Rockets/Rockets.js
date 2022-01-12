import {useState,useEffect} from  "react";

import Rocket from "../Rocket/Rocket";

const Rockets =()=>{
    const [rockets,setRockets] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value=>value.json())
            .then(value => { setRockets(value.filter(value=>value.launch_year!=='2020'))

            });
    },[])

    return(
        <div>
            {rockets.map(rock=><Rocket
                key={rock.flight_number}
                mission_name={rock.mission_name}
                launch_year={rock.launch_year}
                mission_patch_small={rock.links.mission_patch_small}/>)}
        </div>
    )
};
export default Rockets