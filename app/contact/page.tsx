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
        className="group relative bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
        <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 ring-2 ring-primary/10">
                <AvatarFallback className="text-lg bg-primary/10 text-primary font-semibold">
                    {info.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <h3 className="text-xl font-semibold">{info.name}</h3>
                <p className="text-sm text-muted-foreground">{info.position}</p>
                <Badge variant="info" className="mt-1">
                    {info.department}
                </Badge>
            </div>
        </div>

        <div className="mt-4 space-y-3">
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
        className="flex items-center gap-3 group/item"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <div className="p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
            <Icon className="w-4 h-4 text-blue-400" />
        </div>
        {href ? (
            <a
                href={href}
                className="text-sm hover:text-primary transition-colors"
            >
                {content}
            </a>
        ) : (
            <span className="text-sm">{content}</span>
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

