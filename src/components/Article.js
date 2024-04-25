import React from "react";

function Article({title, date, preview}){
    let defaultDate = date || "January 1, 1970"
    return (
        <article>
            <h3>{title}</h3>
            <small>{defaultDate}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article