import Comment from "./Comment.js";

export default function CommentList({post: { Comments }}) {
    // console.log(Comments)
    return (
        <div>
            {Comments.map((el) => (
                <Comment key={el.id} comment={el}/>
            ))}
        </div>
    )
};