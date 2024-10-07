'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from 'lucide-react'

const importantDates = [
    {
        title: "Final Paper Submission Deadline",
        date: "29 January, 2025",
        icon: <Calendar className="w-8 h-8 text-indigo-500" />,
    },
    {
        title: "Registration Deadline",
        date: "01 February, 2025",
        icon: <Calendar className="w-8 h-8 text-indigo-500" />,
    },
    {
        title: "Conference Dates",
        date: "02 February, 2025",
        icon: <Calendar className="w-8 h-8 text-indigo-500" />,
    },
]

export default function DateComponent() {
    return (
        <div className="container mx-auto py-12 px-4 mt-16">
            <motion.h1
                className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                Important Dates
            </motion.h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {importantDates.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                    >
                        <Card
                            className="bg-gray-800 border-indigo-500 border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                {item.icon}
                                <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-semibold text-indigo-400">{item.date}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-12 text-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
            >
                <p className="text-white text-lg">
                    Mark your calendars and don't miss these important deadlines!
                </p>
                <p className="text-indigo-300 mt-2">
                    All deadlines are at 11:59 PM Anywhere on Earth (AoE) time
                </p>
            </motion.div>
        </div>
    )
}