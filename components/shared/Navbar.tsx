'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { Menu } from 'lucide-react'
import styles from "@/app/styles"
import { navLinks } from "@/constants"
import Image from "next/image"
import {College_Logo} from "@/public/assets/images"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
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
import {Button} from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        setScrolled(window.scrollY > 10)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'backdrop-blur-md' : ''}`}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <nav className="w-full flex py-5 justify-between items-center">
                        <Link href="/" className="text-white text-xl font-bold flex items-center">
                            <Image
                                src={College_Logo}
                                alt={'College Logo'}
                                height={45}
                                className="mr-2"
                            />
                        </Link>
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant={'ghost'}>
                                        <Menu className="text-white"/>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="top" className="overflow-y-auto bg-[#12141C]">
                                    <SheetHeader>
                                        <SheetTitle>
                                            <Link href="/" className="text-white text-xl font-bold flex">
                                                <Image
                                                    src={College_Logo}
                                                    alt={'College Logo'}
                                                    height={50}
                                                    className="mr-2"
                                                />
                                            </Link>
                                        </SheetTitle>
                                    </SheetHeader>
                                    <nav className="mt-8">
                                        {navLinks.map((nav) => (
                                            <div key={nav.id} className="mb-2">
                                                {nav.subItems ? (
                                                    <Accordion type="single" collapsible>
                                                        <AccordionItem value={nav.id} className="border-b-0">
                                                            <AccordionTrigger className="hover:no-underline hover:text-blue-400 py-2 text-base">
                                                                {nav.title}
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <ul className="pl-4 space-y-1">
                                                                    {nav.subItems.map((subItem) => (
                                                                        <li key={subItem.id}>
                                                                            <SheetClose asChild>
                                                                                <Link href={`${subItem.id}`}
                                                                                      className="hover:text-blue-400 block py-2 text-base">
                                                                                    {subItem.title}
                                                                                </Link>
                                                                            </SheetClose>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                ) : (
                                                    <SheetClose asChild>
                                                        <Link href={`${nav.id}`} className="hover:text-blue-400 block py-2 text-base">
                                                            {nav.title}
                                                        </Link>
                                                    </SheetClose>
                                                )}
                                            </div>
                                        ))}
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <div className="hidden md:flex justify-center items-center">
                            <NavigationMenu>
                                <NavigationMenuList className="bg-transparent">
                                    {navLinks.map((nav) => (
                                        <NavigationMenuItem key={nav.id}>
                                            {nav.subItems ? (
                                                <NavigationMenuTrigger className="bg-transparent text-white hover:text-blue-400 hover:bg-transparent data-[state=open]:bg-transparent">
                                                    {nav.title}
                                                </NavigationMenuTrigger>
                                            ) : (
                                                <Link href={`${nav.id}`} legacyBehavior passHref>
                                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:text-blue-400 focus:bg-transparent hover:bg-transparent")}>
                                                        {nav.title}
                                                    </NavigationMenuLink>
                                                </Link>
                                            )}
                                            {nav.subItems && (
                                                <NavigationMenuContent>
                                                    <ul className="grid w-[250px] gap-2 p-3 bg-dark_blue">
                                                        {nav.subItems.map((subItem) => (
                                                            <ListItem
                                                                key={subItem.id}
                                                                title={subItem.title}
                                                                href={`${subItem.id}`}
                                                            />
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
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

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white text-gray-200",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"