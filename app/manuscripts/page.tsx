'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ManuscriptSubmission() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 sm:pt-24 pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.header
                    className="mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
                        Manuscript Submission
                    </h1>
                    <div className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto space-y-4">
                        <p className="text-sm sm:text-base">
                            All submitted technical articles (full-papers) will be reviewed by the 5th ICDICI 2024 Technical Committee.
                        </p>
                        <p className="text-sm sm:text-base">
                            Early submission is encouraged to ensure that the committee members have ample time to review the submitted technical papers.
                        </p>
                        <p className="text-sm sm:text-base">
                            Authors are strongly encouraged to submit their full-paper online to the Conference Email: {' '}
                            <Link href="mailto:icdici.conf@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                                icdici.conf@gmail.com
                            </Link>
                            {' '} on or before the "Full Paper Submission Deadline" mentioned in the conference homepage.
                        </p>
                    </div>
                </motion.header>

                <Tabs defaultValue="guidelines" className="w-full">
                    <TabsList className="w-full max-w-2xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-transparent">
                        {["Guidelines", "Paper Content", "Submission"].map((tab) => (
                            <TabsTrigger
                                key={tab}
                                value={tab.toLowerCase().replace(' ', '-')}
                                className="w-full px-4 py-2 text-sm sm:text-base rounded-md transition-all duration-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                            >
                                {tab}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value="guidelines">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="space-y-6 sm:space-y-8"
                        >
                            {[
                                {
                                    title: "Full-Paper Submission",
                                    color: "blue",
                                    items: [
                                        "Papers should be no more than 3000 words (Minimum 4 pages and maximum 8 pages) and should be written in English. Any entry submitted in a different language or without author details (Affiliation and Email ID) will not be considered",
                                        "You are welcome to include additional information, such as illustrations, graphs or tables, as attachments",
                                        "Please do not submit the same paper more than once",
                                        "Authors are not allowed to submit multiple papers within the same category. However, please do not submit slightly modified papers multiple times, as they will not be considered",
                                        "Prior to full-paper submissions –all author's consent must be obtained",
                                        "If you have submitted your full-paper previously to any conference or it is under consideration elsewhere, you cannot submit your full-paper to this conference"
                                    ]
                                },
                                {
                                    title: "Guidelines for Accepted Abstracts",
                                    color: "green",
                                    items: [
                                        "You will be notified on the acceptance notification date if your full-paper has been accepted. All authors who submitted their papers will receive an email stating if their papers have been accepted or not",
                                        "All the presenters will receive complimentary access to all two days of the Technical Conference",
                                        "The organiser assumes no obligation for expenses by authors for travel and accommodation to attend and speak at the event"
                                    ]
                                },
                                {
                                    title: "Plagiarism Policy",
                                    color: "red",
                                    items: [
                                        "If Plagiarism is <15%: If we find Single Source <10% then only we will directly send paper for further review process",
                                        "If Plagiarism is 15-30%: In this case, we will send back to the author for further revision",
                                        "If Plagiarism >30%: We reject Article straight forward"
                                    ]
                                },
                                {
                                    title: "Informalism/Machine Generated Phrases",
                                    color: "orange",
                                    content: "Your full-paper should not use language that is informal in tone / AI-generated in the title or body text. The use of such terms will be considered as \"Indirect Plagiarism\" and will result in careful scrutiny by the Technical Committee and may result in rejection from the evaluation process."
                                },
                                {
                                    title: "Technical Categories",
                                    color: "purple",
                                    content: "There is a choice of 3 different technical categories, all of which have multiple subcategories. Please have a thorough read through all of them and check whether your research scope falls under any one of the topic listed in Call for Papers. Please do not submit the same paper or a slightly modified version more than once as duplicates will be deleted."
                                }
                            ].map((section, index) => (
                                <Card key={index} className={`border-l-4 border-l-${section.color}-500 shadow-md hover:shadow-lg transition-all duration-300`}>
                                    <CardHeader>
                                        <CardTitle className={`text-xl sm:text-2xl text-${section.color}-600 dark:text-${section.color}-400`}>{section.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {section.items ? (
                                            <ul className="space-y-2 sm:space-y-4">
                                                {section.items.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <CheckCircle className={`h-5 w-5 sm:h-6 sm:w-6 mt-0.5 text-${section.color}-500 flex-shrink-0`} />
                                                        <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                                {section.content}
                                                {section.title === "Technical Categories" && (
                                                    <Link href="#" className={`text-${section.color}-600 dark:text-${section.color}-400 hover:underline font-semibold ml-1`}>
                                                        Call for Papers
                                                    </Link>
                                                )}
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="paper-content">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="space-y-6 sm:space-y-8"
                        >
                            <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 mb-4">Full-Paper Content</CardTitle>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                        Your full-paper should contain adequate information for review by the Technical Committee including:
                                    </p>
                                </CardHeader>
                                <CardContent className="p-4 sm:p-6">
                                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                                        {[
                                            {
                                                title: "Abstract",
                                                description: "Summarise the scope and nature of the work including few lines about the results (250-300 words)"
                                            },
                                            {
                                                title: "Introduction",
                                                description: "Brief overview the technology considered, why this research work was undertaken, technology used, etc."
                                            },
                                            {
                                                title: "Literature Review",
                                                description: "A brief summarization on the existing research works and its limitations"
                                            },
                                            {
                                                title: "Technical Contributions",
                                                description: "Describe the significance of the proposed research objective by listing technical contributions"
                                            },
                                            {
                                                title: "Methodology",
                                                description: "Dataset description, proposed workflow, block diagram, architecture, mathematical formulation, and theoretical description"
                                            },
                                            {
                                                title: "Results and Discussion",
                                                description: "Discuss about the simulation or implementation of the proposed methods and discuss about the resultant performance analysis with a comparative study"
                                            },
                                            {
                                                title: "Conclusion and Future Scope",
                                                description: "Summarise the results and major conclusions to be presented, explain how these differ from previous work on the same subject"
                                            }
                                        ].map((section, index) => (
                                            <div key={index} className="space-y-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                                <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
                                                    {section.title}
                                                </h3>
                                                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                                    {section.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-6 text-gray-700 dark:text-gray-300 text-sm sm:text-base text-center">
                                        We also accept the research metadata analysis and review works.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="submission">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="space-y-6 sm:space-y-8"
                        >
                            <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400">
                                        2024 Call For Papers Now Open!
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 sm:space-y-6">
                                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                                        <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                            <h3 className="font-semibold text-lg sm:text-xl mb-4 text-blue-600 dark:text-blue-400">Conference Brochure</h3>
                                            <Button variant="outline" className="w-full gap-2 text-sm sm:text-base py-2 sm:py-3">
                                                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                                                Download Brochure
                                            </Button>
                                        </div>
                                        <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                            <h3 className="font-semibold text-lg sm:text-xl mb-4 text-blue-600 dark:text-blue-400">Submit Papers</h3>
                                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                                                Send your papers to:
                                            </p>
                                            <Button asChild className="w-full gap-2 text-sm sm:text-base py-2 sm:py-3">
                                                <Link href="mailto:icdici.conf@gmail.com">
                                                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                                                    icdici.conf@gmail.com
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400">
                                        Manuscript Templates
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 sm:space-y-6">
                                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                        To help ensure correct formatting, please use the style files, which can be downloaded from the links below as templates for your submission. These include LaTeX and Word templates.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Button variant="outline" className="gap-2 text-sm sm:text-base py-2 sm:py-3">
                                            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                                            MS Word Template
                                        </Button>
                                        <Button variant="outline" className="gap-2 text-sm sm:text-base py-2 sm:py-3">
                                            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                                            LaTeX Template
                                        </Button>
                                        <Button variant="outline" asChild className="text-sm sm:text-base py-2 sm:py-3">
                                            <Link
                                                href="https://www.ieee.org/conferences/publishing/templates.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="gap-2"
                                            >
                                                IEEE Templates
                                                <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mt-4 sm:mt-6">
                                        Violations of any of the above paper specifications may result in rejection of your paper. Please note that the LaTeX template does not allow for keywords. If you are using the Latex template, do not include keywords in your paper.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

