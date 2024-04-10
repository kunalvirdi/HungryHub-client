import React, {useEffect} from 'react'
import classes from './create.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const initialState={
  title:'',
  desc:'',
  category:'',
  image:'',
  price:'',
  review:''
}
const Create = () => {
  const token=useSelector(state=>state.auth.token)
  const navigate=useNavigate()
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, [token]);

  const [error, setError] = useState("")
  const [formState,setFormState]=useState(initialState)
  // we get the auth slice from the entire state, which(auth slice)
  // is the userInfo and the token


  // type="file", e.target.files[0]
  const onChangeFile = (e) => {
    setFormState(prevState => {
      return {...prevState,image:e.target.files[0]}
    })
  }

  const handleCloseImg = () => {
    setFormState(prevState => {
      return {...prevState,image: ''}
    })
  }

  const handleCreateProduct = async (e) => {
    e.preventDefault()
    console.log(formState)
    try {
      const formData = new FormData()
      let filename = null
      const {title,desc,category,image,price,review}=formState
      formData.append("image", image)
      formData.append('title',title)
      formData.append('desc',desc)
      formData.append('category',category)
      formData.append('review',review)
      formData.append('price',price)

      // uploading product
      const res = await fetch(`http://localhost:5000/product`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      console.log(data)
      navigate(`/food/${data._id}`)

    } catch (error) {
      console.error(error.message)
    }
  }



  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title: </label>
            <input type="text"
              placeholder='Title...'
              className={classes.input}
              onChange={(e) => setFormState({...formState,title:e.target.value})} required
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description: </label>
            <input type="text"
              placeholder='Description...'
              className={classes.input}
              onChange={(e) =>setFormState({...formState,desc:e.target.value})} required
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Category: </label>
            <input type="text"
              placeholder='Category...'
              className={classes.input}
              onChange={(e) => setFormState({...formState,category:e.target.value})} required
            />
          </div>
          <div className={classes.inputWrapperImage}>
            <label htmlFor="image" className={classes.labelFileInput}>Image: <span>Upload here</span></label>
            <input type="file"
              id="image"
              placeholder='Image...'
              className={classes.input}
              onChange={onChangeFile}
              style={{ display: 'none' }} required
            />
            {formState.image && <p className={classes.imageName}>{formState.image.name} <AiOutlineCloseCircle onClick={handleCloseImg} className={classes.closeIcon} /></p>}
          </div>
          <div className={classes.inputWrapper}>
            <label>Price: </label>
            <input type="number"
              step={0.01}
              placeholder='Price...'
              className={classes.input}
              onChange={(e) => setFormState({...formState,price:e.target.value})} required
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Review: </label>
            <input type="number"
              step={0.1}
              min={1}
              max={5}
              placeholder='Review...'
              className={classes.input}
              onChange={(e) => setFormState({...formState,review:e.target.value})} required
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </div>
        </form>
        {
            error.length>0 && <div className="errorMessage">
              {error}
            </div>
        }
      </div>
    </div>
  )
}

export default Create