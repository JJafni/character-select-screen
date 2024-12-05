"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

function useBoundedScroll(threshold) {
    const { scrollY } = useScroll();
    const scrollYBounded = useMotionValue(0);
    const scrollYBoundedProgress = useTransform(scrollYBounded, [0, threshold], [0, 1]);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (current) => {
            const diff = current - scrollY.getPrevious();
            const bounded = Math.min(Math.max(scrollYBounded.get() + diff, 0), threshold);
            scrollYBounded.set(bounded);
        });
        return unsubscribe;
    }, [threshold, scrollY, scrollYBounded]);

    return { scrollYBoundedProgress };
}

const NavbarMain = () => {
    const { scrollYBoundedProgress } = useBoundedScroll(400);
    const navOpacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0]);

    return (
        <div className="mx-auto w-full max-w-3xl text-slate-200">
            <motion.header
                style={{ zIndex: '100', opacity: navOpacity, backgroundColor: useMotionTemplate`rgb(23 23 23 / 0.8)` }}
                className="fixed inset-x-0 flex h-20 shadow-lg backdrop-blur-md"
            >
                <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-8">
                    <motion.p
                        className="flex origin-left items-center text-xl font-semibold uppercase text-white"
                    >
                        <span className="-ml-1 text-2xl tracking-[-.075em]">DB Data</span>
                    </motion.p>
                    <motion.nav
                        className="flex space-x-4 text-sm font-medium text-slate-400"
                    >
                        <a href="#" className="hover:text-slate-200">News</a>
                        <a href="#" className="hover:text-slate-200">Sports</a>
                        <a href="#" className="hover:text-slate-200">Culture</a>
                    </motion.nav>
                </div>
            </motion.header>
        </div>
    );
}

export { NavbarMain };
