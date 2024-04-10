import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import classes from './checkout.module.css'
import {useNavigate} from "react-router-dom";

const Checkout = () => {
  const token=useSelector(state=>state.auth.token)
  const navigate=useNavigate()
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, [token]);
  const {products} = useSelector((state) => state.cart)

  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Your order is successful</h2>
        <p>Expect it in 1 hour</p>
        <span>Total Price: ${totalPrice}</span>
      </div>
    </div>
  )
}

export default Checkout