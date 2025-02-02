import React,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState(null);



    useEffect(() => {
        const storage = getStorage();
        const imageRef = ref(storage, "logo.png"); // Resmin kayıtlı olduğu yol
    
        getDownloadURL(imageRef)
          .then((url) => {
            setImageUrl(url);
          })
          .catch((error) => {
            console.error("Resim yüklenirken hata oluştu:", error);
          });
      }, []);
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
            <img src={imageUrl} />
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
