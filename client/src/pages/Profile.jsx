import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='p-3 max-w-96 mx-auto bg-slate-50 rounded-lg mt-6 shadow-lg'>
      <h1 className='text=3xl font-semibold text-center my-4'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='flex rounded-full object-cover self-center' src={currentUser.profilePicture} alt="profile" />
        <input defaultValue={currentUser.username} type="text" id='username' placeholder='Username' className='bg-slate-100 rounded-lg p-3' />
        <input defaultValue={currentUser.email} type="email" id='email' placeholder='Email' className='bg-slate-100 rounded-lg p-3' />
        <input type="password" id='password' placeholder='Password' className='bg-slate-100 rounded-lg p-3' />
        <button className='bg-slate-500 rounded-lg p-2 text-white hover:opacity-70 hover:text-cyan-950'>UPDATE</button>
      </form>
      <div className='flex justify-between mt-3'>
        <span className='text-red-600 cursor-pointer'>Delete Account</span>
        <span className='text-red-600 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}
