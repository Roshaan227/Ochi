import React from 'react'

function Feature() {
  return (
    <>
    <div className='pb-[2vw] w-full pt-16 pb-5 bg-[black] text-[white]'>
        <h1 className='border-b-[1px] border-zinc-700 pb-[1vw] pl-[8vw] font-regular text-[5vw] opacity-[.8]'>Featured Projects</h1>
        </div>
      <div className="cards pl-[2vw] pr-[2vw] w-full pb-[2vw] gap-10 flex bg-[black]">
        <div className="cardcontainer  rounded-xl w-1/2 h-[80vh] overflow-hidden bg-[black]">
              <div className="card w-full h-full hover:scale-90 hover:border-[1px] hover:border-[black] bg-blue-800 rounded-xl">
                <img className='w-full h-full  rounded-xl bg-cover hover:border-[3px] hover:border-[black]' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
              </div>
        </div>
        <div className="cardcontainer rounded-xl w-1/2 h-[80vh] overflow-hidden bg-[black]">
        <div className="card w-full h-full relative bg-orange-800 hover:scale-90 rounded-xl">
          
          <img className='w-full h-full   rounded-xl bg-cover' src="https://plus.unsplash.com/premium_photo-1692574096074-85b35e49a818?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default Feature