import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Firebase/Firebase'
import { doc, getDoc } from "firebase/firestore";



function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = useCallback(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (user) {
              const docRef = doc(db, "Users", user.uid);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                  setUserDetails(docSnap.data());
              } else {
                  console.log("User is not in the application!");
              }
          } else {
              console.log("No user is signed in");
              navigate('/login');
          }
      });
      return unsubscribe;
  }, [navigate]);

  useEffect(() => {
      const unsubscribe = fetchUserData();
      return () => unsubscribe();  // Cleanup listener when component unmounts
  }, [fetchUserData]);

  const handleLogout = async () => {
      try {
          await auth.signOut();
          console.log("User Logged Out Successfully!");
          navigate("/login");
      } catch (error) {
          console.log("Error logging out:", error.message);
      }
  };
  return (
    <div>
      <div className='profile-container'>   
        <div className="something">
         <div className="profile-header">
            <img className='profile-img' src="https://www.w3schools.com/w3images/mac.jpg"/>
            <h1>{userDetails ? userDetails.firstname : 'Loading...'} {userDetails ? userDetails.lastname : 'Loading...'}</h1>
            <h2>Bilgisayar Mühendisi</h2>
         </div>

        <div className="profile-body">
          <div className="profile-info">
            <p>İstanbul / Turkey</p>
            <p>Phone Number: 555 555 555</p>
          </div>
          <div className="profile-stats">
            <p>Following - 85</p>
            <p>Followers - 100</p>
            <p>a</p>
          </div>
        </div>

        </div>
        <div className="friends-list">
          <h2>Connections</h2>
          <hr />
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className='body-container'>
          
        
      </div>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
    
  )
}

export default Profile;