import { useRouter } from 'next/navigation'
import React from 'react'

const Signupbtn = () => {
  const router = useRouter() 
  return (
    <button onClick={()=> router.push("/SignUp")} className='bg-gray-900 h-10 sm:h-16 w-25 sm:w-fit text-white text-xs sm:text-base font-semibold border rounded-full items-center content-center px-3 sm:px-8 hover:bg-gray-800'>Sign up free</button>
  )
}

export default Signupbtn
