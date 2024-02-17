"use client"

import React from 'react';
import Image from "next/image";
import BGImage from '@/public/background.jpg'
import Typewriter from "@/components/Typewriter";
import {BubbleText} from "@/components/BubbleText";
import Logo from '@/public/hundredllc.png'
import {useSectionInView} from "@/lib/hooks";
import FloatingShape from "@/components/FloatingShape";

const Header = () => {

    const { ref } = useSectionInView('Home', 0.4)

    return (
        <div id="home" ref={ref} className="w-full p-3 h-screen overflow-hidden">
            <div className="bg-main/40 relative backdrop-blur-xl text-primary-foreground flex gap-4 justify-center items-center rounded-[2rem] w-full h-full">
                <div className="w-full flex flex-col items-start justify-start p-12 mt-8">
                    <h1 className="text-[clamp(48px,11.5vw,80px)] md:text-[5rem] 2xl:text-[7rem] leading-[1] uppercase font-mono">
                        We Make
                    </h1>
                    <div className="flex awesome">
                        <BubbleText className="italic text-[clamp(72px,17.5vw,120px)] md:text-[7.5rem] 2xl:text-[10rem] leading-[1] uppercase font-black font-mono">
                            A
                        </BubbleText>
                        <BubbleText className="text-[clamp(72px,17.5vw,120px)] md:text-[7.5rem] 2xl:text-[10rem] leading-[1] uppercase font-black font-mono">
                            wesome
                        </BubbleText>
                    </div>
                    <Typewriter/>
                </div>
                <div className="w-full h-full hidden lg:flex items-end relative justify-end">
                    <div className="absolute right-0 top-0 w-full h-full drop-shadow-lg shadow-black" style={{ maskImage: 'linear-gradient(to right, transparent, black 50%)' }}>
                        <FloatingShape />
                    </div>
                </div>
            </div>
            <div className="inset-0 w-full p-3 absolute -z-10 ">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                    <div className="bg-violet-300 z-10 rounded-full w-96 blur-[60px] h-96 animate-blob absolute left-[40%]"/>
                    <div className="bg-violet-500 z-10 rounded-full w-96 blur-[50px] h-96 animate-blob2 absolute left-0 top-[1%]"/>
                    <div className="bg-violet-100 z-10 rounded-full w-96 blur-[55px] h-96 animate-blob-reverse absolute left-[1%] bottom-[15%]"/>
                    <div className="bg-violet-200 z-10 rounded-full w-96 blur-[60px] h-96 animate-blob absolute left-[40%]"/>
                    <div className="bg-violet-900 z-10 rounded-full w-96 blur-[100px] h-96 animate-blob2 absolute right-[15%] bottom-[50%]"/>
                    <div className="bg-blue-400 z-10 rounded-full w-96 blur-[70px] h-96 animate-blob-reverse absolute left-[50%] top-[50%]"/>
                    <div className="bg-emerald-400/70 z-10 rounded-full w-96 blur-[40px] h-96 animate-blob2 absolute top-0 left-[10%]"/>
                    <div className="bg-violet-400 z-10 rounded-full w-96 blur-[70px] h-96 animate-blob-reverse absolute right-[40%] bottom-20"/>
                    <div className="bg-blue-900 z-10 rounded-full w-64 blur-[80px] h-64 animate-blob2 absolute left-[10%] bottom-[5%]"/>
                    <div className="bg-violet-800 z-10 rounded-full w-96 blur-[70px] h-96 animate-blob-reverse absolute left-[70%] bottom-20"/>
                    <Image priority fill src={BGImage} className="object-cover" placeholder="blur" alt="Website background"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
