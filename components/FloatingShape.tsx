"use client"
import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import { useMotionValue, useSpring } from "framer-motion"

export default function FloatingShape() {
    const [multiplier, setMultiplier] = useState(1.5);

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const manageMouse = (e: { clientX: any; clientY: any; }) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const x = clientX / innerWidth;
        const y = clientY / innerHeight;
        const sensitivity = 0.35; // Adjust this value for smoother or more subtle movement
        mouse.x.set(x * sensitivity);
        mouse.y.set(y * sensitivity);
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouse);
        return () => window.removeEventListener("mousemove", manageMouse);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1366) {
                setMultiplier(2.4);
            } else {
                setMultiplier(1.5);
            }
        };

        handleResize(); // Initial call to set the multiplier
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Canvas orthographic camera={{position: [0 , 0, 100], zoom: ((typeof window !== 'undefined' && window.innerWidth) || 800) / ((typeof window !== 'undefined' && window.innerHeight) || 600) * multiplier}}>
            <Model mouse={mouse}/>
            <Environment preset="studio"/>
        </Canvas>
    )
}
