import React from "react";
import Article from "./Article"


function ArticleList({posts}){
    
    const renderPosts = posts.map(({ id, title, date, preview,}) => (
    <Article
        key = {id}
        title ={title}
        date = {date}
        preview ={preview} />
    ))
        return (
        <main>
            {renderPosts}
        </main>
    )
}

export default ArticleList;