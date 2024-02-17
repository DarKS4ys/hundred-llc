"use client"

import React from 'react';
import {useSectionInView} from "@/lib/hooks";
import SectionDivider from "@/components/SectionDivider";
import Parallax from "@/components/Parallax";

const Experience = () => {
    const { ref } = useSectionInView('About Us')

    return (
        <div ref={ref} id='about-us' className="flex flex-col justify-center px-16 py-24 gap-4">
            <SectionDivider sectionName="About Us"/>
            <div className="flex flex-col md:flex-row gap-4 items-center w-full">
{/*
                <h1 className="text-3xl animate-fade">We design and develop custom websites for businesses and individuals looking to make an impact online.</h1>
*/}
                <Parallax/>
            </div>
        </div>
    );
};

export default Experience;
