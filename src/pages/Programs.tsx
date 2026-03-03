import { motion } from 'framer-motion';
import { Calendar, Target, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROGRAMS = [
    {
        id: 'p1',
        title: '30-Day Bodyweight Shred',
        description: 'A high-intensity, zero-equipment program designed to burn fat and build lean muscle from anywhere.',
        duration: '4 Weeks',
        level: 'Intermediate',
        progress: 35,
        imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
        active: true,
    },
    {
        id: 'p2',
        title: 'Neon Hypertrophy',
        description: 'Dumbbell-focused muscle building protocol utilizing progressive overload and time-under-tension.',
        duration: '8 Weeks',
        level: 'Advanced',
        progress: 0,
        imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
        active: false,
    },
    {
        id: 'p3',
        title: 'Cyber Mobility',
        description: 'Daily 10-minute routines to hack your flexibility, fix posture, and increase joint longevity.',
        duration: 'Ongoing',
        level: 'All Levels',
        progress: 100,
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2069&auto=format&fit=crop',
        active: false,
    }
];

export function Programs() {
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
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            {/* Header */}
            <motion.div variants={item} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <p className="text-volt font-mono font-medium mb-1">STRUCTURED GROWTH</p>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight">
                        Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt to-emerald-500">Programs</span>
                    </h1>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
                {PROGRAMS.map((program) => (
                    <motion.div
                        key={program.id}
                        variants={item}
                        className={`glass rounded-3xl overflow-hidden relative group border ${program.active ? 'border-volt/30' : 'border-white/5'}`}
                    >
                        <div className="flex flex-col md:flex-row h-full">
                            {/* Image Section */}
                            <div className="md:w-1/3 relative aspect-video md:aspect-auto overflow-hidden bg-void">
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface via-surface/80 to-transparent z-10" />
                                <img
                                    src={program.imageUrl}
                                    alt={program.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20 flex gap-2">
                                    {program.active && (
                                        <span className="px-3 py-1 bg-volt text-void rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                            <Flame size={12} className="fill-void" /> Active
                                        </span>
                                    )}
                                    {program.progress === 100 && (
                                        <span className="px-3 py-1 bg-electric text-void rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                            <CheckCircle2 size={12} /> Completed
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative z-20">
                                <div>
                                    <h2 className="text-2xl font-heading font-bold mb-2">{program.title}</h2>
                                    <p className="text-gray-400 font-body mb-6 max-w-2xl">{program.description}</p>

                                    <div className="flex flex-wrap gap-4 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-full">
                                            <Calendar size={16} className="text-volt" />
                                            <span>{program.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-full">
                                            <Target size={16} className="text-electric" />
                                            <span>{program.level}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    {/* Progress Bar */}
                                    <div className="flex-1 max-w-md">
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-sm font-medium text-gray-400">Progress</span>
                                            <span className="font-mono font-bold">{program.progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-void rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${program.progress}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className={`h-full rounded-full ${program.progress === 100 ? 'bg-electric' : 'bg-volt'}`}
                                            />
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <Link
                                        to={program.active ? `/workout/today` : `/programs/${program.id}`}
                                        className={`shrink-0 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${program.active
                                                ? 'bg-volt text-void hover:bg-[#32e512] shadow-[0_0_15px_rgba(57,255,20,0.3)]'
                                                : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                    >
                                        {program.active ? 'Continue Plan' : program.progress === 100 ? 'Review' : 'View Program'}
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
