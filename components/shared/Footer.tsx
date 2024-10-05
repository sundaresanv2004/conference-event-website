import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {navLinks} from "@/constants";
import Image from "next/image";
import {College_Logo} from "@/public/assets/images";


export default function Footer() {
    return (
        <footer className="bg-blue_bg text-primary-foreground">
            <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
                <div className="flex flex-col space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
                    <div className="flex flex-col items-center lg:items-start space-y-4">
                        <a href="https://www.sathyabama.ac.in/" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <Image
                                src={College_Logo}
                                alt="Sathyabama Logo"
                                width={224}
                                height={56}
                                className="w-36 sm:w-48 md:w-56"
                            />
                        </a>
                        <p className="text-sm text-white/70 text-center lg:text-left max-w-xs">
                            Empowering minds, fostering innovation, and shaping the future through education and research.
                        </p>
                    </div>
                    <nav className="w-full lg:w-auto">
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center lg:justify-items-end">
                            {navLinks.map((nav) => (
                                <li key={nav.id} className="w-full sm:w-auto">
                                    <Button variant="link" className="w-full sm:w-auto text-sm md:text-base">
                                        <Link href={nav.id}>{nav.title}</Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <hr className="my-8 border-white/20" />

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-xs sm:text-sm text-white/70 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Sathyabama University. All Rights Reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-white/80">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-white/80">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-white/80">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}