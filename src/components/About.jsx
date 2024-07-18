import React from 'react'

function About() {
  return (
    <div className='pb-1 bg-[#CDEA68] text-[4vw] w-full h-[140vh] p-20 rounded-tl-2xl rounded-tr-2xl'>
        <h1 className='text-black leading-[4.1vw] font-[4vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='p-[2vw] w-full border-t-[1px] mt-20 border-[#a1b562]'>
        </div>
          <div className='font-[1vw] block w-1/2'>
          <h1 className='text-[grey] mb-2'>OUR APPROACH</h1>
          <button className='text-white border-[1px] bg-[black]
          border-[black] p-2 rounded-xl'>Read More</button>
          </div>
        <div className='rounded-xl relative left-[40vw] bottom-[30vh]'>  <img className='rounded-[2vw]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
    </div>
  )
}

export default About