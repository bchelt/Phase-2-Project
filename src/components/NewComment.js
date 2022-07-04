import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

function NewComment({ id }) {
    const [body, setBody] = useState('')
    const location = useLocation();
    function handleChange(e) {
        setBody(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            body: body,
            user: sessionStorage.getItem("user"),
        }

        // fetch(`http://localhost:3002${location.pathname}/comments/2`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(formData)
        // })
    }
    
    return (
        <form>
            <input type={'text'} onChange={handleChange} />
            <button type={"submit"} onClick={handleSubmit} >Add Comment</button>
        </form>
    )
 }

 export default NewComment;