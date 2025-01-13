'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export default function Hero() {

    return (
        <div className="relative w-full min-h-screen overflow-hidden" id="home">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-hero-img"
                style={{
                    backgroundAttachment: 'fixed'
                }}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                                ICDICI 2025
                            </span>
                        </h1>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                            6th International Conference on
                        </p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white">
                            Data Intelligence and Cognitive Informatics
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                            <div className="flex items-center text-white">
                                <Calendar className="w-6 h-6 mr-2 text-blue-400" />
                                <span className="text-lg">February 1-3, 2025</span>
                            </div>
                            <div className="flex items-center text-white">
                                <MapPin className="w-6 h-6 mr-2 text-blue-400" />
                                <span className="text-lg">Sathyabama University, Chennai</span>
                            </div>
                        </div>
                        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
                            Join us for cutting-edge research presentations, workshops, and networking
                            opportunities in the fields of AI, data science, and cognitive computing.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link href="/registration">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Register Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/#about">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-transparent hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-8 border-2 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

