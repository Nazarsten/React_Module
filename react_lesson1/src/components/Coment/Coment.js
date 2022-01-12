import  "./coment_style.css"

const Coment =(props)=>{
    const {id, name, email,body}=props;
    return(
        <div className={'coment'}>
            {id}--{name}--{email}--{body}
        </div>
    )
};
export default Coment;