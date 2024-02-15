"use client"
import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";

const Typewriter = () => {
    const [text] = useTypewriter({
        words: ['Branding', 'Design', 'Development', 'Websites'],
        loop: true
    })
    return (
        <span className="text-[clamp(48px,11.5vw,80px)] md:text-[5rem] xl:text-[5rem] 2xl:text-[6.5rem] leading-[1] uppercase font-mono">
            {text}
            <Cursor/>
        </span>
    );
};

export default Typewriter;
