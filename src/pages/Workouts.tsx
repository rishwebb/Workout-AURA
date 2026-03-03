import { motion } from 'framer-motion';
import { WorkoutCard } from '../components/WorkoutCard';
import { Filter, Search } from 'lucide-react';

const WORKOUTS = [
    {
        id: '1',
        title: 'Neon Core Shred',
        duration: 15,
        level: 'Intermediate',
        category: 'Core',
        imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Void Upper Body',
        duration: 30,
        level: 'Advanced',
        category: 'Strength',
        imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'Electric HIIT',
        duration: 20,
        level: 'All Levels',
        category: 'Cardio',
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: '4',
        title: 'Cyber Recovery stretch',
        duration: 10,
        level: 'Beginner',
        category: 'Flexibility',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2069&auto=format&fit=crop',
    }
];

const FILTERS = ['All', 'Strength', 'Cardio', 'Core', 'HIIT', 'Yoga'];

export function Workouts() {
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
                    <p className="text-electric font-mono font-medium mb-1">PROGRAM LIBRARY</p>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight">
                        Select <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-600">Workout</span>
                    </h1>
                </div>

                {/* Search & Filter */}
                <div className="flex items-center gap-3">
                    <div className="relative glass rounded-full px-4 py-2 flex items-center gap-2 flex-1 md:w-64">
                        <Search size={18} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none focus:ring-0 text-sm font-medium w-full placeholder:text-gray-500"
                        />
                    </div>
                    <button className="glass p-2.5 rounded-full hover:bg-white/10 transition-colors">
                        <Filter size={20} className="text-electric" />
                    </button>
                </div>
            </motion.div>

            {/* Filter Pills */}
            <motion.div variants={item} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {FILTERS.map((filter, index) => (
                    <button
                        key={filter}
                        className={`whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm transition-all shadow-lg ${index === 0
                                ? 'bg-gradient-to-r from-electric to-blue-600 text-void border border-transparent'
                                : 'bg-surface border border-white/5 text-gray-300 hover:text-white hover:border-electric/50'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </motion.div>

            {/* Grid */}
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WORKOUTS.map(workout => (
                    <WorkoutCard key={workout.id} {...workout} />
                ))}
                {/* Fill empty spots for visual demo */}
                {WORKOUTS.map(workout => (
                    <WorkoutCard key={workout.id + '_dup'} {...workout} />
                )).slice(0, 2)}
            </motion.div>
        </motion.div>
    );
}
