"use client"

import {useEffect, useRef, useState} from "react";
import "./styles/header.css"

enum Feeling {
    Sad = 1,
    Neutral = 2,
    Happy = 3,
}

const feelingColorMap = {
    [Feeling.Sad]: ["#394e7a", "	#8e9ac7", "#4ee"],
    [Feeling.Neutral]: ["#22d", "#c8f8ff", "#6d2"],
    [Feeling.Happy]: ["#39f", "#f4e54d", "#fa3"],
};

function GradientTest() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [feeling, setFeeling] = useState<Feeling>(Feeling.Neutral);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const [a, b, c] = feelingColorMap[feeling];

        wrapperRef.current.style.setProperty("--color-a", a);
        wrapperRef.current.style.setProperty("--color-b", b);
        wrapperRef.current.style.setProperty("--color-c", c);
    }, [feeling]);

    return (
        <main className="flex min-h-screen w-full items-center justify-center">
            <div
                ref={wrapperRef}
                className="relative mx-auto min-h-screen w-full overflow-hidden rounded-2xl
                bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c]
                p-8 text-white duration-500 ease-in [transition-property:_--color-a,_--color-b,_--color-c]"
            >
                <div className="relative z-10">
                    <h1 className="mb-12 text-5xl font-medium leading-tight">
                        How are you feeling today?
                    </h1>

                    <input
                        className="range"
                        onChange={(ev) => setFeeling(ev.target.value as unknown as Feeling)}
                        type="range"
                        min={1}
                        value={feeling}
                        max={3}
                        step={1}
                    />
                </div>
            </div>
        </main>
    );
}

export default GradientTest;