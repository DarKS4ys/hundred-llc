import React from 'react';
import {LuPlus} from "react-icons/lu";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

const StartProjectButton = () => {
    const messages = [
        "Let's bring your ideas to life",
        "Ready to make your vision a reality?",
        "Tell us your ideas, let's create something amazing!",
        "Excited to start your next project?"
    ]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return (
        <Sheet >
            <SheetTrigger asChild>
                <button className="active:scale-90 hover:opacity-80 duration-150 transition py-3 px-4 flex gap-1 bg-primary-foreground text-primary items-center font-medium rounded-full">
                    <LuPlus/>
                    Start a project
                </button>
            </SheetTrigger>
            <SheetContent side="right">
                <div className="flex flex-col items-start gap-4 px-2 py-8 md:px-8">
                    <h1 className="text-[clamp(28px,7.5vw,36px)] leading-[1] md:text-4xl font-semibold">{randomMessage}</h1>

          {/*          <p>I'm interested in...</p>
                    */}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default StartProjectButton;
