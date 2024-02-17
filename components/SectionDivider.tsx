import React from 'react';

const SectionDivider = ({sectionName}: {sectionName: string}) => {
    return (
        <div className="flex items-center font-mono  text-muted-foreground text-2xl gap-1 w-full max-w-[15rem]">
            <hr className="border-muted-foreground border w-1/4"/>
            <h1 className="w-full">{sectionName}</h1>
        </div>
    );
};

export default SectionDivider;
