import React, { useState } from 'react'

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username,  setUsername] = useState('');
    const [commentText,  setCommentText]  = useState('');

    const addComment = async () =>{
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method : "post",
            body:JSON.stringify({username, text: commentText}),
            headers: {
                "Content-Type" : 'application/json',
            }
        });
 
        const body = await result.json(); 
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
     }
 

    return (
        <div id="add-comment-form">
            <h3>Add A Comment</h3>
            <label>
                Name:
            <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <label>
                Comments :
            <textarea rows="4" col="30" value={commentText} onChange={(event) => setCommentText(event.target.value)}/>
            </label>
            <button onClick={() => addComment()}>Add Comment</button>
        </div>
    )
};

export default AddCommentForm;
