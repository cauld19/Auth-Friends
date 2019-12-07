import React, { useEffect, useState } from "react";

import Friends from "./Friends"
import {axiosWithAuth} from "../axiosWithAuth"




const FriendsList =() => {

    const [myFriends, setMyFriends] = useState([]);
    const [editFriend, setEditFriend] = useState({name: "", age: "", email: "", id: ""})

    useEffect(() => {
        loadFriends()
    },[])

    const loadFriends = () => {
            axiosWithAuth()
                .get('/friends')
                .then(res => {
                    console.log(res.data)
                    setMyFriends(res.data)
                })
                .catch(err => console.log(err));
    }
    

    let newFriend = {
        name: editFriend.name,
        age: editFriend.age,
        email: editFriend.email,
        id: Date.now()
    };

    const changeHandle = e => {
        setEditFriend({
            ...editFriend,
            [e.target.name]: e.target.value
        })
    };

    const handleAddSubmit = e => {
        e.preventDefault();
        addFriend();
    }

    const addFriend = () => {
        axiosWithAuth()
            .post("/friends", newFriend)
            .then(res => {
                console.log(res);
                loadFriends();
            })
            .catch(err =>
                console.log(err)    
            )
    }

    

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
            
            <div>
            <form onSubmit={handleAddSubmit}>
                <input
                    type="text"
                    name="name"
                    value={editFriend.name}
                    onChange={changeHandle}
                />
                <input
                    type="number"
                    name="age"
                    value={editFriend.age}
                    onChange={changeHandle}
                />
                <input
                    type="text"
                    name="email"
                    value={editFriend.email}
                    onChange={changeHandle}
                />
                <button>Edit</button>
            </form>
            </div>
        </div>
    )
}

export default FriendsList;