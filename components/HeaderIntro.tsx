'use client'
import { useActiveSectionContext } from 'context/active-section-context'
import { useLanguage } from 'context/language-context'
import { headerIntroData } from 'lib/data'
import Image from 'next/image'
import React from 'react'
import { BsMouse } from 'react-icons/bs'

import Button from './Button'
import RadialGradient from './RadialGradient'

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage()
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full lg:h-full lg:gap-6"
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <Image
        src={headerIntroData.profilepicture}
        alt="me"
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img lg:w-3/4"
      />
      <h1>
        {language === 'FR'
          ? headerIntroData.title.fr
          : headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h2>{headerIntroData.subtitle}</h2>
      <p className="w-1/2 text-center lg:hidden">
        {language === 'FR'
          ? headerIntroData.description.fr
          : headerIntroData.description.en}
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 lg:flex-col lg:items-center">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={language === 'FR' ? button.label.fr : button.label.en}
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              setActiveSection(button.name)
              setTimeOfLastClick(Date.now())
            }}
          />
        ))}
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  )
}

export default HeaderIntro
