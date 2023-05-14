
import {React, useEffect,useState} from 'react'

import { gsap } from "gsap";

function Clouds() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
      gsap.to('.sC', {
        duration: 2,
        opacity: 0,
        ease: 'sine.inOut',
        onComplete: () => {
          setIsVisible(false);
        }
      });

  });

  return (
    <div className={`h-screen w-full overflow-hidden absolute top-0 bg-transparent z-50 ${isVisible ? '' : 'hidden'} will-change-auto`}>
      <img src='./assets/smoke.png' className='right-0 w-[50vw] absolute sC'></img>
      <img src='./assets/smoke.png' className='left-0 w-[50vw] absolute sC'></img>
      <img src='./assets/smoke.png' className='left-[30%] w-[50vw] absolute rotate-45 sC'></img>
      <img src='./assets/smoke.png' className='left-[30%] w-[50vw] absolute rotate-45 top-[-50vh] sC'></img>
      <img src='./assets/smoke.png' className='right-[-100px] w-[100vw] absolute rotate-45 top-[-50vh] sC'></img>
      <img src='./assets/smoke.png' className='left-[-250px] w-[80vw] absolute rotate-45 top-[-50vh] sC'></img>
  
     
    </div>
  )
}

export default Clouds