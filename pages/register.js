import React from "react";
import { app } from "../Firebaseconfig";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from "next/router";

function Register() {
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        router.push('/home')
    })
  }

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((res) => {
        console.log(res.user)
    })
  }

  const signUpWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
    .then((res) => {
        console.log(res.user)
    })
}

  return (
    <div className="flex flex-col mx-auto space-y-5 mt-10 text-xl">
      <div className="mx-auto">Register</div>
      <input
        className="w-72 h-10 mx-auto  border-2 border-black rounded-lg p-5"
        placeholder="email"
        type="email"
        name="email"
        id="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <input
        className="w-72 h-10 mx-auto  border-2 border-black rounded-lg p-5"
        placeholder="password"
        type="password"
        name="password"
        id="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <button
        className="bg-lime-300 w-24 h-10 mx-auto rounded-xl"
        type="submit"
        onClick={() => signUp()}
      >
        sign up
      </button>
      <button
        className="bg-lime-300 w-36 h-full mx-auto rounded-xl"
        onClick={() => signUpWithGoogle()}
      >
        sign up via Google
      </button>
      <button
        className="bg-lime-300 w-36 h-full mx-auto rounded-xl"
        onClick={() => signUpWithFacebook()}
      >
        sign up via Facebook
      </button>
    </div>
  );
}

export default Register;
