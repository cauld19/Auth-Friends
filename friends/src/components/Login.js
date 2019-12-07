import React, {useState} from "react";
import axios from "axios";

const Login = props => {
    const  [ credentials, setCredentials ] = useState({
        username: "Lambda School",
        password: "i<3Lambd4"
    })


    const handleSubmit = e => {
        console.log(credentials)
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload)
                props.history.push("/protected")
            })
            .catch(err =>
                console.log(err)    
            )
    }

    return(
        <div className="login-form-main">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={e => setCredentials({username: e.target.value})}
                />
                <input
                    type="text"
                    name="password"
                    value={credentials.password}
                    onChange={e => setCredentials({password: e.target.value})}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;