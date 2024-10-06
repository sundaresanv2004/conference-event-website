"use client"

import { useEffect, useState } from "react"
import { motion, useAnimate } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/shared"
import { ChevronUp } from "lucide-react"
import { committeeData } from '@/constants'

const technicalProgramChairs = [
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
]

const technicalProgramCommittee = [
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
]

interface CommitteeMember {
    name: string
    title: string
    institution: string
}

const AnimatedCard = ({ member, index }: { member: CommitteeMember; index: number }) => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate(scope.current, { opacity: [0, 1], y: [50, 0] }, { delay: index * 0.1, duration: 0.5 })
    }, [animate, index, scope])

    return (
        <motion.div
            ref={scope}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-900 border-2 border-indigo-300 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                    <CardTitle className="text-xl font-bold text-center">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="text-center"
                    >
                        <p className="text-indigo-700 font-semibold mb-2">{member.title}</p>
                        <p className="text-sm text-indigo-600">{member.institution}</p>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default function ConferenceCommittee() {
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <main className="bg-blue_bg">
            <Navbar />
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-20">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        className="text-5xl font-extrabold text-center mb-16"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Conference Committee
                    </motion.h1>

                    {committeeData.map((section, sectionIndex) => (
                        <motion.section
                            key={section.title}
                            className="mb-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 * sectionIndex, duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-10">{section.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.members.map((member, index) => (
                                    <AnimatedCard key={index} member={member} index={index} />
                                ))}
                            </div>
                        </motion.section>
                    ))}

                    <motion.section
                        className="mb-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-10">Technical Program Chairs</h2>
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
                            {technicalProgramChairs.map((chair, index) => (
                                <div key={index} className="mb-4 last:mb-0">
                                    <p className="font-semibold">{chair.name}</p>
                                    <p>{chair.affiliation}</p>
                                    {chair.role && <p className="text-sm italic text-gray-300">{chair.role}</p>}
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        className="mb-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-10">Technical Program Committee</h2>
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
                            {technicalProgramCommittee.map((member, index) => (
                                <div key={index} className="mb-4 last:mb-0">
                                    <p className="font-semibold">{member.name}</p>
                                    <p>{member.affiliation}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>

            {showBackToTop && (
                <motion.div
                    className="fixed bottom-8 right-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <Button
                        onClick={scrollToTop}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg"
                    >
                        <ChevronUp size={24} />
                    </Button>
                </motion.div>
            )}
        </main>
    )
}