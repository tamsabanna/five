import React from 'react'
import {motion} from 'framer-motion'
import  Typewriter  from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from '../assets/Picsart_23-10-29_15-13-32-426.png'

const Home = () => {

const animations = {
  h1:{
    initial:{x:'-100%', opacity:0,},
    whileInView:{x:0, opacity:1}
          
  },

  button:{
    initial:{y:'-100%', opacity:0,},
    whileInView:{y:0, opacity:1}
          
  }
}

  return (
    <div id='home'>
      <section>
        <div>
          <motion.h1 {...animations.h1} >
            Hi, I am <br/> Suryabhan Singh Rathore
          </motion.h1>

          <Typewriter options={{strings:['A Developer', 'A Programmer', 'A Coder','A Full-Stack Developer', 'A Web-Developer', 'A Front-end Developer', 'A Back-end Developer' ], autoStart:true, loop:true, wrapperClassName:'typewriterpara', cursor:'' }} />

          <div>
            <a href='mailto:surybhansinghrathore2@gmail.com'>Hire me</a>
            <a href='#work'>Projects <BsArrowUpRight/> </a>
          </div>

        </div>
      </section>
      <section>
        <img src={me} alt='suryabhan' />

      </section>
      <BsChevronDown />
    </div>
  )
}

export default Home