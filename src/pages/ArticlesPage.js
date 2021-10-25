import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesPage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if(!article) return <h1>Article does not exists</h1>
    const otherArticles = articleContent.filter(article => article.name !== name);
   
    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key)=>(
               <p key={key}>{paragraph}</p>
            ))}
            <h3 style={{color:"black"}}>Other Articles</h3>
            <ArticlesList article={otherArticles}/>
        </>
    )
}

export default ArticlesPage;
