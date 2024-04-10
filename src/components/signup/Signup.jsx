import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './signup.module.css'
import img from '../../assets/womaneating.jpg'
import { register } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

const Signup = () => {
  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    isAdmin:false
  })
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = async(e) => {
    e.preventDefault()
    const {username,email,password,isAdmin}=formData
    try {
      const res = await fetch(`http://localhost:5000/auth/register`, {
        headers: {
          "Content-Type": 'application/json'
        },
        method: "POST",
        body: JSON.stringify({username, email, password,isAdmin})
      })

      const data = await res.json()
      if(data?.response==="error"){
        throw new Error(data.message)
      }
      dispatch(register(data))
      navigate('/')
      
    } catch (error) {
      setError(error.message)
      setTimeout(() => {
        setError("")
      }, 3000)
    }
  }


  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signUpWrapper}>
        <div className={classes.signUpLeftSide}>
          <img src={img} className={classes.leftImg} />
        </div>
        <div className={classes.signUpRightSide}>
          <h2 className={classes.title}>Sign Up</h2>
          <form onSubmit={handleSignup} className={classes.signUpForm}>
            <input type="text" placeholder="Type username" onChange={(e) => setFormData({...formData,username:e.target.value})} required/>
            <input type="email" placeholder="Type email" onChange={(e) => setFormData({...formData,email:e.target.value})} required/>
            <input type="password" placeholder="Type password"  onChange={(e) => setFormData({...formData,password:e.target.value})} required/>
            <div className={classes.checkbox}>
              <label htmlFor="isAdmin">Restaurant Owner?</label>
              <input type="checkbox" id="isAdmin" checked={formData.isAdmin} onChange={(e)=>setFormData({...formData,isAdmin: e.target.checked})}/>
            </div>
            <button className={classes.submitBtn}>Sign Up</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
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

export default Signup