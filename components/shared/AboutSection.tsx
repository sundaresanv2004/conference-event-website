'use client'

import React from 'react'
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TracingBeam } from "@/components/ui/tracing-beam";
import DateComponent from "@/components/shared/Dates";
import About from "@/components/shared/About";

const AboutSection = () => {
    return (
        <div className="w-full relative flex flex-col items-center justify-center antialiased">
            <div className="absolute inset-0 overflow-hidden">
                <BackgroundBeams />
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TracingBeam>
                    <div id="about">
                        <About/>
                    </div>
                    <div id="importantDates" className="py-9 sm:py-6">
                        <DateComponent/>
                    </div>
                </TracingBeam>
            </div>
        </div>
    )
}

export default AboutSection;
