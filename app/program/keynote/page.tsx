'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/shared"

const speakers = [
    {
        name: "Pr. Pascal Lorenz",
        title: "Professor",
        affiliation: "University of Haute Alsace, France",
        role: "Technical Committee Chair, IEEE Communication Society",
        image: "/placeholder.svg?height=400&width=400",
        expertise: ["Communication Systems", "Network Security", "IoT"]
    },
    {
        name: "Dr. Zubair Baig",
        affiliation: "Deakin University Geelong, Australia",
        image: "/placeholder.svg?height=400&width=400",
        expertise: ["Cybersecurity", "AI in Security", "Critical Infrastructure Protection"]
    },
    {
        name: "Dr. Abdelhakim Moutaouakil",
        affiliation: "Cadi Ayyad University, Marrakech, Morocco",
        image: "/placeholder.svg?height=400&width=400",
        expertise: ["Optical Communications", "Photonics", "Signal Processing"]
    }
]

const SpeakerCard = ({ speaker, index }: { speaker: typeof speakers[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex"
    >
        <Card className="bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1 overflow-hidden">
            <CardHeader className="relative pb-0">
                <div className="absolute"></div>
                <Avatar className="w-24 h-24 border-4 border-white z-10 relative mx-auto">
                    <AvatarImage src={speaker.image} alt={speaker.name} />
                    <AvatarFallback>{speaker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className="text-center pt-4">
                <CardTitle className="text-2xl font-bold mb-1 text-white">{speaker.name}</CardTitle>
                {speaker.title && (
                    <CardDescription className="text-indigo-100">{speaker.title}</CardDescription>
                )}
                <p className="text-indigo-50 mt-2 mb-4">{speaker.affiliation}</p>
                {speaker.role && (
                    <p className="text-sm text-indigo-200 mb-4">{speaker.role}</p>
                )}
                <div className="flex flex-wrap justify-center gap-2">
                    {speaker.expertise.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-indigo-700 text-indigo-100 hover:bg-indigo-600">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    </motion.div>
)

export default function KeynoteSpeakersPage() {
    return (
        <main className="bg-blue_bg">
            <Navbar />
            <div className="container mx-auto py-12 px-4 mt-16">
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Keynote Speakers
                </motion.h1>

                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {speakers.map((speaker, index) => (
                        <SpeakerCard key={index} speaker={speaker} index={index} />
                    ))}
                </motion.div>
            </div>
        </main>
    )
}