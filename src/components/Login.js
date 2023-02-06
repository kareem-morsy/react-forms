import React, { useState } from "react";

const Login = (props) =>{
   
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const User = {
            email,
            password
        };

        fetch("https://reservation-system.sabeelan.com/reservation-system/api/login" , {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(User)
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data.data.token);
            localStorage.setItem("token",data.data.token)
            // if (data.message === "success"){

            //     props.history.push("/home")

            // }
        })

        
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" name='email' onChange={(e)=>setEmail(e.target.value)}/>
                    
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" name='password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </>
    )
}

export default Login















































// import axios from 'axios';
// import React from 'react'

// function Login() {

//     const User = {
//         email : "",
//         password : ""
//     }

//     const getFormData = (e) =>{
//         User[e.target.name] = e.target.value;
//         console.log(User)
//     }

//     const sendData = async(e) =>{
//         e.preventDefault()
//         let data = await axios.post("https://reservation-system.sabeelan.com/reservation-system/api/login" , User )
//         console.log(data);

//     }

//   return (
//     <>
//         <form onSubmit={sendData}>
//             <div class="mb-3">
//                 <label class="form-label">Email address</label>
//                 <input type="email" class="form-control" name='email' onKeyUp={getFormData}/>
                
//             </div>
//             <div class="mb-3">
//                 <label class="form-label">Password</label>
//                 <input type="password" class="form-control" name='password' onKeyUp={getFormData}/>
//             </div>
            
//             <button type="submit" class="btn btn-primary" >Submit</button>
//         </form>
//     </>
//   )
// }

// export default Login


// src/App.js

// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setpassword] = useState("");
//   const [message, setMessage] = useState("");

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("https://reservation-system.sabeelan.com/reservation-system/api/login", {
//         method: "POST",
//         body: JSON.stringify({
//           email: email,
//           password: password,
//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setpassword("");
//         setEmail("");
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
        
//         <input
//           type="text"
//           value={email}
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           value={password}
//           placeholder="Mobile Number"
//           onChange={(e) => setpassword(e.target.value)}
//         />

//         <button type="submit">Create</button>

//         <div className="message">{message ? <p>{message}</p> : null}</div>
//       </form>
//     </div>
//   );
// }

// export default App;


// import { useState, useEffect } from 'react';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('https://reservation-system.sabeelan.com/reservation-system/api/login', {
//            method: 'POST',
//            body: JSON.stringify({
//             email: email,
//             password: password
//            }),
//            headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//            },
//         })
//            .then((res) => res.json())
//            .then((post) => {
            
//             setEmail('');
//             setPassword('');
//            })
//            .catch((err) => {
//               console.log(err.message);
//            });
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <div class="mb-3">
//                     <label class="form-label">Email address</label>
//                     <input type="email" class="form-control" name='email' />
                        
//                 </div>

//                 <div class="mb-3">
//                     <label class="form-label">Password</label>
//                     <input type="password" class="form-control" name='password' />
//                 </div>
                    
//                 <button type="submit" class="btn btn-primary" >Submit</button>
//             </form>
//         </>
//     );

// }


// export default Login;