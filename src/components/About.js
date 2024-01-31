import React from "react";

function About (props) {

    const {image, about} = props
    
    return (
    <aside> 
        <img>
        src = { image || "https://via.placeholder.com/215" } alt = "Blog Logo" 
        </img>
        <p>
        {about}
        </p>
    </aside>
    )
}

export default About; 