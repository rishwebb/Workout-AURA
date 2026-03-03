import { motion } from 'framer-motion';
import { Play, Flame, Trophy, Activity, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            {/* Header / Greeting */}
            <motion.div variants={item} className="flex justify-between items-end">
                <div>
                    <p className="text-electric font-mono font-medium mb-1">WELCOME BACK, ATHLETE</p>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-600">crush it</span>?
                    </h1>
                </div>
                <div className="hidden md:flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-white/10">
                    <Flame className="text-volt" size={20} />
                    <span className="font-mono font-bold">12 DAY STREAK</span>
                </div>
            </motion.div>

            {/* Hero Action Card */}
            <motion.div variants={item} className="relative overflow-hidden rounded-3xl p-1 p-[1px] bg-gradient-to-br from-electric/50 to-surface">
                <div className="absolute inset-0 bg-void/50 backdrop-blur-xl -z-10" />
                <div className="bg-surface/90 backdrop-blur-3xl rounded-[23px] p-6 md:p-10 relative overflow-hidden h-full flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Decorative shapes */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-electric/20 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 w-full md:w-2/3 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-sm font-semibold mb-2 font-mono">
                            <Zap size={14} className="fill-electric" />
                            AI GENERATED
                        </div>
                        <h2 className="text-3xl font-heading font-bold">Today's Optimal Session</h2>
                        <p className="text-gray-400 font-body text-lg max-w-lg">
                            Based on your recovery metrics, a high-intensity full body circuit will yield the maximum dopamine response.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-mono">TIME</span>
                                <span className="font-bold text-lg">25 MIN</span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-mono">INTENSITY</span>
                                <span className="font-bold text-lg text-blaze">HIGH</span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-mono">TARGET</span>
                                <span className="font-bold text-lg">FULL BODY</span>
                            </div>
                        </div>
                    </div>

                    <Link to="/workout/today" className="relative group w-full md:w-auto z-10 block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-electric to-blue-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
                        <div className="relative flex items-center justify-center gap-3 bg-white text-void px-8 py-4 rounded-full font-bold font-heading text-xl uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-xl">
                            <Play size={24} className="fill-void" />
                            Start Now
                        </div>
                    </Link>
                </div>
            </motion.div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Daily Challenge */}
                <motion.div variants={item} className="md:col-span-2 glass rounded-3xl p-6 relative overflow-hidden group">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blaze/10 to-transparent pointer-events-none" />
                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div>
                            <h3 className="text-xl font-heading font-bold flex items-center gap-2">
                                <Trophy className="text-blaze" size={24} />
                                Daily Challenge
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">10,000 Pushups in a Month</p>
                        </div>
                        <Link to="/challenges" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-end mb-2">
                            <span className="font-mono text-3xl font-bold">3,450</span>
                            <span className="text-gray-400 text-sm font-mono">/ 10,000</span>
                        </div>
                        <div className="w-full h-3 bg-void rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '34.5%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-blaze to-[#FF8C00] rounded-full relative"
                            >
                                <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
                            </motion.div>
                        </div>
                        <p className="mt-4 text-sm text-gray-400 font-medium">+150 needed today to stay on track</p>
                    </div>
                </motion.div>

                {/* Quick Stats Summary */}
                <motion.div variants={item} className="glass rounded-3xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-heading font-bold flex items-center gap-2 mb-6">
                            <Activity className="text-electric" size={24} />
                            Activity
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Workouts</span>
                                <span className="font-mono font-bold text-lg">14</span>
                            </div>
                            <div className="w-full h-px bg-white/5" />
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Minutes</span>
                                <span className="font-mono font-bold text-lg">420</span>
                            </div>
                            <div className="w-full h-px bg-white/5" />
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Calories</span>
                                <span className="font-mono font-bold text-lg">3,240</span>
                            </div>
                        </div>
                    </div>
                    <Link to="/stats" className="mt-6 w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-center font-medium transition-colors text-sm text-gray-300 hover:text-white">
                        View Full Analytics
                    </Link>
                </motion.div>

            </div>
        </motion.div>
    );
}
