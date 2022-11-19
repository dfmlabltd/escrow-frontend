import React from 'react'


const Success = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <img src={require('../../asset/logo.png')}  className='w-[124px] h-[32px] mt-20'/>
      <h2 className='  text-white  text-3xl mt-10 '>Verification Successful!</h2>
        <p className=' py-4 px-8 font-light text-white text-center sm:mx-auto'>Congratulations your email address was verified succesfully and your space <br/> is ready for your first transaction.Click the button below to proceed</p>
        
          <img src = {require('../../asset/checkmark.png')}className='py-4 px-4'/>

      <button className='bg-pink-700 hover:bg-pink-700 text-white font-bold py-2 px-6 flex mt-7 w-fit h-fit'>
    Proceed To Your Space
        </button>
    </div>
  )
}

export default Success;
