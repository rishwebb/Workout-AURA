import { motion } from 'framer-motion';
import { Trophy, Activity, Flame, TrendingUp, Calendar, Clock } from 'lucide-react';

export function Stats() {
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

    // Mock data for the activity graph
    const weeklyData = [
        { day: 'Mon', minutes: 45 },
        { day: 'Tue', minutes: 30 },
        { day: 'Wed', minutes: 0 },
        { day: 'Thu', minutes: 60 },
        { day: 'Fri', minutes: 45 },
        { day: 'Sat', minutes: 20 },
        { day: 'Sun', minutes: 50 },
    ];
    const maxMinutes = Math.max(...weeklyData.map(d => d.minutes));

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">

            {/* Header */}
            <motion.div variants={item} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <p className="text-blaze font-mono font-medium mb-1">PERFORMANCE ANALYTICS</p>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight">
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze to-[#FF8C00]">Progress</span>
                    </h1>
                </div>
            </motion.div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div variants={item} className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center mb-4">
                        <Activity className="text-electric" size={24} />
                    </div>
                    <span className="text-3xl font-mono font-bold text-white mb-1">42</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Workouts</span>
                </motion.div>

                <motion.div variants={item} className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center border-volt/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-volt/5 pointer-events-none" />
                    <div className="w-12 h-12 bg-volt/10 rounded-full flex items-center justify-center mb-4">
                        <Flame className="text-volt" size={24} />
                    </div>
                    <span className="text-3xl font-mono font-bold text-white mb-1">12</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Day Streak</span>
                </motion.div>

                <motion.div variants={item} className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 bg-blaze/10 rounded-full flex items-center justify-center mb-4">
                        <Clock className="text-blaze" size={24} />
                    </div>
                    <span className="text-3xl font-mono font-bold text-white mb-1">1.2k</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Minutes</span>
                </motion.div>

                <motion.div variants={item} className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                        <TrendingUp className="text-purple-500" size={24} />
                    </div>
                    <span className="text-3xl font-mono font-bold text-white mb-1">11k</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Calories</span>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Weekly Chart */}
                <motion.div variants={item} className="md:col-span-2 glass rounded-3xl p-6 md:p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-heading font-bold flex items-center gap-2">
                            <Calendar className="text-electric" size={20} />
                            This Week
                        </h3>
                        <span className="text-sm font-mono text-gray-400">Mar 2 - 8</span>
                    </div>

                    <div className="h-64 flex items-end justify-between gap-2 md:gap-4 mt-8">
                        {weeklyData.map((data, i) => {
                            const heightPercentage = data.minutes === 0 ? 5 : (data.minutes / maxMinutes) * 100;
                            const isToday = data.day === 'Wed'; // Mock today

                            return (
                                <div key={i} className="flex flex-col items-center flex-1 gap-4 group">
                                    <div className="w-full relative h-full flex items-end justify-center">
                                        {/* Tooltip on hover */}
                                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-void/90 px-2 py-1 rounded text-xs font-mono font-bold border border-white/10 z-10">
                                            {data.minutes}m
                                        </div>
                                        {/* Bar */}
                                        <motion.div
                                            className={`w-full md:w-12 rounded-t-lg relative overflow-hidden transition-all duration-300 ${isToday ? 'bg-electric hover:bg-electric/80 shadow-[0_0_15px_rgba(0,229,255,0.4)]' : 'bg-surface hover:bg-white/20'
                                                }`}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${heightPercentage}%` }}
                                            transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                                        >
                                            {isToday && <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />}
                                        </motion.div>
                                    </div>
                                    <span className={`text-xs font-medium uppercase tracking-wider ${isToday ? 'text-electric' : 'text-gray-500'}`}>
                                        {data.day}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Trophies */}
                <motion.div variants={item} className="glass rounded-3xl p-6 md:p-8">
                    <h3 className="text-xl font-heading font-bold flex items-center gap-2 mb-6">
                        <Trophy className="text-yellow-500" size={20} />
                        Recent Badges
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.3)] shrink-0">
                                <Flame size={20} className="fill-void text-void" />
                            </div>
                            <div>
                                <h4 className="font-bold">10 Day Warrior</h4>
                                <p className="text-xs text-gray-400 mt-1">Worked out 10 days in a row.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric to-blue-600 flex items-center justify-center shrink-0">
                                <Activity size={20} className="text-void" />
                            </div>
                            <div>
                                <h4 className="font-bold">First 100</h4>
                                <p className="text-xs text-gray-400 mt-1">Completed 100 pushups in one session.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed">
                            <div className="w-12 h-12 rounded-full bg-surface border border-white/20 flex items-center justify-center shrink-0">
                                <Trophy size={20} className="text-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Month of Steel</h4>
                                <p className="text-xs text-gray-400 mt-1">Finish a 30-day program.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
}
