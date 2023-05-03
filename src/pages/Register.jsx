import Input from "../components/Input"
import { useState } from "react"
// import app from "../../firebase.config"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({ email: '', password: '', name: '', photo_url: '' })
  const auth = getAuth(app)
  const handleChange = (e) => {
    setRegisterData(p => ({ ...p, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (registerData.email === '' && registerData.password === '') {
        toast('A user cannot submit empty email and password fields')
        return
      }
      if (registerData.password.length < 6) {
        toast('The password is less than 6 characters')
        return
      }
      const userCredential = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
      const user = userCredential.user;
      await updateProfile(user, { displayName: registerData.name, photoURL: registerData.photo_url })
      navigate('/login')
    } catch (error) {
      toast(error.message)
    }

  }
  return (
    <div className="container m-auto max-w-[606px] p-5 bg-[--bg-color] md:px-[73px] md:py-[76px]">
      <h1 className="mb-5 md:text-[35px] text-[25px] font-[600] text-[--text-color] text-center">Register your account</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          type='text'
          name='name'
          placeholder={'Enter your name'}
          title={'Your Name'}
          value={registerData.name}
          onChange={handleChange}
        />
        <Input
          type='text'
          name='photo_url'
          placeholder={'Paste a photo url'}
          title={'Photo URL'}
          value={registerData.photo_url}
          onChange={handleChange}
        />
        <Input
          type='email'
          name='email'
          placeholder={'Enter your email address'}
          title={'Email address'}
          value={registerData.email}
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          placeholder={'Enter your password'}
          title={'Password'}
          value={registerData.password}
          onChange={handleChange}
        />
        <button type="submit" className="w-100 p-[10px] text-white mb-[24px] rounded bg-[--btn-color] text-[22px] font-[800]">Register</button>
      </form>
    </div>
  )
}

export default Register