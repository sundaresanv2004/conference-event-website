"use client"

import { motion } from "framer-motion"

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
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="group bg-gradient-to-br from-[#1c1f26] to-[#2c3038] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 hover:border-blue-400 transition-all duration-300 border border-blue-500/20">
            <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-white">{member.name}</h3>
                {member.title && <p className="text-xs sm:text-sm text-blue-300">{member.title}</p>}
                {member.institution && <p className="text-xs sm:text-sm text-gray-400">{member.institution}</p>}
                {member.affiliation && <p className="text-xs sm:text-sm text-gray-300">{member.affiliation}</p>}
                {member.role && <p className="text-xs sm:text-sm text-blue-400 italic">{member.role}</p>}
            </div>
        </motion.div>
    )
}

const CommitteeSection = ({section, index}: { section: CommitteeSection, index: number }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12"
        >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-blue-400 flex items-center">
                <span className="bg-blue-500 w-1.5 sm:w-2 h-6 sm:h-8 mr-2 sm:mr-3"></span>
                {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {section.members.map((member, memberIndex) => (
                    <MemberCard key={memberIndex} member={member}/>
                ))}
            </div>
        </motion.div>
    )
}

export default function ConferenceCommittee() {
    return (
        <div className="min-h-screen pt-20 sm:pt-24 my-6 md:pt-24 px-4 sm:px-6 md:px-8">
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Conference Committee
            </motion.h1>

            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
                {committeeData.map((section, index) => (
                    <CommitteeSection key={index} section={section} index={index} />
                ))}
            </div>
        </div>
    )
}

