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
        <div className="relative w-full flex items-center justify-end overflow-hidden p-2 sm:p-5">
            <div className="relative w-full max-w-5xl h-[280px] sm:h-56 md:h-64 lg:h-72">
                <motion.div
                    variants={imageVariants}
                    initial={{ rotate: 10, zIndex: 1 }}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    transition={{ duration: 0.2 }}
                    className="absolute top-2 sm:top-4 left-8 sm:left-0 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img1}
                        alt="Conference image 1"
                        width={256}
                        height={160}
                        className="rounded-lg object-cover w-60 h-40 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40"
                    />
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial={{ rotate: -8, zIndex: 1 }}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    transition={{ duration: 0.2 }}
                    className="absolute top-16 sm:top-5 left-12 sm:left-24 md:left-32 lg:left-40 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img2}
                        alt="Conference image 2"
                        width={256}
                        height={160}
                        className="rounded-lg object-cover w-60 h-40 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40"
                    />
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial={{ rotate: 3, zIndex: 1 }}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    transition={{ duration: 0.2 }}
                    className="absolute top-32 sm:top-12 md:top-16 lg:top-20 left-16 sm:left-12 md:left-16 lg:left-20 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img3}
                        alt="Conference image 3"
                        width={256}
                        height={160}
                        className="rounded-lg object-cover w-60 h-40 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40"
                    />
                </motion.div>
            </div>
        </div>
    );
}

