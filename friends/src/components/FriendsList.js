import React, { useEffect, useState } from "react";

import Friends from "./Friends"
import {axiosWithAuth} from "../axiosWithAuth"



const FriendsList =() => {

    const [myFriends, setMyFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res.data)
                setMyFriends(res.data)
            })
            .catch(err => console.log(err));
    },[])

    return(
        <div>
            {myFriends.map(friend =>(
                <Friends 
                    key={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                />
              ))}
        </div>
    )
}

export default FriendsList;