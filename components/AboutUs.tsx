"use client"

import React from 'react';
import {useSectionInView} from "@/lib/hooks";
import SectionDivider from "@/components/SectionDivider";
import Parallax from "@/components/Parallax";

const AboutUs = () => {
    const { ref } = useSectionInView('About Us')

    return (
        <div ref={ref} id='about-us' className="flex flex-col justify-center px-16 py-24 gap-4">

        </div>
    );
};

export default AboutUs;
