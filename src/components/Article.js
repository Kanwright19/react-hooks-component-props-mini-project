import React from "react";


function Article ({ title, preview, date="January 1, 1970", minutes }) {

    function repeatEmojis(divideBy, emoji) {

        const float = minutes / divideBy
        const roundUp = Math.ceil(float)
        return emoji.repeat(roundUp)
    }
    
    function displayedMinutes(){
        const emojis = minutes >= 30 ? repeatEmojis(10, "🍱") : repeatEmojis(5, "☕️")
        return `${emojis} ${minutes} min read`
    }

    return <article>
            <h3>{ title }</h3>
            <small>{ date } * {displayedMinutes()} </small>
            <p>{preview}</p>
        </article>
};

export default Article;