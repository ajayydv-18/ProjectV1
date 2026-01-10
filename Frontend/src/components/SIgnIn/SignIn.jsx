import React from 'react'

const SignIn = () => {
  return (
    <div className='h-screen w-screen bg-[#000000]'>
      <div className=''>
        <div className='flex gap-8 items-center '>
          <img className='h-30 w-30 ' src="../../src/assets/Images/signInLogo.png" alt="" />
          <h1 className='text-[#162942] text-xl font-bold'>Lex<span className='text-[#AE8623] textl-xl font-bold'>Bridge</span></h1>
        </div>

        <div>
          <h1 className='text-3xl text-white font-bold ' >Welcome Back</h1>
          <p className='text-xl text-[#c7c2c2] font-medium'>Login to manage your account</p>
        </div>

        <div>
          <div className='w-100 h-12 bg-white flex gap-4 items-center justify-center rounded cursor-pointer active:scale-98'>
            <img className='w-8 h-8' src="../../src/assets/Images/google.png" alt="" />
            <h1 className='font-medium text-xl '>Sign in with Google</h1>      
          </div>
          <div className='flex text-white gap-1'>
              <div className='h-1 w-40'>------------------------</div>
              <p>or</p>
              <div className='h-1 w-40'>------------------------</div>
            </div>
        </div>

      </div>

      <div className='text-white'>
        <div className='flex flex-col gap-4'>
          <h1>Email Address</h1>
          <form className='text-[#444242]'>
            <input className='w-100 h-10 ' type="text" placeholder='johndoe123@gmail.com' />
          </form>
        </div>

        <div className='flex flex-col gap-4'>
          <div>
            <h1 className='text-l font-semibold'>Password</h1>
            <h1>Forgot Password</h1>
          </div>
          
          <form className='text-[#444242]'>
            <input className='w-100 h-10 ' type="text" placeholder='Create a strong password min 8 characters' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn