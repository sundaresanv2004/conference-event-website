import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">ICDICI 2025</h3>
                        <p className="text-gray-400 mb-4">
                            6th International Conference on Data Intelligence and Cognitive Informatics
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/program" className="text-gray-400 hover:text-white transition-colors">Program</Link></li>
                            <li><Link href="/registration" className="text-gray-400 hover:text-white transition-colors">Registration</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-2">
                            <p className="flex items-center text-gray-400">
                                <Mail className="mr-2 h-5 w-5" />
                                <a href="mailto:icdici@example.com" className="hover:text-white transition-colors">icdici@example.com</a>
                            </p>
                            <p className="flex items-center text-gray-400">
                                <Phone className="mr-2 h-5 w-5" />
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} ICDICI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

