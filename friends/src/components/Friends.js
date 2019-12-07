import React from "react";


const Friends = props => {
    return(
        <div>
            {props.name}
            {props.age}
            {props.email}
        </div>
    )
}

export default Friends;