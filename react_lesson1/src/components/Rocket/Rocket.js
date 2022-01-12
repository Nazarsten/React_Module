import "./Rocket.css"

const Rocket =(props)=>{

    const {launch_year,mission_name,mission_patch_small}= props

    return(
        <div className='wrap_content'>
            <div className='rocket_text'>{mission_name}--{launch_year}</div>
            <img src={mission_patch_small} alt="емблема"/>
        </div>

    )
};
export default Rocket