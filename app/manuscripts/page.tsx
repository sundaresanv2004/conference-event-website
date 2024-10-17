'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from "@/components/shared"

export default function ManuscriptSubmission() {
    return (
        <div className="min-h-screen bg-blue_bg text-gray-100">
            <Navbar />
            <div className="container mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 mt-16 sm:mt-20">
                <motion.header
                    className="mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Manuscript Submission</h1>
                </motion.header>

                <Tabs defaultValue="policies" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8 rounded-xl p-1 bg-gray-800">
                        <TabsTrigger
                            value="policies"
                            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm"
                        >
                            Guidelines
                        </TabsTrigger>
                        <TabsTrigger
                            value="fullpaper"
                            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm"
                        >
                            Paper Content
                        </TabsTrigger>
                        <TabsTrigger
                            value="submission"
                            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm"
                        >
                            Submission
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="policies">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="space-y-6"
                        >
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Guidelines for Accepted
                                        Abstracts</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                        <li>You will be notified on the acceptance notification date if your full-paper
                                            has been accepted. All authors who submitted their papers will receive an
                                            email stating if their papers have been accepted or not.
                                        </li>
                                        <li>All the presenters will receive complimentary access to all two days of the
                                            Technical Conference.
                                        </li>
                                        <li>The organiser assumes no obligation for expenses by authors for travel and
                                            accommodation to attend and speak at the event.
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Selection
                                        Criteria</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-gray-300">Your full-paper will be evaluated by the Technical
                                        Committee members according to the following grading criteria:</p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-300">
                                        <li><strong className="text-indigo-300">Impact</strong> – The research impact of
                                            your work will be analysed.
                                        </li>
                                        <li><strong className="text-indigo-300">Novelty</strong> – Your research paper
                                            should demonstrate innovation and originality and contain significant new
                                            knowledge and technical results.
                                        </li>
                                        <li><strong className="text-indigo-300">Interest & Relevance</strong> –
                                            Evaluates how relevant is your full-paper submission to the scope of the
                                            conference? How interesting is the subject matter to the ICDICI audience?
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Technical
                                        Categories</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-gray-300">There is a choice of 3 different technical
                                        categories, all of which have multiple subcategories. Please have a thorough
                                        read through all of them and check whether your research scope falls under any
                                        one of the topic listed in Call for Papers.</p>
                                    <p className="text-gray-300">Please do not submit the same paper or a slightly
                                        modified version more than once as duplicates will be deleted.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Informalism/Machine
                                        Generated Phrases</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300">Your full-paper should not use language that is
                                        informal in tone / AI-generated in the title or body text. The use of such terms
                                        will be considered as &#34;Indirect Plagiarism&#34; and will result in careful
                                        scrutiny by the Technical Committee and may result in rejection from the
                                        evaluation process.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Plagiarism
                                        Policy</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-gray-300">After receiving the initial full-paper submission,
                                        we check the plagiarism using software and handle it as follows:</p>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                        <li>If Plagiarism is {'<'}15 %: If we find Single Source {'<'}10% then only we
                                            will directly send paper for further review process.
                                        </li>
                                        <li>If Plagiarism is 15-30 %: In this case, we will send back to the author for
                                            further revision.
                                        </li>
                                        <li>If Plagiarism {'>'}30 %: We reject Article straight forward.</li>
                                    </ul>
                                    <h4 className="font-semibold mt-4 mb-2 text-indigo-300">Plagiarism after
                                        Publication:</h4>
                                    <p className="text-gray-300">If we find Plagiarism after the publishing of a paper,
                                        then after verifying the copied content the paper may be retracted.</p>
                                    <p className="mt-4 text-gray-300">Author(s) should not submit the same paper to
                                        multiple conferences/journals for publications. This may also lead to
                                        post-publication plagiarism.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="fullpaper">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="space-y-6"
                        >
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Full-Paper
                                        Submission</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300">The full-paper submission should be made according to
                                        the following guidelines:</p>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2">
                                        <li>The full-paper should be submitted in PDF format.</li>
                                        <li>The paper should be written in English and should not exceed 6 pages
                                            including figures, tables, and references.
                                        </li>
                                        <li>Use the provided template for formatting your paper.</li>
                                        <li>Ensure that your paper adheres to the plagiarism policy mentioned in the
                                            guidelines.
                                        </li>
                                        <li>Submit your paper before the deadline mentioned on the conference website.
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Full-Paper
                                        Content</CardTitle>
                                    <CardDescription className="text-gray-400">Your full-paper should contain adequate
                                        information for review by the Technical Committee including</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {[
                                            {
                                                title: "Abstract",
                                                description: "Summarise the scope and nature of the work including few lines about the results (250 - 300 words)"
                                            },
                                            {
                                                title: "Introduction",
                                                description: "Brief overview the technology considered, why this research work was undertaken, technology used, etc."
                                            },
                                            {
                                                title: "Literature Review",
                                                description: "A brief summarization on the existing research works and its limitations."
                                            },
                                            {
                                                title: "Technical Contributions",
                                                description: "describe the significance of the proposed research objective by listing technical contributions."
                                            },
                                            {
                                                title: "Methodology",
                                                description: "Dataset description, proposed workflow, block diagram, architecture, mathematical formulation, and theoretical description."
                                            },
                                            {
                                                title: "Results and Discussion",
                                                description: "Discuss about the simulation or implementation of the proposed methods and discuss about the resultant performance analysis with a comparative study."
                                            },
                                            {
                                                title: "Conclusion and Future Scope",
                                                description: "Summarise the results and major conclusions to be presented, explain how these differ from previous work on the same subject."
                                            }
                                        ].map((item, index) => (
                                            <Card key={index} className="bg-gray-700 border-gray-600">
                                                <CardHeader>
                                                    <CardTitle
                                                        className="text-indigo-300 text-lg sm:text-xl">{item.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-gray-300">{item.description}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                    <p className="mt-6 text-gray-300">We also accept the research metadata analysis and
                                        review works.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="submission">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="space-y-6"
                        >
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Manuscript
                                        Submission</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-gray-300">All submitted technical article (full-paper) will
                                        be reviewed by the 5th ICDICI 2024 Technical Committee.</p>
                                    <p className="mb-4 text-gray-300">Early submission is encouraged to ensure that the
                                        committee members have ample time to review the submitted technical papers.</p>
                                    <p className="mb-4 text-gray-300">Authors are strongly encouraged to submit their
                                        full-paper online to the Conference Email: icdici.conf@gmail.com on or before
                                        the &#34;Full Paper Submission Deadline&#34; mentioned in the conference
                                        homepage.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Call For
                                        Papers</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <h4 className="font-semibold mb-2 text-indigo-300">2025 Call For Papers Now
                                        Open!</h4>
                                    <div className="flex flex-wrap gap-4">
                                        <Button
                                            variant="outline"
                                            className="bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200"
                                        >
                                            Conference Brochure
                                        </Button>
                                        <Button
                                            className="bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200"
                                        >
                                            <Link href="mailto:icdici.conf@gmail.com"
                                                  className="text-white no-underline">
                                                Send your papers to icdici.conf@gmail.com
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 shadow-lg border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Manuscript
                                        Templates</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-gray-300">To help ensure correct formatting, please use the
                                        style files, which can be downloaded from the link below as templates for your
                                        submission. These include LaTeX and Word templates.</p>
                                    <div className="flex flex-wrap gap-4">
                                        <Button variant="outline"
                                                className="bg-gray-700 text-indigo-300 hover:bg-gray-600">
                                            <DownloadIcon className="mr-2 h-4 w-4"/>MS Word Template
                                        </Button>
                                        <Button variant="outline"
                                                className="bg-gray-700 text-indigo-300 hover:bg-gray-600">
                                            <DownloadIcon className="mr-2 h-4 w-4"/>LaTeX Template
                                        </Button>
                                        <Button variant="outline"
                                                className="bg-gray-700 text-indigo-300 hover:bg-gray-600">
                                            <Link href="https://www.ieee.org/conferences/publishing/templates.html"
                                                  className="text-indigo-300 no-underline"
                                                  target={'_blank'}
                                            >
                                                IEEE Conference Templates
                                            </Link>
                                        </Button>
                                    </div>
                                    <p className="mt-4 text-gray-300">Violations of any of the above paper
                                        specifications may result in rejection of your paper. Please note that the LaTeX
                                        template does not allow for keywords. If you are using the Latex template, do
                                        not include keywords in your paper.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}