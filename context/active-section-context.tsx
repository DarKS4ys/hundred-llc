"use client"

import React, { useState, createContext, useContext } from 'react'

type ActiveSectionContextType = {
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null > (null);

export default function ActiveSectionContextProvider({children}: {children: React.ReactNode}) {
    const [activeSection, setActiveSection] = useState<string>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>{children}</ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within a ActiveSectionContextProvider')
    }
    return context
}
