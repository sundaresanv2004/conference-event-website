'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FileTextIcon, CreditCard, Copyright, CheckCircle, AlertCircle } from 'lucide-react'
import { Navbar } from "@/components/shared"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const guidelines = [
    "Only one online registration and payment is permitted for one accepted paper. Individual author registration not required.",
    "Registration should be done preferably through desktops/laptops and not mobile phones/tabs.",
    "Registration is complete only after final payment.",
    "Once the online payment is successfully processed an automated email will be generated from the payment gateway and sent to the registered e-mail address of the delegates.",
    "It is mandatory for all undergraduate and postgraduate students (including full time PhD scholars) to upload a bonafide letter attested by head of the department/institution or ID card to proceed with the student registration fee.",
    "It is mandatory to register for the conference in order to participate in the oral/poster presentation followed by publication. For that, after completing the payment, send your Final Paper, Copyright Form and Payment Proof to the Conference Email (icdici.conf@gmail.com).",
    "Refund policy: Refund will not be considered after registration. Gateway/ transaction charges will be borne by the delegates and are non-refundable.",
    "Spot registration not available.",
    "In case of any queries, please visit our contact page for assistance."
]

const registrationFees = [
    { type: "Indian Authors", ieeeComSocMember: "8,750 INR", ieeeMember: "9,250 INR", nonMember: "9,750 INR" },
    { type: "Indian Listener", ieeeComSocMember: "6,000 INR", ieeeMember: "6,500 INR", nonMember: "7,000 INR" },
    { type: "Foreign Authors", ieeeComSocMember: "140 USD", ieeeMember: "150 USD", nonMember: "160 USD" }
]

const formSchema = z.object({
    articleTitle: z.string().min(2, {
        message: "Article title must be at least 2 characters.",
    }),
    authorsName: z.string().min(2, {
        message: "Authors name must be at least 2 characters.",
    }),
    articleId: z.string().min(2, {
        message: "Article ID must be at least 2 characters.",
    }),
    authorEmail: z.string().email({
        message: "Please enter a valid email address.",
    }),
    confirmInfo: z.boolean().refine(value => value === true, {
        message: "You must confirm that the information is correct.",
    }),
})

export default function RegistrationPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            articleTitle: "",
            authorsName: "",
            articleId: "",
            authorEmail: "",
            confirmInfo: false,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        // Here you would typically send the form data to your server
    }

    return (
        <main className="bg-blue_bg min-h-screen">
            <Navbar />
            <div className="container mx-auto py-8 px-4 mt-16 sm:py-12 sm:px-6">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Conference Registration
                </motion.h1>

                <Tabs defaultValue="guidelines" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8 rounded-xl p-1 bg-gray-800">
                        <TabsTrigger
                            value="guidelines"
                            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm"
                        >
                            <FileTextIcon className="mr-2 h-4 w-4" />
                            Guidelines
                        </TabsTrigger>
                        <TabsTrigger
                            value="fees"
                            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm"
                        >
                            <CreditCard className="mr-2 h-4 w-4" />
                            Registration Fees
                        </TabsTrigger>
                        <TabsTrigger
                            value="copyright"
                            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm"
                        >
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
                            <Card className="bg-gray-800 shadow-lg mt-4">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Registration Guidelines</CardTitle>
                                    <CardDescription className="text-gray-300">Authors of the accepted papers are instructed to kindly go through the guidelines before registering to the conference.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
                                        {guidelines.map((guideline, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                                                <span>
                                                    {index === guidelines.length - 1 ? (
                                                        <>
                                                            In case of any queries, please visit our{' '}
                                                            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 underline">
                                                                contact page
                                                            </Link>{' '}
                                                            for assistance.
                                                        </>
                                                    ) : (
                                                        guideline
                                                    )}
                                                </span>
                                            </li>
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
                            <Card className="bg-gray-800 shadow-lg mt-4">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Registration Fees</CardTitle>
                                    <CardDescription className="text-gray-300">Select your registration type and proceed to payment.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[100px] sm:w-[200px] text-white">Type</TableHead>
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
                                    </div>
                                    <div className="bg-gray-700 rounded-lg p-4 flex items-center space-x-3 max-w-lg">
                                        <p className="text-indigo-100 text-sm text-center">
                                            <span className="font-semibold">Note:</span> Registration fee includes conference and publication fee.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-gray-300">Click on the link provided below for registration payment.</p>
                                        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200">
                                            Payment
                                        </Button>
                                    </div>
                                    <div className="text-gray-300">
                                        <p>All delegates must share a copy of transaction screenshot, copyright Form and Final Paper to the Conference Email (<a href="mailto:icdici.conf@gmail.com" className="text-indigo-400 hover:text-indigo-300">icdici.conf@gmail.com</a>) to confirm the registration.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                    <TabsContent value="copyright">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <Card className="bg-gray-800 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">Submission Instructions</CardTitle>
                                    <CardDescription className="text-gray-300">Follow these steps to submit the online copyright form:</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        {[
                                            "Enter the Article ID (without spaces). The Article ID is mentioned in the acceptance letter.",
                                            'After clicking "Submit," you will be redirected to the IEEE Copyright submission page.',
                                            "In the final step, add the corresponding author and submit the Copyright form.",
                                            "Download the e-copyright PDF and send the form to the conference email ID."
                                        ].map((step, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 mt-0.5">
                                                    <CheckCircle className="h-5 w-5 text-indigo-500" />
                                                </div>
                                                <p className="text-sm text-gray-300">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="text-indigo-300 font-semibold mb-2">Important Note:</h4>
                                        <p className="text-sm text-gray-300">
                                            Ensure all information is accurate before submission. The copyright form is a crucial document for the publication process.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-indigo-300 text-xl sm:text-2xl">IEEE Ecopyright Form</CardTitle>
                                    <CardDescription className="text-gray-300">Please fill out the copyright information</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <FormField
                                                control={form.control}
                                                name="articleTitle"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-white">Article Title</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter article title" {...field} className="bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="authorsName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-white">Authors Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter authors name" {...field} className="bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500" />
                                                        </FormControl>
                                                        <FormMessage />

                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="articleId"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-white">Article ID</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter article ID" {...field} className="bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="authorEmail"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-white">Author Email</FormLabel>
                                                        <FormControl>
                                                            <Input type="email" placeholder="Enter author email" {...field}   className="bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="confirmInfo"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                            />
                                                        </FormControl>
                                                        <div className="space-y-1 leading-none">
                                                            <FormLabel className="text-white">
                                                                I confirm that the entered information is correct
                                                            </FormLabel>
                                                        </div>
                                                    </FormItem>
                                                )}
                                            />
                                            <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200">
                                                Submit
                                            </Button>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}