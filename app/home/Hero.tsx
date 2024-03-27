'use client'
import AboutMe from 'components/AboutMe'
import BannerQuote from 'components/BannerQuote'
import Contact from 'components/Contact'
import Divider from 'components/Divider'
import Footer from 'components/Footer'
import HeaderIntro from 'components/HeaderIntro'
import RadialGradient from 'components/RadialGradient'
import { ScrollProgress } from 'components/ScrollProgress'
import SiteBarLeft from 'components/SideBarLeft'
import SiteBarRight from 'components/SideBarRight'
import TechStack from 'components/TechStack'
import ThemeSwitch from 'components/theme-switch'
import { useTheme } from 'context/theme-context'
import React, { Suspense } from 'react'

import Layout from './layout'

const Home: React.FC = () => {
  const { theme } = useTheme()

  return (
    <>
      <Layout>
        <ThemeSwitch />
        <header className="h-screen">
          <ScrollProgress
            position={'left'}
            color={'blue'}
            height={10}
            smoothness={true}
          />
          <Suspense>
            <SiteBarLeft />
            <HeaderIntro />
            <SiteBarRight />
          </Suspense>
        </header>
        <main className="relative">
          <Suspense>
            <BannerQuote
              style={'withBG'}
              quoteIndex={0}
              containerType="quote"
            />
            <Divider
              thickness="0.25rem"
              direction="outer-right-to-inner-left"
              color="base-200"
              height="small"
              dividerStyle="solid"
            />
            <TechStack />
            <Divider
              thickness="0.25rem"
              direction="inner-right-to-middle"
              color="base-200"
              height="middle"
              dividerStyle="solid"
            />
            <BannerQuote
              style={'noBG'}
              quoteIndex={1}
              containerType="statement"
            />
            <Divider
              thickness="0.25rem"
              direction="middle"
              color="base-200"
              height="extraLarge"
              dividerStyle="solid"
            />
            <div className="relative -mb-24 pb-32 -mt-10">
              <RadialGradient
                opacity={theme === 'light' ? 'opacity-30' : 'opacity-30'}
                scale="scale-y-100"
                position="-top-24"
              />
              <Divider
                thickness="0.25rem"
                direction="middle-to-inner-left"
                color="base-200"
                height="middle"
                dividerStyle="solid"
              />
              <AboutMe />
              <Divider
                thickness="0.25rem"
                direction="inner-left-to-middle"
                color="base-200"
                height="middle"
                dividerStyle="solid"
              />
              <Contact />
            </div>
          </Suspense>
        </main>
        <Footer />
      </Layout>
    </>
  )
}

export default Home
