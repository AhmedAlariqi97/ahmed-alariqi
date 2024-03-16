
import './hero.css'
import Lottie from "lottie-react";
import hero from "../../animations/heroSection.json";
import {useRef} from 'react'
import { motion } from 'framer-motion';

const Hero = () => {

  const lottieRef = useRef();
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className='parent-avatar'>
          <motion.img
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1)"}}
          transition={{damping: 6, type: "spring", stiffness: 100}}

          src='./ahmed-cir.png' className='avatar' alt='' />
          <span className='icon-verified_user'></span>
        </div>

        <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 4}}

        className='title'>
          Full Stack Developer and Project Manager
        </motion.h1>

        <p className='sub-title'>
          Expert Full Stack Developer, System Analyst, and Project Manager with 3+ years in the tech industry, mastering PHP, Laravel, Node.js, C#, Asp.net, JavaScript, React.js and Next.js.
          <br />
          Delivered 13+ projects with a 99% success rate, driving growth in e-commerce and finance.
        </p>

        <div className='social-media flex'>
          
          <div className='icon icon-x'></div>
          <div className='icon icon-instagram'></div>
          <div className='icon icon-github-square'></div>
          <div className='icon icon-linkedin-square'></div>
        </div>

      </div>

      <div className='right-section animation'>
      <Lottie 
      lottieRef={lottieRef}
      onLoadedImages={() => { 
        // @ts-ignore
        lottieRef.current.setSpeed(0.5);
       }}
      animationData={hero} />
      </div>
    </section>
  )
}

export default Hero