'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2 } from 'lucide-react'

const topics = {
    informatics: [
        "Intelligent Information Systems",
        "Data Management and Visualization",
        "Data Mining Techniques",
        "Big Data Intelligence",
        "Information Retrieval Techniques",
        "Image/Video Processing and Analysis",
        // "Data Integration Techniques", "Web Data Management Techniques", "Big Data Storage and Processing Architectures",
        "Distributed and Parallel Databases",
        // "Access Control and Authorization Techniques",
        "Natural Language Processing",
        "Big Data as a Service",
        // "Data Pre-Processing Techniques", "Multi-Structured Data Processing Techniques",
        "Computational Modeling and Data Integration Techniques",
        "Security and Privacy-Preserving Big Data Analytics"
    ],
    cognitiveIntelligence: [
        // "Cognitively Inspired Computing and Communications",
        "Cognitive Foundation in Big Data",
        "Cognitive Robotics",
        "Autonomous Computing Technologies",
        "Cognitive Information Processing Model",
        // "Cognitive Human-Computer Interaction Techniques",
        "Deep Learning",
        "Data-Driven Fuzzy Systems and Models",
        // "Cognition based Human-Machine Cooperation", "Cognitive Interferences in Data Processing",
        "Cognitive Information Theory",
        // "Neuro-Computing and Brain-System Interfaces", "Knowledge Processors and Manipulations",
        "Intelligent Decision Theories and Models",
        "Distributed Data Intelligence Models",
        "Cognitive Data Modeling and Mining Techniques"
    ],
    applications: [
        "Smart Cities",
        "Healthcare",
        "Process Automation",
        "Supply Chain and Logistics",
        "Industrial Internet of Things",
        "Cognitive Human-Computer Interaction Models",
        "Industrial Automation and Robotics",
        "Internet of Vehicles",
        "Wearable and Personalized Technologies",
        "Smart Virtual Environments",
        "Mobile Technologies and Services",
        // "E-learning",
        "Gaming Theory",
        // "Smart User Interfaces",
        "Multimedia and Video Processing"
    ]
}

const TopicCard = ({ topic }: { topic: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Card className="mb-2 bg-gray-800 shadow-lg">
            <CardContent className="p-4 flex items-center">
                <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-gray-100">{topic}</span>
            </CardContent>
        </Card>
    </motion.div>
)

export default function CallForPapersPage() {
    return (
        <main className="bg-blue_bg min-h-screen">
            <div className="container mx-auto py-12 px-4 mt-16">
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Call For Paper
                </motion.h1>

                <Tabs defaultValue="informatics" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8 rounded-xl p-1 bg-gray-800">
                        <TabsTrigger
                            value="informatics"
                            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm"
                        >
                            Informatics
                        </TabsTrigger>
                        <TabsTrigger
                            value="cognitiveIntelligence"
                            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm"
                        >
                            Cognitive Intelligence
                        </TabsTrigger>
                        <TabsTrigger
                            value="applications"
                            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm"
                        >
                            Applications
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="informatics">
                        {topics.informatics.map((topic, index) => (
                            <TopicCard key={index} topic={topic} />
                        ))}
                    </TabsContent>
                    <TabsContent value="cognitiveIntelligence">
                        {topics.cognitiveIntelligence.map((topic, index) => (
                            <TopicCard key={index} topic={topic} />
                        ))}
                    </TabsContent>
                    <TabsContent value="applications">
                        {topics.applications.map((topic, index) => (
                            <TopicCard key={index} topic={topic} />
                        ))}
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}