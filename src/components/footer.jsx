import React from 'react'

function footer() {
  return (
    <div className='z-[100000]  bg-[#F1F1F1] w-full h-[90vh]'>
      <div className="boxes relative flex w-full  h-full">
        <div className="pt-[5vw]  flex pl-[5vw]  box w-1/2 h-full bg-[black]">
         <h1 className='uppercase font-semibold pl-[2vw] text-[5vw] tracking-tighter leading-none relative opacity-[.6] text-[#fdfafa]'>Eye<br></br> Openings </h1>
         <img className='absolute font-bold mt-[29vw] bg-cover w-[10vw] h-[5vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          
        </div>
        <div className="pt-[5vw] gap-[2px] relative flex-col flex pr-[5vw]  box w-1/2 h-full bg-[black]">
         <h1 className='uppercase pr-[5vw] font-semibold pl-[2vw] text-[6vw] tracking-tighter leading-none relative opacity-[.6] text-[#fdfafa]'>Presentations </h1>
            <div className="tags flex flex-col w-full h-[40vh] pl-[3vw] pt-[5vw]">
                <p className='pb-[3vw]'>S:</p>
                <a className="underline underline-offset-8"  href="">Instagram</a>
                <a className="underline underline-offset-8" href="">Behance</a>
                <a className="underline underline-offset-8" href="">Facebook</a>
            </div>
            <div className="tags flex flex-col w-full h-[40vh] pl-[3vw] pt-[2vw]">
                <p className='pb-[2vw]'>L:</p>
                <a className="underline underline-offset-8"  href="">202-1965 W 4th Ave</a>
                <a className="underline underline-offset-8" href="">Vancouver, Canada</a><br/>
                <a className="underline underline-offset-8" href="">Lviv, Ukraine</a>
            </div>
            <div className="tags absolute left-[30vw] top-[20vw] flex flex-col w-full h-[40vh] pl-[3vw] pt-[2vw]">
                <p className='pb-[2vw]'>M:</p>
                <a className="underline underline-offset-8"  href="">Home</a>
                <a className="underline underline-offset-8" href="">Services</a>
                <a className="underline underline-offset-8" href="">About Us</a>
                <a className="underline underline-offset-8" href="">Our Work</a>
                <a className="underline underline-offset-8" href="">Contact us</a>
            </div>
           





        </div>


      </div>
    </div>
  )
}

export default footer