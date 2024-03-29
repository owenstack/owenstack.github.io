'use client'
import { useLanguage } from 'context/language-context'
import { useTheme } from 'context/theme-context'
import { motion, useScroll, useTransform } from 'framer-motion'
import { skillsDataCMS, skillsDataDesign, skillsDataWeb } from 'lib/data'
import React, { useRef } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import RadialGradient from './RadialGradient'
import SkillSection from './SkillSection'

const TechStack: React.FC = () => {
  const { theme } = useTheme()
  const { language } = useLanguage()
  const animationReference = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <React.Fragment>
      <section className="relative tech-stack lg:p-16 " id="skills">
        <RadialGradient
          scale="scale-y-[3]"
          opacity={theme === 'light' ? 'opacity-30' : 'opacity-30'}
          position="top-[55rem]"
        />
        <div className="title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] lg:p-0  lg:w-full lg:items-start lg:py-16 ">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            <p className="font-black mb-6">
              <span className="text-[--orange]">&lt;</span>Skills
              <span className="text-[--orange]">/&gt;</span>
            </p>
            <h2>
              {language === 'FR'
                ? 'Mes Techstack et Skills'
                : 'My TechStack and Skills'}
            </h2>
          </motion.div>
        </div>
        <div className="flex gap-40 justify-center lg:flex-col">
          <div className="w-1/3 lg:w-full">
            <SkillSection skillsData={skillsDataWeb} theme={theme} />
          </div>
          <div className="flex flex-col h-[inherit]  justify-around lg:gap-40">
            <SkillSection skillsData={skillsDataDesign} theme={theme} />
            <SkillSection skillsData={skillsDataCMS} theme={theme} />
          </div>
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: '1.5rem',
          zIndex: 10,
          backgroundColor: 'var(--orange)',
        }}
      />
    </React.Fragment>
  )
}

export default TechStack
