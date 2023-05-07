import React, { useState } from 'react'

export default function UseState() {
  const [initialValue, setInitialValue] = useState(0)


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',

  })

  const handleOnchange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }





  return (
    <div className='center'>
      <h1>Chaging The Value Using useState</h1>
      <button onClick={() => {
        setInitialValue(initialValue + 1)
      }}>Increase</button>
      <span>{initialValue}</span>
      <button onClick={() => {
        setInitialValue(initialValue - 1)


        //  if this is uncomment the value will not be - stop to 0
        // if (initialValue === 0) {
        //   setInitialValue(0)
        // }
      }}>Decrease</button>
      <hr />


      <div className='useState2'>

        <h1>Updating Multiple Value Using useSta,te</h1>
        <label htmlFor="">
          Name:
          <input type="text" placeholder='Enter Your Name' name='name' onChange={handleOnchange} />
        </label>
        <label htmlFor="">
          Email:
          <input type="text" placeholder='Enter Your Phone' name='phone' onChange={handleOnchange} />
        </label>
        <label htmlFor="">
          Phone:
          <input type="text" placeholder='Enter Your Email' name='email' onChange={handleOnchange} />
        </label>
        <h2>Your Name:{formData.name}</h2>
        <h2>Your Email:{formData.email}</h2>
        <h2>Your Phone:{formData.phone}</h2>
        <button onClick={() => {
          if (formData.name.length > 0 && formData.email.length > 0 && formData.phone.length > 0) {
            alert("Submitted")
            setFormData("")
          }
          else {
            alert("Fill The Input Field")
          }
        }}>Submit</button>
      </div>
    </div>
  )
}
