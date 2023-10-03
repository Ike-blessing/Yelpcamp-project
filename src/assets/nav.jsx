import { useState } from 'react'
import reactLogo from './assets/images/logo.svg'
import './App.css'

function nav() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main flex justify-center items-center">
      <div className="nav w-4/5 h-20 bg-white flex">
         <div className="w-screen nav p-2 flex justify-items-end">
            <img src={reactLogo} className="logo react sm:w-40 lg:w-64 ml-5" alt="React logo" />
            <p className="text-black ml-4 pt-5">Home</p>
         </div>
         <div className="w-6/12 pr-10 mr-7 flex justify-end">
            <p className="pr-3 pt-6 text-black">Login</p>
            <button className="p-1 m-2 bg-black text-base text-white rounded">Creat an account</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default nav
