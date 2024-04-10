import React from 'react'
import { useState } from 'react'
import classes from './login.module.css'
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import img from '../../assets/womaneating2.jpg'
import { login } from '../../store/authSlice'

const Login = () => {
  const [formData,setFormData]=useState({
    email:'',
    password:'',
  })
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
      e.preventDefault()

      try {
        const res = await fetch(`http://localhost:5000/auth/login`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({email:formData.email, password:formData.password})
        })

        const data = await res.json()
        console.log(data)
        if(data?.response==="error"){
          throw new Error(data.message)
        }
        dispatch(login(data)) // {userInfo, token}
        navigate("/")
      } catch (error) {
        setError(error.message)
        setTimeout(() => {
          setError("")
        }, 3000)
      }
  }

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src={img} className={classes.leftImg}/>
        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form onSubmit={handleLogin} className={classes.loginForm}>
            <input type="email" placeholder='Type email' onChange={(e) => setFormData({...formData,email:e.target.value})} required/>
            <input type="password" placeholder='Type password' onChange={(e) => setFormData({...formData,password:e.target.value})} required/>
            <button className={classes.submitBtn}>Login</button>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </form>
          {
            error.length>0 && <div className="errorMessage">
                {error}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Login