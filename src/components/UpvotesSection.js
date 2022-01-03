import React from 'react'

const UpvotesSection = ({ articleName, upvotes, setArticleInfo}) => {
    const UpvotesArticle = async () =>{
       const result = await fetch(`/api/articles/${articleName}/upvote`, {
           method : "post",
       });

       const body = await result.json(); 
       setArticleInfo(body)
    }

    return (
        <div id="upvotes-section">
            <button onClick={() => UpvotesArticle()}>Add Upvotes</button>
          <p>This post has been upvoted {upvotes} times</p>
        </div>
    )
}

export default UpvotesSection
