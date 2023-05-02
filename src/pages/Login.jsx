import { useState } from "react"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import app from "../../firebase.config";
import { toast } from 'react-toastify';
const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const auth = getAuth(app)
  const handleChange = (e) => {
    setLoginData(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  const setUIDtoLocalStorageAndNavigate = (uid) => {
    localStorage.setItem('uid', uid)
    navigate('/')
  }
  const loginInWithGoogle = () => {
    const provider = new GoogleAuthProvider
    signInWithPopup(auth, provider)
      .then(data => {
        setUIDtoLocalStorageAndNavigate(data?.user?.uid)
      })
      .catch((error) => {
        toast(error.message)
      });
  }
  const loginWithGitub = async () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then(data => {
        setUIDtoLocalStorageAndNavigate(data?.user?.uid)
      })
      .catch((error) => {
        toast(error.message)
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      setUIDtoLocalStorageAndNavigate(data?.user?.uid)
    } catch (error) {
      const errorMessage = error.message;
      const regex = /\(([^)]+)\)/;
      const matches = regex.exec(errorMessage);
      matches !== null && toast(matches[1])
      setLoginData({ email: '', password: '' })
    }
  }
  return (
    <div className="container m-auto max-w-[606px] p-5 bg-white md:px-[73px] min-h-[76vh] md:py-[76px]">
      <h1 className="md:text-[35px] text-[25px] text-center font-[600] text-[#403F3F] ">Login your account</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          type='email'
          name='email'
          placeholder={'Enter your email address'}
          title={'Email address'}
          value={loginData.email}
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          placeholder={'Enter your password'}
          title={'Password'}
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit" className="w-100 p-[10px] text-white mb-[24px] text-[22px] font-[800] rounded bg-[--btn-color]">Login</button>
      </form>
      <div className="flex w-[100%] gap-4">
        <button onClick={loginInWithGoogle} className="w-[50%] p-[10px] text-white mb-[24px] text-[22px] font-[800] rounded bg-[black]">Login with Google</button>
        <button onClick={loginWithGitub} className="w-[50%] p-[10px] text-white mb-[24px] text-[22px] font-[800] rounded bg-[#8585eb]">Login with Github</button>
      </div>
      <p className="text-[--text-color] font-[600] text-center" >
        <span >Dont’t Have An Account?</span>
        <Link className="text-[--text-color]" to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default Login