import React, { useState } from "react";
import './LoginSignup.css';

import usericon from '../assets/person.png';
import emailicon from '../assets/email.png';
import passwordicon from '../assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className="Mainbody">
            <div className="containerForWhole">
                <div className="newheader">
                    <h2>{action}</h2>
                    <span className="underline"></span>
                </div>

                {action === "Sign Up" && (
                    <div className="input">
                        <img src={usericon} alt="User Icon" />
                        <input type="text" placeholder="Username" />
                    </div>
                )}

                <div className="input">
                    <img src={emailicon} alt="Email Icon" />
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input">
                    <img src={passwordicon} alt="Password Icon" />
                    <input type="password" placeholder="Password" />
                </div>

                {action === "Login" && (
                    <div className="forget-password">
                        Forget Password <span>Click Here</span>
                    </div>
                )}

                <div className="submit-container">
                    <div 
                        className={`submit ${action === "Login" ? "gray" : ""}`} 
                        onClick={() => setAction("Sign Up")}
                    >
                        Sign Up
                    </div>
                    <div 
                        className={`submit ${action === "Sign Up" ? "gray" : ""}`} 
                        onClick={() => setAction("Login")}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;











// import React, { act, useState } from "react";
// import './LoginSignup.css'; // Correct import for CSS file

// import usericon from '../assets/person.png';
// import emailicon from '../assets/email.png';
// import passwordicon from '../assets/password.png';

// const LoginSignup = () => {

//     const [action, setAction] = useState("Sign Up")
//     const signupclick =()=>{
//         setAction("Sign Up")
//     }
//     const loginclick = ()=>{
//         setAction("Login")
//     }
//     return (
//         <div className="Mainbody">
//         <div className="container">
            
        
//             <div className="newheader">
//                 <h2>{action}</h2>
//                 <span className="underline"></span>
//             </div>
//             {action==="Login"? <div></div>:            <div className="input">
//                 <img src={usericon} alt="User Icon" />
//                 <input type="text" placeholder="Username" />
//             </div> }

//             <div className="input">
//                 <img src={emailicon} alt="Email Icon" />
//                 <input type="email" placeholder="Email" />
//             </div>
//             <div className="input">
//                 <img src={passwordicon} alt="Password Icon" />
//                 <input type="password" placeholder="Password" />
//             </div>
//             {action==="Sign Up"?<div></div>: <div className="forget-password">Forget Password<span>Click Here</span></div>}
            
//             <div className="submit-container">
//             <div className={action==="Login" ? "submit gray" : "submit"} onClick={signupclick}>
//             Sign Up
//         </div>
//         <div className={action==="Sign Up" ? "submit gray" : "submit"} onClick={loginclick}>
//             Login
//         </div>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default LoginSignup;
