'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className=" mt-auto flex justify-center items-center">
            <ul className="flex gap-8 text-4xl">
                <li>
                    <Link href='mailto:jenukohaefobi@gmail.com' className='hover:text-secondary cursor-pointer'>
                        <Icon icon='ri:mail-send-line' />
                    </Link></li><li>
                    <Link href='https://twitter.com/oweneefobi' className='hover:text-secondary cursor-pointer'>
                        <Icon icon='ri:twitter-x-line' />
                    </Link></li><li>
                    <Link href='tel:+2348097633252' className='hover:text-secondary cursor-pointer'>
                        <Icon icon='ri:whatsapp-line' />
                    </Link>
                </li>
            </ul>
        </footer>
    )
}