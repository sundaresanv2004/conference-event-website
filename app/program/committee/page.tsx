"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type CommitteeMember = {
    name: string;
    title?: string;
    institution?: string;
    affiliation?: string;
    role?: string;
}

type CommitteeSection = {
    title: string;
    members: CommitteeMember[];
}

const committeeData: CommitteeSection[] = [
    {
        title: "Chief Patrons",
        members: [
            {
                name: "Dr. Mariazeena Johnson",
                title: "CHANCELLOR",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
            {
                name: "Dr. Marie Johnson",
                title: "PRESIDENT",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
            {
                name: "Ms. Maria Catherine Johnson",
                title: "VICE PRESIDENT",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
        ],
    },
    {
        title: "Patrons",
        members: [
            {
                name: "Dr. T. Sasipraba",
                title: "VICE CHANCELLOR",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
        ],
    },
    {
        title: "Convenors",
        members: [
            {
                name: "Dr. T. Sasikala",
                title: "DEAN, SCHOOL OF COMPUTING",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
            {
                name: "Dr. S. Vigneshwari",
                title: "HEAD OF THE DEPARTMENT (Specialisation)",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
        ],
    },
    {
        title: "Technical Program Chairs",
        members: [
            {
                name: "Dr. Jinsong Wu",
                affiliation: "University of Chile, Chile.",
                role: "Big Data Technical Committee Chair, IEEE Communication Society.",
            },
            {
                name: "Pr. Pascal Lorenz",
                affiliation: "Professor, University of Haute Alsace, France.",
                role: "Satellite & Space Communications Technical Committee Chair, IEEE Communication Society.",
            },
            {
                name: "Dr. M S Mekala",
                affiliation: "Robert Gordon University, United Kingdom.",
                role: "Senior Member IEEE",
            },
            {
                name: "Dr. I. Jeena Jacob",
                affiliation: "GITAM University, Bangalore, India.",
            },
            {
                name: "Dr. R. Karthik Ganesh",
                affiliation: "SCAD College of Engineering and Technology, India.",
            },
            {
                name: "Prof. Giovanni Giambene",
                affiliation: "Professor, Faculty of Engineering, University of Siena, Italy.",
            },
        ],
    },
    {
        title: "Technical Program Committee",
        members: [
            {
                name: "Dr. Huaming Wu",
                affiliation: "Tianjin University, China",
            },
            {
                name: "Dr. Hend Galal Eldeen",
                affiliation: "Professor, Mohamed Ali Hassan Ain Shams University, Egypt.",
            },
            {
                name: "Dr. Antonio Sarasa",
                affiliation: "Professor, Cabezuelo Complutense University of Madrid, Spain.",
            },
        ],
    },
]

const MemberCard = ({ member }: { member: CommitteeMember }) => {
    return (
        <div className="group bg-gradient-to-br from-[#1c1f26] to-[#2c3038] p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 hover:border-blue-400 transition-all duration-300 border border-blue-500/20">
            <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16 border-2 border-blue-500">
                    <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                    <AvatarFallback className="text-lg font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                    {member.title && <p className="text-sm text-blue-300 mb-1">{member.title}</p>}
                    {member.institution && <p className="text-sm text-gray-400 mb-1">{member.institution}</p>}
                    {member.affiliation && <p className="text-sm text-gray-300 mb-1">{member.affiliation}</p>}
                    {member.role && <p className="text-sm text-blue-400 italic">{member.role}</p>}
                </div>
            </div>
        </div>
    )
}

const CommitteeSection = ({ section }: { section: CommitteeSection }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.2 }}
            className="mb-12"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400 flex items-center">
                <span className="bg-blue-500 w-2 h-8 mr-3"></span>
                {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.members.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
        </motion.div>
    )
}

export default function ConferenceCommittee() {
    return (
        <div className="min-h-screen pt-20 sm:pt-24 my-6">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Conference Committee
            </motion.h1>

            <div className="max-w-7xl mx-auto space-y-16">
                {committeeData.map((section, index) => (
                    <CommitteeSection key={index} section={section} />
                ))}
            </div>
        </div>
    )
}

