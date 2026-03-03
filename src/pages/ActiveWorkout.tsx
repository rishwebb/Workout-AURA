import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Pause, Play, SkipForward } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ActiveWorkout() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(45);
    const [isPaused, setIsPaused] = useState(false);
    const totalTime = 45;
    const progress = ((totalTime - timeLeft) / totalTime) * 100;

    useEffect(() => {
        if (isPaused || timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [isPaused, timeLeft]);

    return (
        <div className="fixed inset-0 bg-void z-50 flex flex-col font-body selection:bg-electric/30">

            {/* Top Progress Bar */}
            <div className="h-1.5 w-full bg-white/10 relative">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-electric shadow-[0_0_15px_rgba(0,229,255,0.6)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear", duration: 1 }}
                />
            </div>

            {/* Header */}
            <header className="px-6 py-4 flex justify-between items-center relative z-10">
                <div>
                    <span className="text-gray-400 font-mono text-sm tracking-wider">EXERCISE 3/12</span>
                    <h2 className="text-2xl font-heading font-bold mt-1 text-white">Dumbbell Thrusters</h2>
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                    <X size={24} className="text-white" />
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center relative px-4">

                {/* Decorative Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Video Placeholder */}
                <div className="w-full max-w-2xl aspect-video rounded-3xl overflow-hidden glass relative group mb-8 shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
                        alt="Exercise Demo"
                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />

                    {/* Cues Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4">
                        <span className="px-4 py-2 bg-void/80 backdrop-blur-md rounded-full text-sm font-medium border border-white/10">Keep chest up</span>
                        <span className="px-4 py-2 bg-void/80 backdrop-blur-md rounded-full text-sm font-medium border border-white/10">Drive through heels</span>
                    </div>
                </div>

                {/* Timer UI */}
                <div className="relative flex justify-center items-center mb-12">
                    {/* Circular SVG Ring */}
                    <svg className="w-64 h-64 md:w-80 md:h-80 transform -rotate-90">
                        <circle cx="50%" cy="50%" r="48%" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="none" />
                        <circle
                            cx="50%" cy="50%" r="48%"
                            stroke="var(--color-electric)"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray="301.59%" /* 2 * PI * 48 */
                            strokeDashoffset={`${301.59 - (301.59 * progress) / 100}%`}
                            className="drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all duration-1000 ease-linear"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div className="absolute flex flex-col items-center text-center">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={timeLeft}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                                className="text-8xl md:text-9xl font-heading font-extrabold text-white tabular-nums tracking-tighter shadow-electric drop-shadow-lg"
                            >
                                {timeLeft}
                            </motion.div>
                        </AnimatePresence>
                        <span className="text-electric font-mono text-xl tracking-widest mt-2">{isPaused ? 'PAUSED' : 'SECONDS'}</span>
                    </div>
                </div>

            </main>

            {/* Controls */}
            <footer className="p-8 pb-12 md:pb-8 flex justify-center items-center gap-8 relative z-10 bg-gradient-to-t from-void via-void to-transparent">
                <button className="p-4 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    <SkipForward className="transform rotate-180" size={28} />
                </button>

                <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="w-20 h-20 bg-white rounded-full flex justify-center items-center hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                    {isPaused ? <Play size={36} className="fill-void text-void ml-2" /> : <Pause size={36} className="fill-void text-void" />}
                </button>

                <button className="p-4 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    <SkipForward size={28} />
                </button>
            </footer>
        </div>
    );
}
