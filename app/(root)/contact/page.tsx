'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const contactInfo = [
    {
        name: "Dr. K. Paul Joshua",
        position: "Assistant Professor",
        department: "Dept. of CSE",
        institution: "SCAS",
        email: "icdici.conf@gmail.com",
        phone: "+91-96003 68297"
    },
    {
        name: "Dr. K. Paul Joshua",
        position: "Assistant Professor",
        department: "Dept. of CSE",
        institution: "SCAS",
        email: "icdici.conf@gmail.com",
        phone: "+91-96003 68297"
    },
]

interface ContactInfo {
    name: string
    position: string
    department: string
    institution: string
    email: string
    phone: string
}

const ContactCard: React.FC<{ info: ContactInfo }> = ({ info }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0 }}
        className="group bg-gradient-to-br from-[#1c1f26] to-[#2c3038] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 hover:border-blue-400 transition-all duration-300 border border-blue-500/20"
    >
        <div className="flex items-start gap-3 sm:gap-4">
            <Avatar className="h-12 w-12 sm:h-16 sm:w-16 ring-2 ring-primary/10 transition-all duration-300 group-hover:ring-primary/30">
                <AvatarFallback className="text-base sm:text-lg bg-primary/10 text-primary font-semibold">
                    {info.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>
            <div className="space-y-0.5 sm:space-y-1">
                <h3 className="text-lg sm:text-xl font-semibold">{info.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{info.position}</p>
                <Badge variant="info" className="mt-0.5 sm:mt-1 text-xs sm:text-sm">
                    {info.department}
                </Badge>
            </div>
        </div>

        <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
            <div className="h-px bg-gray-500" />
            <ContactItem icon={MapPin} content={info.institution} />
            <ContactItem icon={Mail} content={info.email} href={`mailto:${info.email}`} />
            <ContactItem icon={Phone} content={info.phone} href={`tel:${info.phone}`} />
        </div>
    </motion.div>
)

const ContactItem: React.FC<{
    icon: React.ElementType;
    content: string;
    href?: string;
}> = ({ icon: Icon, content, href }) => (
    <motion.div
        className="flex items-center gap-2 sm:gap-3 group/item"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
            <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
        </div>
        {href ? (
            <a
                href={href}
                className="text-xs sm:text-sm hover:text-primary transition-colors"
            >
                {content}
            </a>
        ) : (
            <span className="text-xs sm:text-sm">{content}</span>
        )}
    </motion.div>
)

export default function Contact() {
    return (
        <main className="min-h-screen pt-20 sm:pt-24 my-6">
            <div className="container px-4 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 mb-12"
                >
                    <h1 className="text-4xl font-bold sm:text-5xl">
                        Contact Us
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Connect directly with our faculty members for immediate assistance
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {contactInfo.map((info, index) => (
                        <ContactCard key={index} info={info} />
                    ))}
                </div>
            </div>
        </main>
    )
}

