'use client';

import { motion } from 'framer-motion';

export const Hero = (): React.JSX.Element => {
    return (
        <section className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-linerar-to-b from-white to-gray-100">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-foreground-primary text-heading-4xl md:text-heading-6xl font-bold leading-tight"
            >
                Discover Events Near You
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-foreground-secondary max-w-2xl"
            >
                Built as part of a real-world case study, this platform demonstrates how modern
                frontend engineering can transform simple ideas into en gaging, scalable, and
                user-focused digital experiences.
            </motion.p>

            <p className="mt-2 text-sm text-foreground-secondary">
                Designed with performance, clean architecture, and seamless user intera ction at its
                core.
            </p>

            <p className="mt-1 text-xs text-foreground-secondary">
                — Built by <span className="text-primary">Shayan Bukhari</span>
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-4">
                <button className="px-6 py-3 bg-primary text-foreground-primary text-heading-md rounded-xl hover:opacity-90 transition">
                    Explore Events
                </button>

                <button className="px-6 py-3 border border-border text-foreground-primary rounded-xl hover:bg-border transition">
                    View Case Study
                </button>
            </div>

            {/* Feature badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                <span className="px-3 py-1 bg-border rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-border rounded-full">React.js</span>
                <span className="px-3 py-1 bg-border rounded-full">Redux Toolkit</span>
                <span className="px-3 py-1 bg-border rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-border rounded-full">Husky</span>
                <span className="px-3 py-1 bg-border rounded-full">Optimized UI</span>
            </div>
        </section>
    );
};
