import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import {useNavigate} from 'react-router-dom';


export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogle = async () => {
        try {
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);
          const result = await signInWithPopup(auth, provider);
          console.log(result);
      
          const response = await fetch('/api/auth/google',{
              method: 'Post',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  name: result.user.displayName,
                  email: result.user.email,
                  photo: result.user.photoURL
              })
          });
          const data = await response.json();
          dispatch(signInSuccess(data))
          navigate('/');

        } catch (error) {
          console.log(error);
        }
      };
  return (
    <button
      type="button"
      className="bg-red-700 text-white uppercase rounded-lg p-3 hover:opacity-85"
      onClick={handleGoogle}
    >
      Continue With Google
    </button>
  );
}
