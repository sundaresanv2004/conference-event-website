import React from "react";
import {one_png, two_png, three_png} from '../../public/images'
import ImagesCard from "@/components/shared/ImagesCard";

export default function About() {
    return (
        <div className="text-white max-sm:pl-5">
            <div className="max-w-7xl mx-auto px-4 pt-16 sm:pt-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                    <div className="w-full lg:w-2/3 space-y-6">
                        <div className="w-fit relative">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-4">
                                About the Conference
                            </h1>
                            <div
                                className="absolute inset-x-60 bottom-0 left-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[5px] w-1/4 blur-sm"/>
                            <div
                                className="absolute inset-x-60 bottom-0 left-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4"/>
                            <div
                                className="absolute inset-x-20 bottom-0 left-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent h-[2px] w-3/4 blur-sm"/>
                            <div
                                className="absolute inset-x-20 bottom-0 left-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent h-px w-3/4"/>
                        </div>
                        <p className="text-sm sm:text-md lg:text-lg text-gray-300 leading-relaxed">
                            In this era of big data, data analysis and management is emerging as a significant
                            research field with a vision to manage the data from an information perspective.
                            Recent, the data intelligence domain combines with the increasing efforts of
                            Artificial Intelligence, Machine Learning, Deep Learning and Cognitive science to study
                            and develop a deeper understanding of the information processing systems.
                            This 6th International Conference on Data Intelligence and Cognitive Informatics
                            [ICDCI 2025] welcomes researchers, academicians, scholars, and industrialists across the
                            globe to join the international research initiative on data intelligence and cognitive
                            informatics towards investigating the evolving information processing systems, and for
                            the development of next-generation cognitive informatics and communication technologies.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <ImagesCard
                            img1={one_png}
                            img2={two_png}
                            img3={three_png}
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16">
                    <div className="w-full lg:w-2/3 space-y-6">
                        <div className="w-fit relative">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-4">
                                Sathyabama
                            </h1>
                            <div className="absolute inset-x-20 bottom-0 left-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent h-[2px] w-3/4 blur-sm"/>
                            <div className="absolute inset-x-20 bottom-0 left-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent h-px w-3/4"/>
                            <div className="absolute inset-x-60 bottom-0 left-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[5px] w-1/4 blur-sm"/>
                            <div className="absolute inset-x-60 bottom-0 left-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4"/>
                        </div>
                        <p className="text-sm sm:text-md lg:text-lg text-gray-300 leading-relaxed">
                        Sathyabama Institute of Science and Technology (SIST), formerly Sathyabama University,
                            is a private, STEM-intensive, multi-disciplinary deemed university in Chennai, Tamil Nadu,
                            India. Established in 1987, it is accredited with A++ grade by the National Assessment and
                            Accreditation Council (NAAC) and Category 1 University by the University Grants Commission (UGC),
                            the highest ratings by both boards.
                        </p>
                        <p className="text-sm sm:text-md lg:text-lg text-gray-300 leading-relaxed">
                            It is also an ISO 9001:2008 certified institution,
                            and has the distinction of being one of the very few universities in India to have
                            successfully built and launched its own space satellite, in association with ISRO.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <ImagesCard
                            img1={one_png}
                            img2={two_png}
                            img3={three_png}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

