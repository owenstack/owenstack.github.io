'use client'
import { useRouter } from 'next/router'
import React from 'react'

interface ButtonProps {
  onClick?: () => void
  label?: string
  value?: string
  className?: string
  link?: string
  iconcolor?: string
  iconSVG?:
    | React.FC<{ className: string }>
    | React.ComponentClass<{ className: string }>
  buttoncolor?: string
  buttonhovercolor?: string
  type?: 'button' | 'submit' | 'reset'
  elementType?: 'input' | 'button'
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  link,
  value,
  iconSVG: IconSVGComponent,
  buttoncolor,
  buttonhovercolor,
  type,
  elementType,
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (link) {
      router.push(link)
    } else if (onClick) {
      onClick()
    }
  }
  const commonProps = {
    onClick: handleClick,
    type,
    className: `text-white drop-shadow-2xl border-none py-4 px-8 rounded-lg text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer ${buttoncolor} ${buttonhovercolor} lg:text-3xl lg:py-8 lg:px-16 lg:rounded-xl
    shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max`,
  }

  if (elementType === 'input') {
    return <input {...commonProps} value={value} />
  } else {
    const ImageComponent = () => {
      return (
        <img
          width={25}
          height={25}
          src={buttoncolor || ''}
          alt={`${label}-icon`}
          className={`bg-[${buttoncolor || ''}] w-16`}
        />
      )
    }
    const icon = buttoncolor ? (
      <ImageComponent />
    ) : (
      IconSVGComponent && <IconSVGComponent className="w-max h-10" />
    )
    return (
      <button {...commonProps}>
        {icon}
        {label}
      </button>
    )
  }
}

export default Button
