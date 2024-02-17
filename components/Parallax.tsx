'use client';
import {useRef} from "react";
import styles from '@/components/styles/parallax.module.scss'
import Picture1 from '@/public/medias/Stoic.png'
import Picture2 from '@/public/medias/Affluent.png'
import Picture3 from '@/public/medias/Prime.png'
import Image from "next/image";
import {motion, useScroll, useTransform} from 'framer-motion';

const word = "with framer-motion";

export default function Parallax() {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const md = useTransform(scrollYProgress, [0, 1], [50, -250]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -350]);

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <h1 className="text-7xl font-medium uppercase mb-2">Creativity at its finest</h1>
            <h1 className="text-3xl text-muted-foreground animate-fade w-1/2 mb-16">We design and develop custom websites for businesses and individuals looking to make an impact online.</h1>
            <div className={styles.images}>
                {
                    images.map(({src, y}, i) => {
                        return <motion.div style={{y}} key={`i_${i}`} className={styles.imageContainer}>
                            <Image
                                src={src}
                                placeholder="blur"
                                alt="image"
                                quality={95}
                                fill
                            />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}