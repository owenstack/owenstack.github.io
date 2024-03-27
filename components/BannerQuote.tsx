'use client'
import bannerBg from 'assets/img/codebanner.jpg'
import { useLanguage } from 'context/language-context'
import { useQuoteAnimation } from 'hooks/useQuoteAnimation'
import { quotesData } from 'lib/data'
import React from 'react'

interface BannerProps {
  style: 'withBG' | 'noBG'
  quoteIndex: number
  containerType: string
}

const BannerQuote: React.FC<BannerProps> = ({
  style,
  quoteIndex,
  containerType,
}) => {
  const { language } = useLanguage()

  const quoteTranslation =
    language === 'FR' ? quotesData[quoteIndex].fr : quotesData[quoteIndex].en

  useQuoteAnimation(`.${containerType}-container h2`)

  return style === 'withBG' ? (
    <React.Fragment>
      <section className="quote-banner relative overflow-x-clip z-[1]">
        <div
          className="quote-outer-container bg-[--accent] h-[50vh] -rotate-3 flex justify-center items-center scale-110 lg:h-full min-[1921px]:px-96"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="quote-container rotate-3 flex items-center flex-col justify-center p-56 lg:p-20 ">
            <h2 className="text-[--white] text-center text-8xl mb-20 mt-20 lg:text-[3rem] lg:mb-10 lg:leading-tight">
              {quoteTranslation}
            </h2>
            <p className="text-[--grey]">{quotesData[0].author}</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <section className="quote-banner relative overflow-x-clip min-[1921px]:px-96">
        <div className="h-[50vh] -rotate-3 flex justify-center items-center scale-110">
          <div className="statement-container rotate-3 flex items-center flex-col justify-center p-56 lg:p-20">
            <h2 className="text-[--primary] text-center text-9xl mb-20 mt-20 lg:text-[3rem] lg:mb-10 lg:leading-tight">
              {quoteTranslation}
            </h2>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default BannerQuote
