"use client"

import React, {useState} from 'react';
import {useMotionValueEvent, useScroll, motion} from "framer-motion";
import LogoImage from '@/public/hundredllc.png'
import Image from "next/image";
import Link from "next/link";
import {useActiveSectionContext} from "@/context/active-section-context";
import {clsx} from "clsx";
import { LuPlus } from "react-icons/lu";
import StartProjectButton from "@/components/StartProjectButton";


const Navbar = () => {
    const [hidden, setHidden] = useState(false)
    const {scrollY} = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious()
        if (latest > previous! && latest > 49) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
    const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    const links = [
        {
            name: 'Home',
            href: '#home'
        },
        {
            name: 'About Us',
            href: '#about-us'
        },
        {
            name: 'Contact',
            href: '#contact'
        },
    ]

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: -50,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 14,
                stiffness: 220,
                delay: (index % 15) * 0.05,
            },
        }),
    };

    return (
        <motion.nav
            className="z-50 fixed top-0 w-full px-12 text-primary-foreground py-12"
            transition={{duration: 0.45, ease: "easeInOut"}} animate={hidden ? 'hidden' : 'visible'} variants={{visible: {y: 0}, hidden: {y: "-100%"}}}
        >
            <div className="flex items-center justify-between w-full mx-auto">
                <Link href='/' className="flex gap-1.5 items-center">
                    <div className="relative overflow-hidden flex">
                        {/*
                        <Image alt="HundredLLC Logo" src={LogoImage} placeholder="blur" className="object-cover"/>
*/}
                        <h1 className="text-2xl font-bold ">I00</h1>
                        <div className="border-r-[2.5px] pl-2 border-border"/>
                    </div>
                    <h1 className="text-2xl font-semibold uppercase flex gap-1 ">Hundred<span className="opacity-80 mt-1 text-xs font-mono">LLC</span></h1>
                </Link>

                <motion.ul initial={{y: -100, opacity: 0}}
                           animate={{y: 0, opacity: 1}} viewport={{once: true}} className="hidden lg:flex items-center justify-center gap-4 bg-primary-foreground/20 p-2 rounded-full">
                    {links.map((link, index) => (
                        <motion.li
                            className="flex items-center justify-center relative"
                            key={index}
                            custom={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <Link onClick={() => {
                                setActiveSection(link.name)
                                setTimeOfLastClick(Date.now())
                            }}

                                  className={clsx("flex font-medium w-full items-center justify-center py-1.5 px-3 text-primary-foreground z-10 transition", {"!text-primary": activeSection === link.name})}
                                  href={link.href}>
                                {link.name}
                                {
                                    link.name === activeSection && (
                                        <motion.span className='bg-white rounded-full absolute inset-0 -z-10' layoutId='activeSection'
                                                     transition={{type: "spring", stiffness: 380, damping: 30}}>
                                        </motion.span>
                                    )
                                }

                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
                <StartProjectButton/>
            </div>
        </motion.nav>
    );
};

export default Navbar;
