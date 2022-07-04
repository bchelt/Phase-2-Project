import React from "react";
import { useLocation } from "react-router-dom";
import NewComment from "./NewComment";

function Post() {
    let location = useLocation();
    let post = location.state


    return (
        <div className="col-6">
            <div className='card'>
                <div className="card-body">
                    <h3 className="card-title">{post.title}</h3>
                    <p className='card-text'><small className="text-muted">By {post.user}</small></p>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
            <ul className="list-group" style={{marginTop: '5px'}}>
                {post.comments.map((comment) => (
                    <li key={comment.id} className="list-group-item">
                        <p style={{marginBottom: '7px'}}>{comment.body}</p>
                        <p style={{marginBottom: '7px'}}><small className="text-muted">{comment.user}</small></p>
                    </li>
                ))}
            </ul>
            {/*<NewComment id={post.comments.length}/>*/}
        </div>
    )
}

export default Post;