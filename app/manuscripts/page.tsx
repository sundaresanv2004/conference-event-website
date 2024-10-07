'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DownloadIcon, UploadIcon, CheckCircleIcon, FileTextIcon, BookOpenIcon, FileIcon } from 'lucide-react'
import { Navbar } from "@/components/shared"

const guidelines = {
    submission: [
        "Papers should be no more than 3000 words (Minimum 4 pages and maximum 8 pages) and should be written in English.",
        "You are welcome to include additional information, such as illustrations, graphs or tables, as attachments.",
        "Please do not submit the same paper more than once.",
        "Authors are not allowed to submit multiple papers within the same category.",
        "Prior to full-paper submissions –all author's consent must be obtained."
    ],
    content: [
        { title: "Abstract", description: "Summarise the scope and nature of the work including few lines about the results (250 - 300 words)" },
        { title: "Introduction", description: "Brief overview the technology considered, why this research work was undertaken, technology used, etc." },
        { title: "Literature Review", description: "A brief summarization on the existing research works and its limitations." },
        { title: "Technical Contributions", description: "Describe the significance of the proposed research objective by listing technical contributions." },
        { title: "Methodology", description: "Dataset description, proposed workflow, block diagram, architecture, mathematical formulation, and theoretical description." }
    ]
}

export default function ManuscriptsPage() {
    return (
        <main className="bg-blue_bg">
            <Navbar/>
            <div className="container mx-auto py-12 px-4 mt-16">
                <motion.h1
                    className="text-4xl sm:text-5xl xl font-bold text-center mb-12"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Manuscript Submission
                </motion.h1>

                <Tabs defaultValue="submission" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 rounded-xl p-1">
                        <TabsTrigger value="submission" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
                            <FileTextIcon className="mr-2 h-4 w-4" />
                            Submission
                        </TabsTrigger>
                        <TabsTrigger value="guidelines" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
                            <BookOpenIcon className="mr-2 h-4 w-4" />
                            Guidelines
                        </TabsTrigger>
                        <TabsTrigger value="templates" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
                            <FileIcon className="mr-2 h-4 w-4" />
                            Templates
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="submission">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <Card className="bg-gray-800 shadow-lg">
                                <CardHeader>
                                    <CardTitle>Submit Your Manuscript</CardTitle>
                                    <CardDescription>Upload your manuscript for review by the Technical
                                        Committee.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="manuscript">Manuscript File</Label>
                                        <Input id="manuscript" type="file" className="bg-gray-700 text-gray-100"/>
                                    </div>
                                    <Button>
                                        <UploadIcon className="mr-2 h-4 w-4"/> Submit Manuscript
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            className="mt-6"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            <Card className="bg-gray-800 shadow-lg">
                                <CardHeader>
                                    <CardTitle>Submission Checklist</CardTitle>
                                    <CardDescription>Ensure you&apos;ve completed all steps before
                                        submitting.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {["I have read and agree to the submission guidelines",
                                            "My submission is original and free from plagiarism",
                                            "I have used the provided template for formatting"].map((item, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <Checkbox id={`check-${index}`}/>
                                                <label
                                                    htmlFor={`check-${index}`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {item}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        <CheckCircleIcon className="mr-2 h-4 w-4"/> Confirm Submission
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </TabsContent>
                    <TabsContent value="guidelines">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <Card className="bg-gray-800 shadow-lg">
                                <CardHeader>
                                    <CardTitle>Submission Guidelines</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1" className="border-b-white">
                                            <AccordionTrigger>Full-Paper Submission</AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    {guidelines.submission.map((guideline, index) => (
                                                        <li key={index}>{guideline}</li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2" className="border-b-white">
                                            <AccordionTrigger>Full-Paper Content</AccordionTrigger>
                                            <AccordionContent>
                                                <p>Your full-paper should contain adequate information for review by the
                                                    Technical Committee including:</p>
                                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                                {guidelines.content.map((item, index) => (
                                                        <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                    <TabsContent value="templates">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-gray-800 shadow-lg">
                                <CardHeader>
                                    <CardTitle>Manuscript Templates</CardTitle>
                                    <CardDescription>Download the templates for your submission.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 space-x-3">
                                    <Button variant="outline" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                                        <DownloadIcon className="mr-2 h-4 w-4"/> MS Word Template
                                    </Button>
                                    <Button variant="outline" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                                        <DownloadIcon className="mr-2 h-4 w-4"/> LaTeX Template
                                    </Button>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-sm">
                                        Please use these templates to ensure correct formatting of your submission.
                                    </p>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}