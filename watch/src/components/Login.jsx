import React, { useState } from "react";
import usericon from './assets/person.png';
import emailicon from './assets/email.png';
import passwordicon from './assets/password.png';

const Login = ({ onClose }) => {
    const [action, setAction] = useState("Login");

    return (
        <div className="flex flex-col justify-center items-center bg-transparent"> {/* Make background transparent */}
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-md">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">{action}</h2>
                    <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
                </div>

                {action === "Sign Up" && (
                    <div className="flex items-center mb-4 border-b border-gray-300">
                        <img src={usericon} alt="User Icon" className="w-5 h-5 mr-2" />
                        <input 
                            type="text" 
                            placeholder="Username" 
                            className="w-full py-2 focus:outline-none"
                        />
                    </div>
                )}

                <div className="flex items-center mb-4 border-b border-gray-300">
                    <img src={emailicon} alt="Email Icon" className="w-5 h-5 mr-2" />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full py-2 focus:outline-none"
                    />
                </div>

                <div className="flex items-center mb-4 border-b border-gray-300">
                    <img src={passwordicon} alt="Password Icon" className="w-5 h-5 mr-2" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full py-2 focus:outline-none"
                    />
                </div>

                {action === "Login" && (
                    <div className="text-right mb-4 text-sm text-blue-500 cursor-pointer hover:underline">
                        Forget Password? <span>Click Here</span>
                    </div>
                )}

                <div className="flex justify-around mt-6">
                    <button 
                        className={`py-2 px-6 rounded-lg ${
                            action === "Login" 
                                ? "bg-gray-400 text-white" 
                                : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                        onClick={() => setAction("Sign Up")}
                    >
                        Sign Up
                    </button>
                    <button 
                        className={`py-2 px-6 rounded-lg ${
                            action === "Sign Up" 
                                ? "bg-gray-400 text-white" 
                                : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                        onClick={() => setAction("Login")}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
