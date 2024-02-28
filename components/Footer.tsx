'use client'
import { useLanguage } from "context/language-context";
import { useTheme } from "context/theme-context";
import { FooterLinks,sideBarLeftSocials } from "lib/data";
import Image from 'next/image'
import Link from 'next/link';
import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import Popup from "reactjs-popup";

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimagename: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer className="bg-darkblue flex justify-around items-center gap-10 p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
      <div className="flex gap-10">
        {FooterLinks.map((link, index) => {
          const popupContent = (
            <div
              className={`p-32 max-lg:p-16  rounded-3xl dark-shadow relative max-h-[80vh] overflow-y-auto ${
                theme === 'dark' ? 'bg-success' : 'bg-white'
              }`}
            >
              <button
                className="fixed top-0 right-0 bg-blue p-4 z-10 rounded-2xl m-4 hover:bg-lightblue transition-all duration-500 dark-shadow text-white"
                onClick={() => {
                  close()
                }}
              >
                <VscChromeClose />
              </button>
              {link.data}
            </div>
          )

          return (
            <Popup
              trigger={
                <button className="text-white text-2xl font-bold hover:text-blue">
                  {language === 'FR' ? link.fr : link.en}
                </button>
              }
              modal
              key={index}
            >
              {popupContent}
            </Popup>
          )
        })}
      </div>
      <div className="socials flex gap-10 ">
        {sideBarLeftSocials.map(
          (social: SocialLink, index: number) => (
            <Link
              href={social.link}
              className="block mb-2 "
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              // eslint-disable-next-line jsx-a11y/aria-props
              aria-aria-current={
                social.altimagename === 'true'
                  ? social.altimagename + ' button'
                  : social.altimagename + ' button'
              }
            >
              {typeof social.icon === 'function' ? (
                <social.icon className={`stroke-blue`} />
              ) : (
                <Image
                  src={social.icon}
                  alt={social.altimagename}
                  style={{ stroke: social.iconcolor || '' }}
                />
              )}
            </Link>
          ),
        )}
      </div>
      <div>
      </div>
    </footer>
  );
};

export default Footer;
