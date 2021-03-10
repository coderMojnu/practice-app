import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=3179e0ccfee34522ac00290a9674e841')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headline: {articles.length}</h1>
            {
                articles.map(article => <Header article = {article}></Header>)
            }
        </div>
    );
};

export default TopHeadline;