'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, BookOpen, Lightbulb, Blocks } from 'lucide-react'

const topics = {
    INFORMATICS: [
        "Intelligent Information Systems",
        "Data Management and Visualization",
        "Data Mining Techniques",
        "Big Data Intelligence",
        "Information Retrieval Techniques",
        "Image/Video Processing and Analysis",
        "Data Integration Techniques",
        "Web Data Management Techniques",
        "Big Data Storage and Processing Architectures",
        "Distributed and Parallel Databases",
        "Access Control and Authorization Techniques",
        "Natural Language Processing",
        "Big Data as a Service",
        "Data Pre-Processing Techniques",
    ],
    "COGNITIVE INTELLIGENCE": [
        "Cognitively Inspired Computing and Communications",
        "Cognitive Foundation in Big Data",
        "Cognitive Robotics",
        "Autonomous Computing Technologies",
        "Cognitive Information Processing Model",
        "Cognitive Human-Computer Interaction Techniques",
        "Deep Learning",
        "Data-Driven Fuzzy Systems and Models",
        "Cognition based Human-Machine Cooperation",
        "Cognitive Interferences in Data Processing",
        "Cognitive Information Theory",
        "Neuro-Computing and Brain-System Interfaces",
        "Knowledge Processors and Manipulations",
        "Intelligent Decision Theories and Models",
    ],
    APPLICATIONS: [
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
        "E-learning",
        "Gaming Theory",
    ],
}

const CategoryIcon = ({ category }: { category: string }) => {
    switch (category) {
        case 'INFORMATICS':
            return <BookOpen className="h-5 w-5" />
        case 'COGNITIVE INTELLIGENCE':
            return <Lightbulb className="h-5 w-5" />
        case 'APPLICATIONS':
            return <Blocks className="h-5 w-5" />
        default:
            return null
    }
}

const TopicCard = ({ topic }: { topic: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
    >
        <Card className="group transition-all hover:shadow-md hover:border-blue-500/60 bg-gray-800">
            <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground font-medium">{topic}</span>
                </div>
            </CardContent>
        </Card>
    </motion.div>
)

export default function CallForPapersPage() {
    const [activeTab, setActiveTab] = useState("INFORMATICS")

    return (
        <main className="min-h-screen pt-20 sm:pt-24 my-6">
            <div className="container mx-auto px-4 pb-16">
                <div className="w-full max-w-5xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h1 className="text-4xl font-bold sm:text-5xl mb-4">
                            Call For Papers
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our comprehensive range of research topics and areas of interest
                        </p>
                    </div>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                        <TabsList className="grid w-full grid-cols-3">
                            {Object.keys(topics).map((category) => (
                                <TabsTrigger
                                    key={category}
                                    value={category}
                                    className="flex items-center justify-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                >
                                    <CategoryIcon category={category} />
                                    <span className="hidden sm:inline">{category.charAt(0) + category.slice(1).toLowerCase()}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>

                    {/* Active category title for small screens */}
                    <div className="sm:hidden text-center mb-4">
                        <h2 className="text-xl font-semibold text-primary">
                            {activeTab.charAt(0) + activeTab.slice(1).toLowerCase()}
                        </h2>
                    </div>

                    <div className="relative space-y-4">
                        <div/>
                        {Object.entries(topics).map(([category, topicList]) => (
                            <div
                                key={category}
                                className={`grid gap-3 transition-all ${activeTab === category ? 'block' : 'hidden'}`}
                            >
                                {topicList.map((topic, index) => (
                                    <TopicCard key={index} topic={topic} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

