import React from 'react'
import {BackgroundBeams} from "@/components/ui/background-beams";
import {TracingBeam} from "@/components/ui/tracing-beam";
import Countdown from "@/components/shared/Countdown";
import DateComponent from "@/components/shared/Dates";
import About from "@/components/shared/About";

const AboutSection = () => {
    return (
        <div className="w-full rounded-md relative flex flex-col items-center justify-center antialiased">
            <div className="absolute top-0 inset-x-0 h-100 bg-gradient-to-b from-black via-[#090b0f] to-transparent w-full"/>
            <TracingBeam>
                <div id="about">
                    <Countdown/>
                    <About/>
                </div>
                <div id={"importantDates"}>
                    <DateComponent/>
                </div>
            </TracingBeam>
            <BackgroundBeams/>
        </div>
    )
}

export default AboutSection;

