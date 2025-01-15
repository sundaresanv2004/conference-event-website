'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const speakers = [
    {
        name: "Pr. Pascal Lorenz",
        title: "Professor",
        affiliation: "University of Haute Alsace, France",
        role: "Technical Committee Chair, IEEE Communication Society",
        image: "/placeholder.svg?height=400&width=400",
        expertise: ["Communication Systems", "Network Security", "IoT"],
        bio: "Prof. Lorenz is a renowned expert in communication systems and network security, with over 20 years of experience in the field."
    },
    {
        name: "Dr. Zubair Baig",
        title: "Associate Professor",
        affiliation: "Deakin University Geelong, Australia",
        image: "/placeholder.svg?height=400&width=400",
        expertise: ["Cybersecurity", "AI in Security", "Critical Infrastructure Protection"],
        bio: "Dr. Baig specializes in cybersecurity and the application of AI in protecting critical infrastructure."
    },
    {
        name: "Dr. Abdelhakim Moutaouakil",
        title: "Professor",
        affiliation: "Cadi Ayyad University, Marrakech, Morocco",
        image: "/placeholder.svg?height=400&width=400",
        expertise: ["Optical Communications", "Photonics", "Signal Processing"],
        bio: "Dr. Moutaouakil is a leading researcher in optical communications and photonics, with numerous publications in top-tier journals."
    }
]

const SpeakerCard = ({ speaker, index }: { speaker: typeof speakers[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex"
    >
        <Card className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 flex-1 overflow-hidden border-t-4 border-blue-500">
            <CardHeader className="pb-0">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={speaker.image} alt={speaker.name} />
                    <AvatarFallback>{speaker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className="text-center">
                <CardTitle className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">{speaker.name}</CardTitle>
                {speaker.title && (
                    <CardDescription className="text-gray-600 dark:text-gray-300">{speaker.title}</CardDescription>
                )}
                <p className="text-gray-700 dark:text-gray-200 mt-2 mb-2">{speaker.affiliation}</p>
                {speaker.role && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{speaker.role}</p>
                )}
                <Separator className="my-4" />
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {speaker.expertise.map((skill, i) => (
                        <Badge key={i} variant="info">
                            {skill}
                        </Badge>
                    ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{speaker.bio}</p>
            </CardContent>
        </Card>
    </motion.div>
)

export default function KeynoteSpeakersPage() {
    return (
        <main className="min-h-screen pt-20 sm:pt-24 my-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Keynote Speakers
                </motion.h1>
                <motion.p
                    className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Learn from industry leaders and visionaries
                </motion.p>

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

