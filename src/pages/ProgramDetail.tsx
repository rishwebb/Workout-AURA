import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Target, Dumbbell, Zap } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export function ProgramDetail() {
    const { id } = useParams();

    // Mock data based on id
    const programName = id === 'p2' ? 'Neon Hypertrophy' : id === 'p3' ? 'Cyber Mobility' : 'Program Details';
    const programImage = id === 'p2'
        ? 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
        : 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2069&auto=format&fit=crop';

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
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 max-w-5xl mx-auto pb-20">

            {/* Back Navigation */}
            <motion.div variants={item}>
                <Link to="/programs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back to Programs</span>
                </Link>
            </motion.div>

            {/* Hero Image */}
            <motion.div variants={item} className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden glass border-0 group">
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent z-10" />
                <img
                    src={programImage}
                    alt={programName}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />

                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                        Structured Plan
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-2">
                        {programName}
                    </h1>
                    <p className="text-gray-300 font-body max-w-2xl text-lg">
                        Commit to this structured protocol to see guaranteed results. This program is designed with progressive overload principles and targeted muscle groupings.
                    </p>
                </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { icon: Clock, label: 'Duration', value: '8 Weeks' },
                    { icon: Target, label: 'Difficulty', value: 'Advanced' },
                    { icon: Dumbbell, label: 'Equipment', value: 'Dumbbells' },
                    { icon: Zap, label: 'Focus', value: 'Hypertrophy' },
                ].map((stat, i) => (
                    <div key={i} className="glass rounded-2xl p-4 flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                            <stat.icon size={20} className="text-electric" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                            <p className="text-lg font-bold">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Weeks Overview (Mock) */}
            <motion.div variants={item} className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Program Structure</h3>

                {[1, 2, 3, 4].map((week) => (
                    <div key={week} className="glass rounded-2xl p-6 border border-white/5 hover:border-volt/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h4 className="font-bold text-lg mb-1">Phase {week}: {week === 1 ? 'Conditioning' : week === 2 ? 'Hypertrophy I' : week === 3 ? 'Hypertrophy II' : 'Peak Power'}</h4>
                                <p className="text-sm text-gray-400">4 workouts per week • Focus on foundational movement patterns.</p>
                            </div>
                            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-colors w-full md:w-auto">
                                View Week {week}
                            </button>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Action Bar */}
            <motion.div variants={item} className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-50">
                <div className="glass p-2 rounded-full border border-volt/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                    <button className="w-full py-4 bg-volt hover:bg-[#32e512] text-void font-bold rounded-full transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                        Start Program Now
                    </button>
                </div>
            </motion.div>

        </motion.div>
    );
}
