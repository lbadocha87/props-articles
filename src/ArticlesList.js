import React from 'react';

import Heading from './Heading';

const ArticlesList = props => {

    let allArticles = props.articles.map((article, index)=>{

        console.log(article)
        return (
            <article key={index}>
                <Heading content={article.title} colorClass="blue" />
                <p>{article.body}</p>
            </article>
        )
    })

    return (
        <main>
            {allArticles}
        </main>
    );
}


export default ArticlesList;