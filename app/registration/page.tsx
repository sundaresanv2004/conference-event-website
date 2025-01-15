'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileText, CheckCircle, AlertTriangle, CreditCard, Copyright } from 'lucide-react'
import Link from 'next/link'
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
        <div className="min-h-screen pt-20 sm:pt-24 my-6 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Conference Registration
                </motion.h1>

                <Tabs defaultValue="guidelines" className="space-y-8">
                    <TabsList className="w-full justify-start p-1 rounded-lg mb-8 flex flex-wrap gap-2">
                        <TabsTrigger value="guidelines" className="flex-grow data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            <FileText className="h-4 w-4 sm:mr-2" />
                            <span className="hidden sm:inline">Guidelines</span>
                        </TabsTrigger>
                        <TabsTrigger value="fees" className="flex-grow data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            <CreditCard className="h-4 w-4 sm:mr-2" />
                            <span className="hidden sm:inline">Registration Fees</span>
                        </TabsTrigger>
                        <TabsTrigger value="copyright" className="flex-grow data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            <Copyright className="h-4 w-4 sm:mr-2" />
                            <span className="hidden sm:inline">IEEE Ecopyright</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="guidelines">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-gray-800 border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-400">Registration Guidelines</CardTitle>
                                    <CardDescription className="text-gray-400">Please review the following guidelines before registering for the conference.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 text-sm">
                                        {guidelines.map((guideline, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                                                <span className="text-gray-300">
                                                    {index === guidelines.length - 1 ? (
                                                        <>
                                                            In case of any queries, please visit our{' '}
                                                            <Link href="/contact" className="text-blue-400 hover:underline">
                                                                contact page
                                                            </Link>{' '}
                                                            for assistance.
                                                        </>
                                                    ) : (
                                                        guideline
                                                    )}
                                                </span>
                                            </motion.li>
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
                            <Card className="bg-gray-800 border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-400">Registration Fees</CardTitle>
                                    <CardDescription className="text-gray-400">Select your registration type and proceed to payment.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto -mx-4">
                                        <div className="inline-block min-w-full py-2 align-middle">
                                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow className="bg-gray-900/50">
                                                            <TableHead className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-300 sm:pl-6">Type</TableHead>
                                                            <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">IEEE ComSoc Member</TableHead>
                                                            <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">IEEE Member</TableHead>
                                                            <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Non IEEE Member</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {registrationFees.map((fee, index) => (
                                                            <TableRow
                                                                key={index}
                                                                className={`
                                                                    ${index % 2 === 0 ? 'bg-gray-800/50' : 'bg-gray-900/50'}
                                                                    hover:bg-gray-700/50 transition-colors
                                                                `}
                                                            >
                                                                <TableCell className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-6">
                                                                    {fee.type}
                                                                </TableCell>
                                                                <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-200">
                                                                        {fee.ieeeComSocMember}
                                                                    </span>
                                                                </TableCell>
                                                                <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-200">
                                                                        {fee.ieeeMember}
                                                                    </span>
                                                                </TableCell>
                                                                <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-200">
                                                                        {fee.nonMember}
                                                                    </span>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 space-y-6">
                                        <Alert variant="default" className="bg-blue-900/50 border-blue-700">
                                            <AlertTriangle className="h-4 w-4 text-blue-400" />
                                            <AlertTitle className="text-blue-400">Note</AlertTitle>
                                            <AlertDescription className="text-gray-300">
                                                Registration fee includes conference and publication fee.
                                            </AlertDescription>
                                        </Alert>
                                        <Button className="w-full sm:w-auto">
                                            Proceed to Payment
                                        </Button>
                                        <p className="text-sm text-gray-400">
                                            All delegates must share a copy of transaction screenshot, copyright Form and Final Paper to the Conference Email (
                                            <a href="mailto:icdici.conf@gmail.com" className="text-blue-400 hover:underline">
                                                icdici.conf@gmail.com
                                            </a>
                                            ) to confirm the registration.
                                        </p>
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
                        >
                            <div className="grid gap-8 lg:grid-cols-2">
                                <Card className="bg-gray-800 border-gray-700">
                                    <CardHeader>
                                        <CardTitle className="text-2xl text-blue-400">Submission Instructions</CardTitle>
                                        <CardDescription className="text-gray-400">Follow these steps to submit the online copyright form:</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ol className="list-decimal list-inside space-y-4 text-sm text-gray-300">
                                            <li>Enter the Article ID (without spaces). The Article ID is mentioned in the acceptance letter.</li>
                                            <li>After clicking &#34;Submit,&#34; you will be redirected to the IEEE Copyright submission page.</li>
                                            <li>In the final step, add the corresponding author and submit the Copyright form.</li>
                                            <li>Download the e-copyright PDF and send the form to the conference email ID.</li>
                                        </ol>
                                        <Alert className="mt-6 bg-yellow-900/50 border-yellow-700">
                                            <AlertTriangle className="h-4 w-4 text-yellow-400" />
                                            <AlertTitle className="text-yellow-400">Important Note</AlertTitle>
                                            <AlertDescription className="text-gray-300">
                                                Ensure all information is accurate before submission. The copyright form is a crucial document for the publication process.
                                            </AlertDescription>
                                        </Alert>
                                    </CardContent>
                                </Card>
                                <Card className="bg-gray-800 border-gray-700">
                                    <CardHeader>
                                        <CardTitle className="text-2xl text-blue-400">IEEE Ecopyright Form</CardTitle>
                                        <CardDescription className="text-gray-400">Please fill out the copyright information</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                                <FormField
                                                    control={form.control}
                                                    name="articleTitle"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-gray-200">Article Title</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Enter article title"
                                                                    {...field}
                                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                />
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
                                                            <FormLabel className="text-gray-200">Authors Name</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Enter authors name"
                                                                    {...field}
                                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                />
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
                                                            <FormLabel className="text-gray-200">Article ID</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Enter article ID"
                                                                    {...field}
                                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                />
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
                                                            <FormLabel className="text-gray-200">Author Email</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    type="email"
                                                                    placeholder="Enter author email"
                                                                    {...field}
                                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                />
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
                                                                <FormLabel className="text-gray-200">
                                                                    I confirm that the entered information is correct
                                                                </FormLabel>
                                                            </div>
                                                        </FormItem>
                                                    )}
                                                />
                                                <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2">
                                                    Submit
                                                </Button>
                                            </form>
                                        </Form>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

