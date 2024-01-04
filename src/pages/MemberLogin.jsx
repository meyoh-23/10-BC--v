import { useState } from "react";
import { auth, googleProvider } from "../auth/auth";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const MemberLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  console.log(auth?.currentUser?.email);

  // email & password
const signInWithOne = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message)
  }
}

// gmail login
const gMailLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error.message);
  }
}

// signout
const logOutApp = async ()=> {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <section className="w-5/6 mx-auto mt-28 h-[100vh]">
      <h1 className="text-center">Sign In to Your Member Account</h1>
      <div className="flex flex-col md:flex-row gap-4 items-center mx-auto my-4">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-center">Sign in with Your Gmail Account</p>
          <button type="button" className="rounded-lg p-2 text-blue-400 bg-black" onClick={ gMailLogin  }>
          login with Gmail Account
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-center">Sign in with an Email and Password Instead</p>
          
          <input type="text"  placeholder="email" onChange={(e) => setEmail(e.target.value)} className="border-solid border-3 border-lime-950 min-width-[240px] max-width-[300px] h-[2rem] rounded-md text-lg bg-green-300 px-2 py-1"/>
          <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="border-solid border-3 border-lime-950 min-width-[240px] max-width-[300px] h-[2rem] rounded-md text-lg bg-green-300 px-2 py-1"/>
          <button  type="submit"  className="p-4 text-blue-950 border-red-400" onClick={ signInWithOne }>
            Submit
          </button>
        </div>
        <button  type="submit"  className="p-4 text-blue-950 border-red-400" onClick={ logOutApp }>
            logout
          </button>
      </div>
    </section>
  )
}

export default MemberLogin;