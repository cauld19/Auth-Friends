import React from "react";


const Friends = props => {
    return(
        <div>
            <h2>{props.name}</h2>
            <h4>{props.age}</h4>
            <h5>{props.email}</h5>
            <input
                name="friendSelect"
                type="checkbox"
                checked={null}
                onChange={() => props.editChangeHandle(props.friend)}
            />
            <button onClick={() => {props.deleteFriend(props.friend.id)}}>Delete</button>
        </div>
    )
}

export default Friends;