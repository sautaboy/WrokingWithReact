import React from 'react'
import { useContext } from 'react'
import { UserData } from '../App'
export default function Home() {
  const { name, contact, email, password } = useContext(UserData)
  return (
    <div>
      <h2>This is Your Personal Information</h2>
      <div>
        <h2>You Name Is {name}</h2>
        <h2>You Conatct Is {contact}</h2>
        <h2>You Email Is {email}</h2>
        <h2>You Password Is {password}</h2>

      </div>
    </div>
  )
}
