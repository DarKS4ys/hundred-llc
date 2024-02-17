"use client"
import React from 'react';
import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
    return (
        <AnimatedCursor
            innerSize={10}
            outerSize={7.5}
            outerAlpha={0.35}
            innerScale={2.5}
            outerScale={5}
            color={'24, 160, 230'}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                '.awesome'
            ]}
        />
    );
};

export default AnimCursor;
