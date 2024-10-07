import Image from "next/image"
import {College_Logo, IEEE_Logo, IEEECSL_Logo} from '@/public/assets/images'

export default function Sponsors() {
    const sponsors = [
        // { name: "Sponsor 1", logo: College_Logo },
        { name: "Sponsor 2", logo: IEEE_Logo },
        { name: "Sponsor 3", logo: IEEECSL_Logo },
    ]

    return (
        <div className={"max-w-7xl mx-auto"}>
            <section className="w-full py-12 md:py-24 lg:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Sponsors</h2>
                        <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We&apos;re proud to partner with these amazing companies who make our event possible.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
                        {sponsors.map((sponsor, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <Image
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} logo`}
                                    width={200}
                                    height={100}
                                    className="object-contain max-w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}