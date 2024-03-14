'use client'
import { useEffect, useState } from 'react'
import { timeCalculation } from 'utils/timeCalculation'

export default function Timer() {
    const [countdown, setCountdown] = useState(() => timeCalculation() || [])

    useEffect(() => {
        const updateCountdown = setInterval(() => {
            const newCountdown = timeCalculation() || []
            setCountdown(newCountdown)
        }, 1000)

        return () => {
            clearInterval(updateCountdown)
        }
    }, [countdown])

    return (
        <div className="flex gap-8 uppercase">
            {countdown.length === 0 ? (
                <p className="text-4xl text-white duration-300	ease-in">
                    That is all folks!
                </p>
            ) : (
                countdown.map((count, index) => {
                    const timerID = ['days', 'hours', 'minutes', 'seconds']

                    return (
                        <div key={index}>
                            <div className="text-success bg-[#2a2c41] card shadow-2xl mb-5">
                                <div className='card-body'>
                                <div className="card-title">
                                    <p className="text-6xl">{count < 10 ? `0${count}` : count}</p>
                                </div>
                                </div>
                            </div>
                            <p className="text-sm text-neutral text-center mt-9 border-primary-200">
                                {timerID[index]}
                            </p>
                        </div>
                    )
                })
            )}
            <br />
        </div>
    )
}