'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './style.module.scss';
import Nav from "@/components/NavMenu/Nav/Nav";
import Button from "@/components/NavMenu/Button/Button";

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "25px",
        right: "25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function NavMenu() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="absolute right-0">
            <motion.div
                className="w-[480px] h-[650px] bg-white rounded-3xl relative"
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
    )
}