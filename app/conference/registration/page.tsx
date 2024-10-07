'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { FileTextIcon, CreditCard, Copyright } from 'lucide-react'
import { Navbar } from "@/components/shared"

const guidelines = [
    "Only one online registration and payment is permitted for one accepted paper. Individual author registration not required.",
    "Registration should be done preferably through desktops/laptops and not mobile phones/tabs.",
    "Registration is complete only after final payment.",
    "Once the online payment is successfully processed an automated email will be generated from the payment gateway and sent to the registered e-mail address of the delegates.",
    "It is mandatory for all undergraduate and postgraduate students (including full time PhD students) to upload a bonafide letter attested by head of the department/institution or ID card to proceed with the student registration fee.",
    "It is mandatory to register for the conference in order to participate in the oral/poster presentation followed by publication. For that, after completing the payment, send your Final Paper, Copyright Form and Payment Proof to the Conference Email (icdici.conf@gmail.com).",
    "Refund policy: Refund will not be considered after registration. Gateway/ transaction charges will be borne by the delegates and are non-refundable.",
    "Spot registration not available.",
    "In case of any queries, write to icdici.conf@gmail.com or call +91 9600368297. Enquiries through email will be preferred."
]

const registrationFees = [
    { type: "Indian Authors", ieeeMember: "9,250 INR", ieeeComSocMember: "8,750 INR", nonMember: "9,750 INR" },
    { type: "Indian Listener", ieeeMember: "6,500 INR", ieeeComSocMember: "6,000 INR", nonMember: "7,000 INR" },
    { type: "Foreign Authors", ieeeMember: "150 USD", ieeeComSocMember: "140 USD", nonMember: "160 USD" }
]

export default function RegistrationPage() {
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
                    Conference Registration
                </motion.h1>

                <Tabs defaultValue="guidelines" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 rounded-xl p-1">
                        <TabsTrigger value="guidelines" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
                            <FileTextIcon className="mr-2 h-4 w-4" />
                            Guidelines
                        </TabsTrigger>
                        <TabsTrigger value="fees" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Registration Fees
                        </TabsTrigger>
                        <TabsTrigger value="copyright" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
                            <Copyright className="mr-2 h-4 w-4" />
                            IEEE Ecopyright
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="guidelines">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-gray-800 shadow-lg">
                                <CardHeader>
                                    <CardTitle>Registration Guidelines</CardTitle>
                                    <CardDescription>Please read the following guidelines carefully before registering.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                        {guidelines.map((guideline, index) => (
                                            <li key={index}>{guideline}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                    <TabsContent value="fees">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-gray-800 shadow-lg">
                                <CardHeader>
                                    <CardTitle>Registration Fees</CardTitle>
                                    <CardDescription>Select your registration type and proceed to payment.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableCaption className="text-gray-300">Registration fee includes conference and publication fee.</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[200px] text-white">Type</TableHead>
                                                <TableHead className="text-white">IEEE ComSoc Member</TableHead>
                                                <TableHead className="text-white">IEEE Member</TableHead>
                                                <TableHead className="text-white">Non IEEE Member</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {registrationFees.map((fee, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium text-white">{fee.type}</TableCell>
                                                    <TableCell className="text-gray-300">{fee.ieeeComSocMember}</TableCell>
                                                    <TableCell className="text-gray-300">{fee.ieeeMember}</TableCell>
                                                    <TableCell className="text-gray-300">{fee.nonMember}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        Proceed to Payment
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </TabsContent>
                    <TabsContent value="copyright">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-gray-800 shadow-lg">
                                <CardHeader>
                                    <CardTitle>IEEE Ecopyright Submission</CardTitle>
                                    <CardDescription>Submit your copyright information for the conference proceedings.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="articleTitle">Article Title</Label>
                                        <Input id="articleTitle" className="bg-gray-700 text-gray-100" />
                                    </div>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="authorName">Authors Name</Label>
                                        <Input id="authorName" className="bg-gray-700 text-gray-100" />
                                    </div>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="articleId">Article Id</Label>
                                        <Input id="articleId" className="bg-gray-700 text-gray-100" />
                                    </div>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="authorEmail">Author Email</Label>
                                        <Input id="authorEmail" type="email" className="bg-gray-700 text-gray-100" />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                                        >
                                            I agree to the IEEE copyright terms and conditions
                                        </label>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" className="w-full">
                                        Submit Copyright Form
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}