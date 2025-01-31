import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User Logged in Successfully!");
            setTimeout(() => {
                navigate("/profile");
            }, 1000); // 1 saniye gecikme
        } catch (error) {
            console.error(error.message);
            logError();
        } finally {
            setSubmitting(false);
        }
    };



  return (
    <div className='login-container'>
        <div className='login-left-container'>
            <img src="src\assets\logo.png" />
        </div>
        <div className='login-right-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h1>Login</h1>
                <input type="text" placeholder='E-Mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button>Login</button>
                <p>Don't have an account? <Link to ="/register" >Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login;
