
const LoginSignup = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleMode = () => {
        setIsLogin(prevMode => !prevMode); // Use functional update for state
    };

    const handleSubmit = () => {
        // Implement form validation and submission here
        console.log(isLogin ? 'Login Form Submitted' : 'Sign Up Form Submitted');
        onClose(); // Close modal after submission
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="container">
                    <div className="header">
                        <div className="text">{isLogin ? 'Login' : 'Sign Up'}</div>
                        <div className="underline"></div>
                    </div>
                    <div className="input">
                        <img src={usericon} alt="User Icon" />
                        <input type="text" placeholder="Username" />
                    </div>
                    {!isLogin && (
                        <div className="input">
                            <img src={emailicon} alt="Email Icon" />
                            <input type="email" placeholder="Email" />
                        </div>
                    )}
                    <div className="input">
                        <img src={passwordicon} alt="Password Icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                    {isLogin && (
                        <div className="forget-password">
                            Forget Password <span>Click Here</span>
                        </div>
                    )}
                    <div className="submit-container">
                        <div className="submit" onClick={handleSubmit}>
                            {isLogin ? 'Login' : 'Sign Up'}
                        </div>
                        <div className="submit" onClick={toggleMode}>
                            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
