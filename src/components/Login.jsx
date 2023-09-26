// import React from "react";
// import {useState} from "react"
// import { useNavigate } from "react-router-dom";

// const COHORT_NAME = "2306-FTB-ET-WEB-AM";
// const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// function Login(props) {
//     const[username, setUserName] = useState("");
//     const[password, setPassword] = useState("");
//     const navigate = useNavigate()

//     const handleSumbit = async (e) => {
//         e.preventDefault();
//         console.log(username, password);
//         try {
//             const userData = await loginUser();
//             console.log(userData.data);

//             localStorage.setItem("token", userData.data.token);
//             props.setIsLoggedIn(true);
//             props.setIsLoggedInUser(username);
            
//             navigate('/')
//        }catch(error){
//      console.log(error)
//        }
//     }

//     async function loginUser(){
//         try{
//             const response = await fetch(`${BASE_URL}/users/login`, {
//             method:"POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 user:{
//                     username: username,
//                     password: password,
//                 },
//             })
//             });
//             const userData = await response.json();
//             return userData;
//         }catch(error){
//             console.log(error)
//         }
//     }

//     return(
//         <div id="login-container">
//             <h1 id="loginheader">login</h1>
//             <form id="loginform" onSubmit={handleSumbit}>
//                 <label className="labels">
//                     Username:
//                     <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => {
//                        console.log(e.target.value)
//                        setPassword(e.target.value)
//                     }}
//                     />
//                 </label> <br />
//                 <label className="labels">
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => {
//               console.log(e.target.value);
//               setPassword(e.target.value);
//             }}
//           />
//         </label> <br />

//                 <button id="loginbutton" type="sumbit">submit</button>
//             </form>
//         </div>
//     );
// }

// export default Login;