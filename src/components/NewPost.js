import React, { useState } from "react";
import { useLocation } from "react-router-dom"

function NewPost({ posts, setPosts}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const location = useLocation();

    function handleChange(e) {
        setBody(e.target.value)
    }

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            title: title,
            body: body,
            user: sessionStorage.getItem("user"),
            comments: []
        }

        fetch(`http://localhost:3002${location.pathname}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then((res) => setPosts([...posts, {...formData, id: posts.length }]))
    }
    
    return (
        <form>
            Title:
            <input type={'text'} onChange={handleTitle} /><br></br>
            <label htmlFor="textarea">Post:</label>
            <textarea id={'textarea'} cols="50" onChange={handleChange} /><br></br>
            <button type={"submit"} onClick={handleSubmit} >Add Post</button>
        </form>
    )
}

export default NewPost;