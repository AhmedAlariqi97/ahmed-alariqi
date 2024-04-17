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
        {title: "Agile Project Management"},
        {title: "Scrum"},
        {title: "Version Control"},
        {title: "Event planning and oversight"},
        {title: "Administrative coordination"},
        {title: "Logistics"},
        {title: "Scheduling"},
        {title: "Creative innovation"},
        {title: "Organizational Development"},
        {title: "Event planning and oversight"},
        {title: "Atlassian Suite"},
        {title: "SEO"},
        {title: "Project Planning"},
        {title: "Business Communication"},
        {title: "Change Management"},
      ]


  return (
    <section id='skill' className='skill'>
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