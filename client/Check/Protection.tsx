import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
const API = axios.create({baseURL:"http://127.0.0.1:5000"}) 

function Protection() {
  const { user } = useSelector((state: any) =>
    state.user
  )
  const getUser = async () => {
    try {
      const res = await API.post('/user/auth/', {
        token: localStorage.getItem('token')
      })
    } catch (error) {
      console.log();
    }
  }
  return (
    <></>
  )
}

export default Protection