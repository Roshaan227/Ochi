import React from 'react'

function Cards() {
  return (
    <div className='w-full rounded-sm h-[90vh] gap-8 pb-5 p-10 relative flex items-center justify-center '>
        
            <div className="relative rounded-xl w-1/2 h-[70vh] flex items-center justify-center bg-green-700">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute rounded-xl px-3 py-1 border-[1px] border[black] opacity-[.7] bottom-4 left-4'>&copy;2019-2024</button>
            </div>
            <div className=" w-1/2 flex items-center relative justify-center rounded-xl h-[70vh]  gap-5 bg-[black]">
            <div className="card w-1/2 flex items-center relative justify-center rounded-xl h-full bg-zinc-500">
            <img className='items-center absolute justify-center' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            </div>
            <div className="card items-center relative justify-center w-1/2 rounded-xl h-full bg-red-700">
            <img className='absolute w-full h-full bg-cover items-center justify-center' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
            </div>

            </div>
        
    </div>
  )
}

export default Cards