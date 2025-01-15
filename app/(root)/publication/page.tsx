'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Clock, Monitor, MessageCircle, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { IEEE_Logo } from "@/public/images"

const presentationGuidelines = [
    {
        title: "Format",
        content: "Presentations should adhere to the specified format, whether it's oral, poster, or virtual. Ensure that your presentation aligns with the guidelines provided on our conference website.",
        icon: <BookOpen className="w-8 h-8" />
    },
    {
        title: "Time Limit",
        content: "Each presenter is allotted 20 minutes of time for their presentation. Please adhere to the assigned time limit to ensure a smooth flow of sessions.",
        icon: <Clock className="w-8 h-8" />
    },
    {
        title: "Slides and Materials",
        content: "Submit your presentation slides and any additional materials to the conference email address one week before the conference.",
        icon: <Monitor className="w-8 h-8" />
    },
    {
        title: "Technical Requirements",
        content: "If you are presenting virtually, familiarize yourself with the virtual platform and test your audio and video connections beforehand to avoid technical issues during your presentation.",
        icon: <Monitor className="w-8 h-8" />
    },
    {
        title: "Q&A Session",
        content: "Be prepared for a Q&A session following your presentation. Engage with the audience and address any questions or feedback.",
        icon: <MessageCircle className="w-8 h-8" />
    }
]

export default function PublicationPage() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto py-12 px-4 mt-16">
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Publication Guidelines
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                    >
                        <Card className="rounded-xl overflow-hidden border-0 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
                                <CardTitle className="text-2xl font-bold">Publication Information</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 bg-gray-800 h-full">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Papers accepted and presented at the conference will be recommended for inclusion in IEEE Xplore, subject to the acceptance of the review committee, immediately after their presentation at the conference.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-full"
                    >
                        <Card className="rounded-xl overflow-hidden border-0 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
                                <CardTitle className="text-2xl font-bold">IEEE Information</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 bg-gray-800 flex flex-col items-center justify-center space-y-4">
                                <div className="flex justify-center">
                                    <Image src={IEEE_Logo || "/placeholder.svg"} alt="IEEE Logo" width={200} height={100} className="mb-4" />
                                </div>
                                <p className="text-gray-300 text-lg">IEEE XPLORE COMPLIANT ISBN: 979-8-3503-8960-9</p>
                                <p className="text-gray-300 text-lg">IEEE DVD ISBN: 979-8-3503-8959-3</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="rounded-xl overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
                                <CardTitle className="text-2xl font-bold">Author Ethics</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 bg-gray-800">
                                <p className="text-gray-300 mb-6 text-lg">
                                    Ensure your research adheres to the highest ethical standards. Review the IEEE Author Ethics Guidelines for comprehensive information.
                                </p>
                                <a
                                    href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/ethical-requirements/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="w-full">
                                        <ExternalLink className="mr-2 h-5 w-5"/>
                                        View Author Ethics Guidelines
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="rounded-xl overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
                                <CardTitle className="text-2xl font-bold">No-Show Policy</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 bg-gray-800">
                                <p className="text-gray-300 mb-4 text-lg">
                                    Papers that are not presented at the conference will not be considered for final publication in the conference proceedings.
                                </p>
                                <p className="text-gray-300 text-lg">
                                    We encourage all authors to make every effort to attend and present their work during the scheduled sessions.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-6"
                >
                    <Card className="rounded-xl overflow-hidden border-0 shadow-lg">
                        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
                            <CardTitle className="text-2xl font-bold">Presentation Guidelines</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 bg-gray-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {presentationGuidelines.map((guideline, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <Card className="h-full border-0 bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg">
                                            <CardContent className="p-6 flex flex-col items-center text-center">
                                                <div className="mb-4 p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                                                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                                                        {guideline.icon}
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                                                    {guideline.title}
                                                </h3>
                                                <p className="text-gray-300 text-base leading-relaxed">
                                                    {guideline.content}
                                                </p>
                                                <Button variant="link" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                                                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </main>
    )
}

