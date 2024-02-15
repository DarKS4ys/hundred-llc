import React from 'react';
import {LuPlus} from "react-icons/lu";

const StartProjectButton = () => {
    return (
        <button className="active:scale-90 hover:opacity-80 duration-150 transition py-3 px-4 flex gap-1 bg-primary-foreground text-primary items-center font-medium rounded-full">
            <LuPlus/>
            Start a project
        </button>
    );
};

export default StartProjectButton;
