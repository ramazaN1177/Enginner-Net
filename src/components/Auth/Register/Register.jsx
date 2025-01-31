import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../Firebase/Firebase';
import { doc, setDoc } from 'firebase/firestore';


function Register() {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);

        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
              email: user.email,
              firstname: fname,
              lastname: lname,
              id: user.uid
          });
      }

        console.log("User Registered Succesfully!");
        //navigate("/login")


    } catch (error) {
        console.log(error.message);
      

    }
}



  return (
    <div className='register-container'>
    <div className='register-left-container'>
        <img src="src\assets\logo.png" />
    </div>
    <div className='register-right-container'>
        <form onSubmit={handleRegister} className='register-form'>
            <h1>Register</h1>
            <input type="text" placeholder='First Name' onChange={(e) => setFname(e.target.value)} required></input>
            <input type="text" placeholder='Last Name' onChange={(e) => setLname(e.target.value)} required></input>
            <input type="text" placeholder='E-Mail' onChange={(e) => setEmail(e.target.value)} required></input>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required></input>
            <button>Register</button>
            <p>I have already an account <Link to ="/login" >Login</Link></p>

        </form>
    </div>
</div>
  )
}

export default Register;