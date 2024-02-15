"use client"

import React from 'react';
import Image from "next/image";
import BGImage from '@/public/background.jpg'
import Typewriter from "@/components/Typewriter";

const Header = () => {

    return (
        <div id="home" className="w-full p-3 h-screen overflow-hidden">
            <div className="bg-[#1B1725] relative bg-opacity-80 backdrop-blur-xl text-primary-foreground flex gap-4 justify-center items-center rounded-[2rem] w-full h-full">
                <div className="w-full flex flex-col items-start justify-start p-12">
                    <h1 className="text-[clamp(48px,11.5vw,80px)] md:text-[5rem] 2xl:text-[6.5rem] leading-[1] uppercase font-mono">
                        We Make
                    </h1>
                    <h1 className="text-[clamp(72px,17.5vw,120px)] md:text-[7.5rem] 2xl:text-[9rem] leading-[1] uppercase font-black font-mono">
                        <span className="italic">A</span>wesome
                    </h1>
                    <Typewriter/>
                </div>
                <div className="w-full hidden lg:block">
                    <h1 className="uppercase font-mono">
                        Website examples animation here
                    </h1>
                </div>
            </div>
            <div className="inset-0 w-full p-3 absolute -z-10">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden ">
                    <div className="bg-violet-300 z-10 rounded-full w-96 blur-[150px] h-96 animate-blob absolute left-[40%]"/>
                    <div className="bg-violet-500 z-10 rounded-full w-96 blur-[120px] h-96 animate-blob2 absolute left-0 top-[1%]"/>
                    <div className="bg-violet-800 z-10 rounded-full w-96 blur-[100px] h-96 animate-blob-reverse absolute left-[1%] bottom-[15%]"/>
                    <div className="bg-violet-200 z-10 rounded-full w-96 blur-[150px] h-96 animate-blob absolute left-[40%]"/>
                    <div className="bg-violet-900 z-10 rounded-full w-96 blur-[170px] h-96 animate-blob2 absolute right-[15%] bottom-[50%]"/>
                    <div className="bg-blue-400 z-10 rounded-full w-96 blur-[150px] h-96 animate-blob-reverse absolute left-[50%] top-[50%]"/>
                    <div className="bg-emerald-400 z-10 rounded-full w-96 blur-[150px] h-96 animate-blob2 absolute top-0 left-[10%]"/>
                    <div className="bg-violet-400 z-10 rounded-full w-96 blur-[150px] h-96 animate-blob-reverse absolute right-[40%] bottom-20"/>
                    <div className="bg-blue-900 z-10 rounded-full w-64 blur-[80px] h-64 animate-blob2 absolute left-[10%] bottom-[5%]"/>
                    <div className="bg-violet-800 z-10 rounded-full w-96 blur-[130px] h-96 animate-blob-reverse absolute left-[70%] bottom-20"/>
                    <Image priority fill src={BGImage} className="object-cover" placeholder="blur" alt="Website background"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
