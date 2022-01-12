 import "./post_style.css"

const Post =(props)=>{
    const {id,userId,title,body}=props;

    return(
        <div className={'post_item'}>
            {id}--{title}--{body}
        </div>
    )
};
export default Post