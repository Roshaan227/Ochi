import React from 'react';
import { motion } from "framer-motion"
function Marquee() {
  return (
    <div className="w-full pt-[8vw] py-7 rounded-tl-2xl rounded-tr-2xl bg-red-900 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="marquee whitespace-nowrap flex items-center gap-10 border-t-2 border-b-2 border-zinc-300">
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:5}} className="text-[15vw] font-bold">WE ARE OCHI</motion.h1>
         
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:5}} className="text-[15vw] font-bold">WE ARE OCHI</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:5}} className="text-[15vw] font-bold">WE ARE OCHI</motion.h1>
        </div>
       
      </div>

    
    </div>
  );
}

export default Marquee;
