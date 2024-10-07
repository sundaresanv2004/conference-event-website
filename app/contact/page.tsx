'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Award, Calendar } from 'lucide-react'
import { contactInfo } from '@/constants'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Navbar} from "@/components/shared";

interface ContactInfo {
    name: string
    position: string
    department: string
    institution: string
    email: string
    phone: string
    image?: string
    website?: string
    achievements?: string
    officeHours?: string
}

const ContactCard: React.FC<{ info: ContactInfo; index: number }> = ({ info, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full"
    >
        <Card className="h-full bg-gradient-to-br from-indigo-400 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-white">
                    <AvatarImage src={info.image} alt={info.name} />
                    <AvatarFallback className="text-lg font-bold">{info.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                    <CardTitle className="text-xl sm:text-2xl">{info.name}</CardTitle>
                    <p className="text-sm opacity-90">{info.position}</p>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="flex flex-col sm:flex-row items-center sm:items-start">
                    <MapPin className="w-5 h-5 mr-2 mb-1 sm:mb-0" />
                    <span className="text-center sm:text-left">{info.department}, {info.institution}</span>
                </p>
                <p className="flex flex-col sm:flex-row items-center sm:items-start">
                    <Mail className="w-5 h-5 mr-2 mb-1 sm:mb-0" />
                    <a href={`mailto:${info.email}`} className="hover:underline text-center sm:text-left">{info.email}</a>
                </p>
                <p className="flex flex-col sm:flex-row items-center sm:items-start">
                    <Phone className="w-5 h-5 mr-2 mb-1 sm:mb-0" />
                    <a href={`tel:${info.phone}`} className="hover:underline text-center sm:text-left">{info.phone}</a>
                </p>
                {info.website && (
                    <p className="flex flex-col sm:flex-row items-center sm:items-start">
                        <Globe className="w-5 h-5 mr-2 mb-1 sm:mb-0" />
                        <a href={info.website} target="_blank" rel="noopener noreferrer" className="hover:underline text-center sm:text-left">{info.website}</a>
                    </p>
                )}
                {info.achievements && (
                    <p className="flex flex-col sm:flex-row items-center sm:items-start">
                        <Award className="w-5 h-5 mr-2 mb-1 sm:mb-0" />
                        <span className="text-center sm:text-left">{info.achievements}</span>
                    </p>
                )}
                {info.officeHours && (
                    <p className="flex flex-col sm:flex-row items-center sm:items-start">
                        <Calendar className="w-5 h-5 mr-2 mb-1 sm:mb-0" />
                        <span className="text-center sm:text-left">Office Hours: {info.officeHours}</span>
                    </p>
                )}
            </CardContent>
        </Card>
    </motion.div>
)

export default function Contact() {
    return (
        <main>
            <Navbar />
            <div className="bg-blue_bg py-8 px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="max-w-7xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-8 sm:mb-16">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {contactInfo.map((info, index) => (
                            <ContactCard key={index} info={info} index={index}/>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    )
}