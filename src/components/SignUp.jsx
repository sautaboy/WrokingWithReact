import React, { useState } from 'react'
// Importing The Package for form validation
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


import { UserDataSignUp } from '../App'
import { useContext } from 'react'


export default function SignUp() {
    const schema = yup.object().shape({
        fullName: yup.string().required("Full Name is  Required"),
        email: yup.string().email().required("Email is  Required"),
        password: yup.string().required("Password is  Required").min(8).max(18),
        phone: yup.string().required("Phone is  Required").min(10),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password Does Not Match")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        document.getElementById("fullName").innerHTML = data.fullName
        document.getElementById("email").innerHTML = data.email
        document.getElementById("phone").innerHTML = data.phone
        document.getElementById("password").innerHTML = data.password
        console.log(data)


        setUserEmail(newUserEmail)
        setUserPhone(newUserPhone)
        setUserPassword(newUserPassword)
        setUserName(newUserName)


    }


    const { setUserName, setUserPhone, setUserEmail, setUserPassword } = useContext(UserDataSignUp)

    const [newUserName, setNewUserName] = useState("")
    const [newUserEmail, setNewUserEmail] = useState("")
    const [newUserPhone, setNewUserPhone] = useState("")
    const [newUserPassword, setNewUserPassword] = useState("")


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='signUpContainer'>
                    <input type="text" name="" id="" placeholder='Enter Your Full Name' {...register("fullName")} onChange={(event) => {
                        setNewUserName(event.target.value)
                    }} />
                    <p className='errorMessage'>{errors.fullName?.message}</p>
                    <input type="text" name="" id="" placeholder='Enter Your Email' {...register("email")} onChange={(event) => {
                        setNewUserEmail(event.target.value)
                    }} />
                    <p className='errorMessage'>{errors.email?.message}</p>

                    <input type="text" name="" id="" placeholder='Enter Your Phone' {...register("phone")} onChange={(event) => {
                        setNewUserPhone(event.target.value)
                    }} />
                    <p className='errorMessage'>{errors.phone?.message}</p>

                    <input type="text" name="" id="" placeholder='Enter Your Password' {...register("password")} onChange={(event) => {
                        setNewUserPassword(event.target.value)
                    }} />
                    <p className='errorMessage'>{errors.password?.message}</p>

                    <input type="text" name="" id="" placeholder='Enter Your Confirm Password' {...register("confirmPassword")} onChange={(event) => {
                        setNewUserName(event.target.value)
                    }} />
                    <p className='errorMessage'>{errors.confirmPassword?.message}</p>
                    <input type="submit" />
                </div>
            </form>
            <div className="outputData">
                <p >Your Name :<span id='fullName'>Your Name Will Apper Here</span></p>
                <p >Your Email :<span id='email'>Your Name Will Apper Here</span></p>
                <p >Your Phone Number :<span id='phone'>Your Name Will Apper Here</span></p>
                <p >Your Password  :<span id='password'>Your Name Will Apper Here</span></p>
            </div>
        </div>
    )
}
