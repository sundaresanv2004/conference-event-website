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


export default function SkeletonTwo({img1, img2, img3}: ImageCardProps) {
    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };

    return (
        <div className="relative w-full flex items-center justify-center overflow-hidden p-5">
            <div className="relative w-full max-w-5xl h-72">
                <motion.div
                    variants={imageVariants}
                    initial={{ rotate: 20 }}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    className="absolute top-5 left-0 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img1}
                        alt="bali images"
                        width={256}
                        height={160}
                        className="rounded-lg object-cover w-64 h-40"
                    />
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial={{ rotate: -15 }}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    className="absolute top-6 left-40 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img2}
                        alt="bali images"
                        width={256}
                        height={160}
                        className="rounded-lg object-cover w-64 h-40"
                    />
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial={{ rotate: 5 }}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    className="absolute top-24 left-20 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img3}
                        alt="bali images"
                        width={256}
                        height={160}
                        className="rounded-lg object-cover w-64 h-40"
                    />
                </motion.div>
            </div>
        </div>
    );
}