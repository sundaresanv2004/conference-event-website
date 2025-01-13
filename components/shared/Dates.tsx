'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calendar, Clock, AlertCircle } from 'lucide-react'

const importantDates = [
    {
        title: "Final Paper Submission",
        date: "29 January, 2025",
        time: "23:59 AoE",
        icon: <Calendar className="w-6 h-6 text-blue-400" />,
    },
    {
        title: "Registration Deadline",
        date: "01 February, 2025",
        time: "23:59 AoE",
        icon: <Calendar className="w-6 h-6 text-blue-400" />,
    },
    {
        title: "Conference Dates",
        date: "02-04 February, 2025",
        time: "09:00 - 18:00 GMT",
        icon: <Calendar className="w-6 h-6 text-blue-400" />,
    },
]

export default function DateComponent() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full space-y-12">
                <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-white tracking-tight"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Key Conference Dates
                </motion.h1>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {importantDates.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-transparent shadow-lg hover:shadow-xl transition-all duration-300">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                                    {item.icon}
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-2xl font-semibold text-blue-300">{item.date}</p>
                                        <Badge variant="secondary" className="bg-blue-500 bg-opacity-20 text-blue-200 border border-blue-400">
                                            {index === importantDates.length - 1 ? 'Event' : 'Deadline'}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center space-x-2 text-blue-200">
                                        <Clock className="w-4 h-4" />
                                        <span>{item.time}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center space-y-4"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                >
                    <p className="text-blue-200 text-lg font-medium">
                        Don&#39;t miss these crucial dates for our upcoming conference!
                    </p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="inline-flex items-center space-x-1 text-blue-300 hover:text-blue-100 transition-colors">
                                <AlertCircle className="w-4 h-4" />
                                <span className="text-sm underline">Time Zone Information</span>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>AoE: Anywhere on Earth</p>
                                <p>GMT: Greenwich Mean Time</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </motion.div>
            </div>
        </div>
    )
}

