'use client'
import localFont from 'next/font/local'
import Typewriter from 'typewriter-effect'
import clsx from 'clsx'

const head = localFont({ src: '../public/Ojuju.ttf' })

export default function TopTitle() {
    return (
        <h1 className={clsx("justify-center uppercase text-center text-8xl mb-5", head.className)}>
            <Typewriter
                options={{
                    strings: ['Work in Progress', 'Travaux en Cours', 'Ișȩ n lǫ lǫwǫ', `Na-arų ǫrų na-aga n'ihu`],
                    autoStart: true,
                    loop: true
                }} />
        </h1>
    )
}