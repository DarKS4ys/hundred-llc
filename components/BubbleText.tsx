"use client"
import {useEffect} from "react";
import {clsx} from "clsx";

export const BubbleText = ({children, className}: {children: string, className: string}) => {
    useEffect(() => {
        const spans = document.querySelectorAll(
            ".hover-text span"
        ) as NodeListOf<HTMLSpanElement>;

        spans.forEach((span) => {
            span.addEventListener("mouseenter", function (this: typeof span) {
                this.style.fontWeight = "500";
                this.style.color = "rgb(199, 210, 254)";

                const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
                const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

                if (leftNeighbor) {
                    leftNeighbor.style.fontWeight = "300";
                    leftNeighbor.style.color = "rgb(238, 230, 255)";
                }
                if (rightNeighbor) {
                    rightNeighbor.style.fontWeight = "300";
                    rightNeighbor.style.color = "rgb(238, 230, 255)";
                }
            });

            span.addEventListener("mouseleave", function (this: typeof span) {
                this.style.fontWeight = "900";
                this.style.color = "rgb(255, 255, 255)";

                const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
                const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

                if (leftNeighbor) {
                    leftNeighbor.style.fontWeight = "900";
                    leftNeighbor.style.color = "rgb(255, 255, 255)";
                }

                if (rightNeighbor) {
                    rightNeighbor.style.fontWeight = "900";
                    rightNeighbor.style.color = "rgb(255, 255, 255)";
                }
            });
        });
    }, []);

    return (
        <h2 className={clsx('hover-text', className)}>
            <Text>{children}</Text>
        </h2>
    );
};

const Text = ({ children }: { children: string }) => {
    return (
        <>
            {children.split("").map((child, idx) => (
                <span
                    style={{
                        transition: "0.35s font-weight, 0.35s color",
                    }}
                    className=""
                    key={idx}
                >
          {child}
        </span>
            ))}
        </>
    );
};
