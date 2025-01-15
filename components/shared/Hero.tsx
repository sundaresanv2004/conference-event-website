'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from 'lucide-react';


export default function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden" id="home">

            <div
                className="w-full h-screen bg-hero-img bg-no-repeat bg-center bg-cover flex items-center justify-center"
                style={{backgroundAttachment: 'fixed'}}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

                <div
                    className="relative z-20 mt-4 flex items-center justify-center min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                            className="text-center"
                        >
                            <motion.h1
                                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 sm:mb-6 leading-tight"
                                initial={{scale: 0.9, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                            >
                                ICDICI 2025
                            </motion.h1>
                            <motion.div
                                className="space-y-2 mb-4 sm:mb-8"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.4}}
                            >
                                <p className="text-base md:text-2xl lg:text-3xl font-bold text-white">
                                    6th International Conference on
                                </p>
                                <p className="text-base md:text-2xl lg:text-3xl font-bold text-white">
                                    Data Intelligence and Cognitive Informatics
                                </p>
                            </motion.div>

                            {/* Desktop version of date and location */}
                            <motion.div
                                className="hidden sm:flex flex-row justify-center items-center gap-6 mb-8"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.6}}
                            >
                                <motion.div
                                    className="flex items-center text-white bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 transition-all duration-300 hover:bg-white/20"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <Calendar className="w-6 h-6 mr-3 text-blue-400"/>
                                    <span className="text-lg font-semibold">February 1-3, 2025</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center text-white bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 transition-all duration-300 hover:bg-white/20"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <MapPin className="w-6 h-6 mr-3 text-blue-400"/>
                                    <span className="text-lg font-semibold">Sathyabama Institute of Science and Technology</span>
                                </motion.div>
                            </motion.div>

                            {/* Mobile version of date and location */}
                            <motion.div
                                className="sm:hidden space-y-3 mb-8"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.6}}
                            >
                                <motion.div
                                    className="flex items-center justify-center text-white bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5"
                                    whileTap={{scale: 0.95}}
                                >
                                    <Calendar className="w-5 h-5 mr-2 text-blue-400"/>
                                    <span className="text-sm font-semibold">February 1-3, 2025</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center justify-center text-white bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5"
                                    whileTap={{scale: 0.95}}
                                >
                                    <MapPin className="w-5 h-5 mr-2 text-blue-400"/>
                                    <span className="text-sm font-semibold">
                                    Sathyabama Institute of Science and Technology
                                </span>
                                </motion.div>
                            </motion.div>

                            <motion.p
                                className="text-sm md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-white bg-black/30 backdrop-blur-sm p-3 md:p-6 rounded-lg leading-relaxed"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.8}}
                            >
                                Join us for cutting-edge research presentations, workshops, and networking
                                opportunities in the fields of AI, data science, and cognitive computing.
                                Explore the latest advancements and connect with leading experts in the industry.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 1}}
                            >
                                <Link href="/registration" className="w-full sm:w-auto">
                                    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="w-full">
                                        <Button
                                            size="lg"
                                            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:shadow-lg"
                                        >
                                            Register Now
                                            <ArrowRight className="ml-2 h-5 w-5"/>
                                        </Button>
                                    </motion.div>
                                </Link>
                                <Link href="/#about" className="w-full sm:w-auto">
                                    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="w-full">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 border-2 border-white/50 rounded-full transition duration-300 ease-in-out transform hover:shadow-lg backdrop-blur-sm"
                                        >
                                            Learn More
                                        </Button>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

