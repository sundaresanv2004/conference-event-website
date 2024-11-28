'use client';

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const timer = setInterval(() => {
            const difference = +new Date("2025-02-01") - +new Date()
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen w-full text-white bg-[#0d1117]" id='home'>
            <main className="w-full h-full">
                <div
                    className="w-full h-screen bg-hero-img bg-no-repeat bg-center bg-cover flex items-center justify-center"
                    style={{ backgroundAttachment: 'fixed' }}
                >
                    <div
                        className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center flex-col px-4 py-8 sm:px-6 lg:px-8"
                    >
                        <div className="container mx-auto max-w-7xl mt-16 sm:mt-20 md:mt-24">
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8}}
                                className="text-center"
                            >
                                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                                    6th International Conference on
                                    <span className="block text-gray-300 mt-2">Data Intelligence and Cognitive Informatics</span>
                                </h1>
                                <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
                                    Join us for cutting-edge research presentations, workshops, and networking
                                    opportunities in the field of AI and cognitive science.
                                </p>
                                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Link href={"/registration"}>
                                        <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                                            Register Now
                                        </Button>
                                    </Link>
                                    <a href={"/#About"}>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="text-white border-white hover:bg-white hover:text-black"
                                        >
                                            Learn More
                                        </Button>
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        <div className="mt-12 md:mt-16 w-full max-w-4xl px-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">
                                Countdown to ICDICI 2025
                            </h2>
                            <div className="flex justify-center">
                                <div
                                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg py-4 px-6 sm:py-5 sm:px-8 flex space-x-4 sm:space-x-6"
                                >
                                    {Object.entries(timeLeft).map(([unit, value]) => (
                                        <div key={unit} className="text-center">
                                            <span className="text-2xl sm:text-3xl font-bold text-white">{value}</span>
                                            <span className="block text-xs sm:text-sm uppercase text-gray-300 mt-1">{unit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}