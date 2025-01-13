'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { StaticImageData } from 'next/image'

interface ImageCardProps {
    img1: StaticImageData | string;
    img2: StaticImageData | string;
    img3: StaticImageData | string;
}

export default function ImagesCard({img1, img2, img3}: ImageCardProps) {
    const imageVariants = {
        whileHover: {
            scale: 1.05,
            rotate: 0,
            zIndex: 1000,
            transition: { duration: 0.2 }
        },
        whileTap: {
            scale: 1.05,
            rotate: 0,
            zIndex: 1000,
            transition: { duration: 0.2 }
        },
    };

    return (
        <div className="relative w-full flex items-center justify-center overflow-hidden p-2 sm:p-5">
            <div className="relative w-full max-w-5xl h-56 sm:h-72 md:h-80 lg:h-96">
                <motion.div
                    variants={imageVariants}
                    initial={{ rotate: 20, zIndex: 1 }}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    transition={{ duration: 0.2 }}
                    className="absolute top-5 sm:top-6 left-2 sm:left-0 md:left-0 lg:left-0 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img1}
                        alt="Conference image 1"
                        width={256}
                        height={160}
                        className="rounded-lg object-cover w-48 h-36 sm:w-56 sm:h-40 md:w-64 md:h-44 lg:w-72 lg:h-48"
                    />
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial={{ rotate: -15, zIndex: 1 }}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    transition={{ duration: 0.2 }}
                    className="absolute top-6 sm:top-8 left-28 md:left-32 lg:left-40 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img2}
                        alt="Conference image 2"
                        width={256}
                        height={160}
                        className="rounded-lg object-cover w-48 h-36 sm:w-56 sm:h-40 md:w-64 md:h-44 lg:w-72 lg:h-48"
                    />
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial={{ rotate: 5, zIndex: 1 }}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    transition={{ duration: 0.2 }}
                    className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-12 sm:left-16 md:left-20 lg:left-24 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img3}
                        alt="Conference image 3"
                        width={256}
                        height={160}
                        className="rounded-lg object-cover w-48 h-36 sm:w-56 sm:h-40 md:w-64 md:h-44 lg:w-72 lg:h-48"
                    />
                </motion.div>
            </div>
        </div>
    );
}

