import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from '../pages/article-content';

const ArticleListPage = () => (
    <>
    <h1>Articles</h1>
    <ArticlesList article={articleContent}/>
    </>
);

export default ArticleListPage;