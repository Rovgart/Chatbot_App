import React from 'react'
import InputField from '../TextFields/InputField'

type Props = {}

const LoginForm = () => {
  return (
    <form action={ async (formData:FormData)=>{
        "use server"
        const user={
            email:formData.get("email"),
            password:formData.get("password")
        }
        await login(user)
    }}>
        <label htmlFor="email">Email</label>
        <InputField type={"email"}/>

    </form>
  )
}

export default LoginForm