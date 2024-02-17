import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from './anim';

export default function Nav() {
    return (
        <div className="flex flex-col justify-between h-full p-10 box-border">
            <div className="flex flex-col gap-10">
                {links.map((link, i) => {
                    const { title, href } = link;
                    return (
                        <div key={`b_${i}`} className="perspective-120 perspective-origin-bottom">
                            <motion.a
                                href={href}
                                custom={i}
                                variants={perspective}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                className="text-main text-2xl"
                            >
                                {title}
                            </motion.a>
                        </div>
                    );
                })}
            </div>
            <motion.div className="flex flex-wrap">
                {footerLinks.map((link, i) => {
                    const { title } = link;
                    return (
                        <motion.a
                            variants={slideIn}
                            custom={i}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                            className="w-1/2 mt-5 text-main"
                        >
                            {title}
                        </motion.a>
                    );
                })}
            </motion.div>
        </div>
    );
}
