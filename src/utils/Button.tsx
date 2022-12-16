import Link from 'next/link'
import React, { ReactNode } from 'react'

interface ButtonProps{
  text: string
  className: string
}

const Button = ({className, text}: ButtonProps) => {
  return (
    <Link href={`/components/states/${text}`}
     className={`text-xs md:text-base uppercase cursor-pointer bg-black text-white px-[2px] hover:bg-yellow-600 ${className}`}>{text}</Link>
  )
}

export default Button