'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { Menu } from 'lucide-react'
import styles from "@/app/styles"
import { navLinks } from "@/constants"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false)

    const commonStyle = "transition ease-in-out duration-150 font-normal cursor-pointer text-md hover:scale-110"

    const handleScroll = () => {
        setScrolled(window.scrollY > 10)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-[#12141C] backdrop-blur-md' : 'bg-transparent'}`}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <nav className="w-full flex py-5 justify-center items-center">
                        <div className={"md:hidden"}>
                            <Sheet>
                                <SheetTrigger asChild className="flex-1">
                                    <a className="cursor-pointer ">
                                        <Menu className={"text-white"}/>
                                    </a>
                                </SheetTrigger>
                                <SheetContent side="left" className="bg-[#12141C] h-full w-[300px]">
                                    <SheetHeader>
                                        <SheetTitle className="text-start mb-9 text-white">
                                            Menu
                                        </SheetTitle>
                                    </SheetHeader>
                                    <Accordion type="single" collapsible className="w-full">
                                        {navLinks.map((nav) => (
                                            <AccordionItem value={nav.id} key={nav.id}>
                                                {nav.subItems ? (
                                                    <>
                                                        <AccordionTrigger className="text-white hover:no-underline">
                                                            {nav.title}
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <ul className="pl-4">
                                                                {nav.subItems.map((subItem) => (
                                                                    <li key={subItem.id} className="mb-2">
                                                                        <SheetClose asChild>
                                                                            <Link href={`/${nav.id}/${subItem.id}`} className="text-white hover:text-gray-300">
                                                                                {subItem.title}
                                                                            </Link>
                                                                        </SheetClose>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </AccordionContent>
                                                    </>
                                                ) : (
                                                    <AccordionTrigger className="text-white hover:no-underline">
                                                        <SheetClose asChild>
                                                            <Link href={`/${nav.id}`}>{nav.title}</Link>
                                                        </SheetClose>
                                                    </AccordionTrigger>
                                                )}
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <div className="hidden md:flex justify-center items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {navLinks.map((nav) => (
                                        <NavigationMenuItem key={nav.id}>
                                            {nav.subItems ? (
                                                <>
                                                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#12141C] hover:text-white focus:bg-[#12141C] focus:text-white">
                                                        {nav.title}
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent>
                                                        <ul className="grid w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-1 lg:w-[200px] bg-[#12141C]">
                                                            {nav.subItems.map((subItem) => (
                                                                <li key={subItem.id}>
                                                                    <NavigationMenuLink asChild>
                                                                        <Link
                                                                            href={`/${nav.id}/${subItem.id}`}
                                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#1a1d29] hover:text-white focus:bg-[#1a1d29] focus:text-white text-white"
                                                                        >
                                                                            {subItem.title}
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </>
                                            ) : (
                                                <Link href={`/${nav.id}`} legacyBehavior passHref>
                                                    <NavigationMenuLink className={`${commonStyle} mx-4 text-white`}>
                                                        {nav.title}
                                                    </NavigationMenuLink>
                                                </Link>
                                            )}
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}