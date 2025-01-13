'use client'

import { MapPin, Globe, Clock, Calendar, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from 'framer-motion'

const VenuePage = () => {
    return (
        <main className="min-h-screen pt-20 sm:pt-24 my-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Conference Venue
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <Card className="bg-white/10 backdrop-blur-lg border-gray-200/20 shadow-xl h-full">
                            <CardHeader>
                                <CardTitle className="text-xl sm:text-2xl font-bold text-white">Sathyabama Centre for Advanced Studies (SCAS)</CardTitle>
                                <CardDescription className="text-sm sm:text-base text-gray-300">
                                    Sathyabama Institute of Science and Technology
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 sm:space-y-4">
                                <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-200">
                                    <MapPin className="text-blue-300 flex-shrink-0"/>
                                    <span>Kamaraj Nagar, Semmancheri, Chennai, Tamil Nadu 600119</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Globe className="text-blue-300 flex-shrink-0"/>
                                    <a href="https://www.sathyabama.ac.in"
                                       className="text-sm sm:text-base text-blue-300 hover:text-blue-100 transition-colors duration-200"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    >
                                        www.sathyabama.ac.in
                                    </a>
                                </div>
                                <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-200">
                                    <Clock className="text-blue-300 flex-shrink-0"/>
                                    <span>Open 24 hours</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-200">
                                    <Calendar className="text-blue-300 flex-shrink-0"/>
                                    <span>Conference Dates: February 1-2, 2025</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <a href="https://maps.app.goo.gl/cotK4JZDhHVV3mTw8" className="w-full"
                                   target="_blank" rel="noopener noreferrer">
                                    <Button
                                        className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200"
                                    >
                                        Get Directions
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="h-full"
                    >
                        <Card className="bg-white/10 backdrop-blur-lg border-gray-200/20 shadow-xl h-full">
                            <CardContent className="p-0 h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7453402099493!2d80.22526457486731!3d12.871319190936682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b0e1618d76d%3A0xc5be1e1462ec6d0d!2sSathyabama%20Centre%20for%20Advanced%20Studies!5e0!3m2!1sen!2sin!4v1697438158180!5m2!1sen!2sin"
                                    className="w-full h-[300px] md:h-full rounded-xl"
                                    style={{border: 0}}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps - Sathyabama Centre for Advanced Studies"
                                ></iframe>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
                <motion.div
                    className="mt-8 sm:mt-12"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                >
                    <Separator className="my-6 sm:my-8 bg-gray-200/20" />
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">About the Venue</h2>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        Sathyabama Institute of Science and Technology (SIST) provides a perfect setting for our conference.
                        With its modern facilities and convenient location, it offers an ideal environment for learning, networking,
                        and collaboration. The venue is equipped with state-of-the-art presentation technology and comfortable seating
                        to ensure a productive and enjoyable experience for all attendees.
                    </p>
                </motion.div>
            </div>
        </main>
    )
}

export default VenuePage

