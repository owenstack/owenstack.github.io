'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import me from 'assets/img/me.png'
import { useLanguage } from 'context/language-context'
import { motion, useScroll, useTransform } from 'framer-motion'
import { aboutMeData } from 'lib/data'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const AboutMe: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null)
  const progressContent = useRef<HTMLSpanElement | null>(null)
  const { language } = useLanguage()
  const animationReference = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        '--progress',
        String(1 - progress),
      )
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }
  const paragraphs =
    language === 'FR' ? aboutMeData.paragraphs_FR : aboutMeData.paragraphs_EN

  return (
    <React.Fragment>
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content mt-16">
          <div className="flex flex-col gap-6 justify-center items-center p-32 w-1/2 lg:w-full lg:p-16 lg:items-start">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgress,
                opacity: opacityProgress,
                textAlign: 'left',
              }}
            >
              <p className="text-[--primary] mb-6 text-2xl">
                <span className="text-secondary">&lt;</span>
                {language === 'FR' ? aboutMeData.title : aboutMeData.title_EN}
                <span className="text-secondary">/&gt;</span>
              </p>
              <h2 className="text-[--primary] text-enter lg:text-left break-words">
                {language === 'FR'
                  ? aboutMeData.description
                  : aboutMeData.description_EN}
              </h2>
            </motion.div>
          </div>
          <div className="flex flex-row justify-center gap-6 items-center pl-32 pr-32 mb-16 lg:flex-col lg:p-16">
            <article className="pl-60 lg:p-0">
              <Image width={400} height={400} src={me} alt="me" />
            </article>
            <Swiper
              spaceBetween={100}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="w-1/2 pt-16 lg:pb-16 lg:pl-0 lg:pr-0"
            >
              {paragraphs.map((paragraph, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-[--accent] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[--base-200] hover:border-primary duration-500 transition-all text-left lg:p-10 cursor-grab"
                >
                  <div className="flex gap-6 flex-row justify-start items-center lg:flex-col lg:justify-center lg:text-center">
                    <div>
                      <Image
                        src={paragraph.icon}
                        alt={paragraph.icon}
                        className="w-24"
                      />
                    </div>
                    <div>
                      <h2>{paragraph.title}</h2>
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 lg:flex-col">
                    <div className="flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 lg:flex-row lg:m-0">
                      <p className="text-white">
                        <span className="text-secondary">&lt;</span>
                        <span className="text-secondary">/&gt;</span>
                      </p>
                      <div className="flex justify-between items-center w-1 h-[100%] lg:flex-row lg-[10rem]">
                        <div></div>
                      </div>
                      <p className="text-white text-3xl">
                        {paragraph.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div
                className="absolute right-0 bottom-0 z-10 flex items-center justify-center font-bold text-secondary text-3xl w-24 h-24 lg:w-16lg:h-16 lg:text-2xl"
                slot="container-end"
              >
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutMe
