import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import NewPost from "./NewPost";

function Category({ category, cat }) {
    const [posts, setPosts] = useState([])
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:3002/${cat}`)
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [cat])

    function handleClick() {
        setClicked(!clicked)
    }
    return (
        <div className="col-6">
            <h3>{category}</h3>
            <div>
                <div>
                    <div className="list-group">
                        {posts.map((post) => (
                            <div key={post.id} style={{paddingTop: '10px'}}>  
                                <Link to={`/${cat}/${post.id}`} state={{...post}} key={post.id} style={{textDecoration: 'none', color: "black"}} className={'list-group-item'}>
                                    {post.title} by {post.user}
                                </Link>
                                <Outlet />
                            </div>     
                        ))}
                    </div>
                </div>
                {sessionStorage.getItem('user') 
                ? (clicked ? (
                <div>
                    <NewPost posts={posts} setPosts={setPosts}/>
                    <button onClick={handleClick} className="btn">Cancel</button>
                </div>
                )
                : <button className="btn btn-secondary" onClick={handleClick}>New Post</button>
                )
                : 'You must be logged in to post'}
            </div>
        </div>
    )
}

export default Category;