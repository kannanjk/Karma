import * as React from "react";
import { motion } from "framer-motion";

interface loadingProp {
    loading: boolean
}

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8
            },
            opacity: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    }
};

const LoadingModal: React.FC<loadingProp> = ({ loading }) => {
    return (
        loading ?
            <div id="default-modal" className=" flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-[100%] md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <div className="flex justify-center items-center w-full h-[100vh] overflow-hidden p-0 m-0 bg-gradient-to-b from-[#d0e] to-[#91f]">
                                <motion.ul
                                    className="w-36 h-36 grid grid-cols-2 grid-rows-2 gap-4 p-4 bg-white/20 rounded-[50px]"
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {[0, 1, 2, 3].map((index) => (
                                        <motion.li key={index} className="bg-white rounded-full" variants={item} />
                                    ))}
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : ''
    )
};

export default LoadingModal;