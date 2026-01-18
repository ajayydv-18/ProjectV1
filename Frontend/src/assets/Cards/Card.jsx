import React from 'react'

const Card = (props) => {
    console.log();
    
  return (
    <div className='h-60 w-100 bg-[#161414] shrink-0 mt-4 py-2 text-center flex flex-col gap-2 items-center rounded shadow-xs shadow-white hover:scale-101 transition-all transition-ease transition-0.3s'>
        <img className='h-30 w-30 object-center object-cover rounded-xl' src={props.elem.image} alt="" />
        <h1 className='text-white text-2xl font-bold capitalize '>{props.elem.title}</h1>
        <p className='text-l font-semibold text-gray-400'>{props.elem.description}</p>
    </div>
  )
}

export default Card