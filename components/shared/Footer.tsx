import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { navLinks } from '@/constants';

const Footer = () => {
    const mainLinks = navLinks.filter(link => !link.subItems).slice(0, 4);

    return (
        <footer className="relative text-white">
            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">ICDICI 2025</h3>
                        <p className="mb-4">Advancing the frontiers of Data Intelligence and Cognitive Informatics</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul>
                            {mainLinks.map((link) => (
                                <li key={link.id} className="mb-2">
                                    <Link href={link.id} className="hover:text-blue-300">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-300"><Facebook size={24} /></a>
                            <a href="#" className="hover:text-blue-300"><Twitter size={24} /></a>
                            <a href="#" className="hover:text-blue-300"><Instagram size={24} /></a>
                            <a href="#" className="hover:text-blue-300"><Linkedin size={24} /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-8 pt-8 text-center">
                    <p>&copy; 2025 ICDICI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

