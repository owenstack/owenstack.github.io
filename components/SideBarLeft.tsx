'use client'
import { sideBarLeftSocials } from 'lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SocialLink {
  link: string
  icon: string | React.FC<{ className: string }>
  iconcolor?: string
  altimagename: any
}

const SiteBarLeft: React.FC = () => {
  return (
    <div
      className="absolute flex items-center flex-col justify-center top-0 left-0 ml-8 lg:h-[10%] lg:ml-4"
      id="home"
    >
      <div className="flex items-center justify-center flex-col">
        <div className="w-[0.25rem] h-[40vh] bg-[--base-200]"></div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {sideBarLeftSocials.map((social: SocialLink, index: number) => (
          <Link
            href={social.link}
            className="block mb-2 hover:scale-110"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-current={
              social.altimagename === 'true'
                ? social.altimagename
                : social.altimagename + ' button'
            }
          >
            {typeof social.icon === 'function' ? (
              <social.icon className={`stroke-orange`} />
            ) : (
              <Image
                src={social.icon}
                alt={social.altimagename}
                style={{ stroke: social.iconcolor }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SiteBarLeft
