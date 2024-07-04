import { useState } from "react";
import axios from 'axios'
const API = axios.create({baseURL:"http://127.0.0.1:5000"})

function Register() {
  const [error, setError] = useState(null);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const [content, setContent] = useState({
    firstname: '',
    lastname: '',
    email: "",
    password: '',
    confirmpass: ''
  })
  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value })
  }
  const registerForm = async (e) => {
    e.preventDefault();
    if (content.firstname && content.lastname && content.email && content.password && content.confirmpass) {
      if (!isValidEmail(content.email)) {
        setError('Email is invalid');
        alert('Email is invalid')
      } else {
        setError(null)
        if (content.password === content.confirmpass) {
         const res= await API.post('/auth/register',{...content})
         console.log(res);
          if (res.data.success) {
            alert(res.data.message)
          setContent({
            firstname: '',
            lastname: '',
            email: "",
            password: '',
            confirmpass: ''
          })
          }else{
            alert(res.data.message)
          }
        } else {
          alert("Password should be same")
        }
      }
    }else{
      alert("fill all columns")
    }
  }
  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">

          <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>


          <form className="space-y-6"
            onSubmit={registerForm}
            method="POST">

            <div>
              <label for="new-password" className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1">
                <input name="firstname"
                  onChange={handleChange}
                  value={content.firstname}
                  type="username"
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label for="new-password" className="block text-sm font-medium text-gray-700">LastNmae</label>
              <div className="mt-1">
                <input name="lastname"
                  onChange={handleChange}
                  value={content.lastname}
                  type="username"
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input name="email"
                  onChange={handleChange}
                  value={content.email}
                  type="email" autoComplete="email-address"
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input name="password"
                  onChange={handleChange}
                  value={content.password}
                  type="password" autoComplete="password"
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="conassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1">
                <input name="confirmpass"
                  onChange={handleChange}
                  value={content.confirmpass}
                  type="password" autoComplete="confirm-password"
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <button type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register