'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import {IEEE_Logo} from "@/public/assets/images"

const presentationGuidelines = [
    {
        title: "Format",
        content: "Presentations should adhere to the specified format, whether it's oral, poster, or virtual. Ensure that your presentation aligns with the guidelines provided on our conference website."
    },
    {
        title: "Time Limit",
        content: "Each presenter is allotted 20 minutes of time for their presentation. Please adhere to the assigned time limit to ensure a smooth flow of sessions."
    },
    {
        title: "Slides and Materials",
        content: "Submit your presentation slides and any additional materials to the conference email address one week before the conference."
    },
    {
        title: "Technical Requirements",
        content: "If you are presenting virtually, familiarize yourself with the virtual platform and test your audio and video connections beforehand to avoid technical issues during your presentation."
    },
    {
        title: "Q&A Session",
        content: "Be prepared for a Q&A session following your presentation. Engage with the audience and address any questions or feedback."
    }
]

export default function PublicationPage() {
    return (
        <main className="bg-blue_bg">
            <div className="container mx-auto py-12 px-4 mt-16">
                <motion.h1
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Publication
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="mb-8 bg-gray-800">
                        <CardHeader>
                            <CardTitle>Publication Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Papers accepted and presented at the conference will be recommended for inclusion in IEEE Xplore, subject to the acceptance of the review committee, immediately after their presentation at the conference.</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Card className="mb-8 bg-gray-800">
                        <CardHeader>
                            <CardTitle>IEEE Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-center mb-4">
                                <Image src={IEEE_Logo} alt="IEEE Logo" width={200} height={100} />
                            </div>
                            <p className="text-center">IEEE XPLORE COMPLIANT ISBN: 979-8-3503-8960-9</p>
                            <p className="text-center">IEEE DVD ISBN: 979-8-3503-8959-3</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="mb-8 bg-gray-800">
                        <CardHeader>
                            <CardTitle>Author Ethics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <a
                                href={'https://conferences.ieeeauthorcenter.ieee.org/author-ethics/ethical-requirements/'}
                                target="_blank"
                            >
                                <Button variant="outline" className="bg-gray-700 text-gray-100 hover:bg-gray-600 w-full">
                                    <ExternalLinkIcon className="mr-2 h-4 w-4"/>
                                    View Author Ethics Guidelines
                                </Button>
                            </a>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Card className={"bg-gray-800"}>
                        <CardHeader>
                            <CardTitle>Presentation Guidelines</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {presentationGuidelines.map((guideline, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b-muted-foreground">
                                        <AccordionTrigger>{guideline.title}</AccordionTrigger>
                                        <AccordionContent>
                                            {guideline.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8"
                >
                    <Card className={"bg-gray-800"}>
                        <CardHeader>
                            <CardTitle>No-Show Policy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Papers that are not presented at the conference will not be considered for final publication in the conference proceedings.</p>
                            <p className="mt-4">We encourage all authors to make every effort to attend and present their work during the scheduled sessions.</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </main>
    )
}