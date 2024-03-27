'use client'
import { useActiveSectionContext } from 'context/active-section-context'
import { useLanguage } from 'context/language-context'
import { useTheme } from 'context/theme-context'
import { navLinks } from 'lib/data'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import LanguageSwitch from './LanguageSwitch'
import ScrollToAnchor from './Listener'

const NavBar: React.FC = () => {
  const { theme } = useTheme()
  const { language } = useLanguage()

  const [isSticky, setIsSticky] = useState(false)
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = window.outerHeight * 0.1
      setIsSticky(scrollY >= threshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileMenuActive(true)
        setIsSticky(false)
      } else {
        setIsMobileMenuActive(false)
        setIsSticky(true)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const CustomNavLink: React.FC<CustomNavLinkProps> = ({
    link,
    children,
    linkEn,
  }) => {
    const [isHovered, setIsHovered] = useState(false)
    const isLinkActive = isHovered || linkEn === activeSection

    const linkClasses = isLinkActive
      ? 'transition-all duration-200 relative'
      : 'opacity-20 transition-all duration-700'

    const leftArrow = isLinkActive && (
      <span className="text-[--orange] absolute -left-5 top-0 lg:hidden">
        &lt;
      </span>
    )

    const rightArrow = isLinkActive && (
      <span className="text-[--orange] absolute top-0 -right-10 lg:hidden">
        /&gt;
      </span>
    )

    return (
      <Link
        href={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${linkClasses}`}
        // eslint-disable-next-line jsx-a11y/aria-props
        aria-aria-current={link}
      >
        <span>
          {leftArrow}
          {children}
          {rightArrow}
        </span>
      </Link>
    )
  }

  return (
    <React.Fragment>
      <ScrollToAnchor />
      {!isMobileMenuActive && (
        <nav
          className={`lg:hidden flex-row flex justify-center items-center gap-24 font-semibold p-5 top-0 ${
            isSticky && !isMobileMenuActive
              ? `sticky top-10 z-50 ml-auto mr-auto  w-max  px-16 py-5 transition-all ease-in-out duration-100 rounded-full border border-white border-opacity-40  bg-opacity-70 shadow-lg shadow-primary/[0.03] backdrop-blur-[0.5rem] ${
                  theme === 'dark' ? 'bg-accent' : 'bg-white'
                }`
              : ''
          }
   `}
        >
          {navLinks.map((link, index) => (
            <CustomNavLink key={index} link={link.hash} linkEn={link.en}>
              {link.en === activeSection ? (
                <div>
                  <span className="text-[--orange] absolute -left-5 top-0">
                    &lt;
                  </span>
                  {language === 'FR' ? link.fr : link.en}
                </div>
              ) : (
                <div
                  onClick={() => {
                    setActiveSection(link.en)
                    setTimeOfLastClick(Date.now())
                  }}
                >
                  {language === 'FR' ? link.fr : link.en}
                </div>
              )}
            </CustomNavLink>
          ))}
          <LanguageSwitch />
        </nav>
      )}
      {isMobileMenuActive && (
        <nav
          className={` lg:flex w-[100vw] flex-row justify-between fixed bottom-0 left-0 z-50 bg-accent p-10  text-center items-center transition-all ease-in-out duration-100 rounded-t-3xl bg-opacity-100 shadow-lg shadow-primary/[0.03] backdrop-blur-[0.5rem] ${
            theme === 'dark' ? 'bg-accent' : 'bg-white'
          }`}
        >
          {navLinks.map((link, mobileIndex) => (
            <CustomNavLink key={mobileIndex} link={link.hash} linkEn={link.en}>
              {link.en === activeSection ? (
                <div className="text-[3.2rem] flex flex-col items-center">
                  <link.icon />
                </div>
              ) : (
                <div
                  className="text-[2rem] flex flex-col items-center "
                  onClick={() => {
                    setActiveSection(link.en)
                    setTimeOfLastClick(Date.now())
                    if (link.en === 'Home') {
                      document.body.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                    }
                  }}
                >
                  <link.icon />
                </div>
              )}
            </CustomNavLink>
          ))}
          <LanguageSwitch />
        </nav>
      )}
    </React.Fragment>
  )
}

interface CustomNavLinkProps {
  link: string
  children: React.ReactNode
  linkEn?: string
}

export default NavBar
