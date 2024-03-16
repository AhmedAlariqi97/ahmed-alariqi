import React from 'react'
import './skill.css'
import { AnimatePresence, motion } from 'framer-motion'

const Skill = () => {

    const mySkills = [
        {title: "Laravel"},
        {title: "PHP"},
        {title: "C#"},
        {title: "Asp.net"},
        {title: "Node.js"},
        {title: "React.js"},
        {title: "Next.js"},
        {title: "JavaScripst"},
        {title: "Html"},
        {title: "Css"},
        {title: "Bootstrap"},
        {title: "Tailwind"},
        {title: "jQuery"},
        {title: "SQL Databases"},
        {title: "No-SQL Databases"},
        {title: "System Analyse"},
        {title: "Problem Solving"},
        {title: "Team Leader"},
        {title: "Agile Project Manager"},
        {title: "Scrum"},
        {title: "Git & Github"},
        {title: "Event planning and oversight"},
        {title: "Administrative coordination"},
        {title: "Logistics"},
        {title: "Scheduling"},
        {title: "Creative innovation"},
      ]


  return (
    <section className='skill'>
        <div className='head'>
            <h2 className='title'>Skills</h2>
        </div>
        <div className='body flex'>
            <AnimatePresence>
                {mySkills.map((item) => {
                return (
                    <motion.article
                    layout
                    initial={{ transform: "scale(0)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{ type: "spring", damping: 7, stiffness: 50}}
                    className='card'>
                   
                    <div className='box'>
                        <h2 className='title'>{item.title}</h2>
                    </div>
                    </motion.article>
                )
                })}
            </AnimatePresence>
        </div>
    </section>
  )
}

export default Skill