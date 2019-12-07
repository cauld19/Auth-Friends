import React from "react";


const Friends = props => {
    return(
        <div>
            <h2>{props.name}</h2>
            <h4>{props.age}</h4>
            <h5>{props.email}</h5>
        </div>
    )
}

export default Friends;