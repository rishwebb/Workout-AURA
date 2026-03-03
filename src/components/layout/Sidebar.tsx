import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, Calendar, BarChart2, User, Zap } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Dumbbell, label: 'Workouts', path: '/workouts' },
    { icon: Calendar, label: 'Programs', path: '/programs' },
    { icon: BarChart2, label: 'Progress', path: '/stats' },
    { icon: User, label: 'Profile', path: '/profile' },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <aside className="hidden md:flex flex-col w-64 h-screen fixed top-0 left-0 bg-surface/50 backdrop-blur-xl border-r border-white/5">
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                    <Zap size={24} color="white" className="fill-white" />
                </div>
                <h1 className="text-2xl font-heading font-extrabold tracking-tight">
                    AURA
                </h1>
            </div>

            <nav className="flex-1 px-4 mt-8">
                <ul className="space-y-2">
                    {NAV_ITEMS.map(({ icon: Icon, label, path }) => {
                        const isActive = location.pathname === path;
                        return (
                            <li key={path}>
                                <div className="relative">
                                    <Link
                                        to={path}
                                        className={clsx(
                                            'w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all',
                                            isActive
                                                ? 'text-white bg-white/10'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        )}
                                    >
                                        <Icon size={22} />
                                        <span className="font-medium">{label}</span>
                                    </Link>
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebarIndicator"
                                            className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-electric rounded-r-full"
                                        />
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="p-6 mt-auto">
                <div className="glass rounded-2xl p-4 relative overflow-hidden group hover:border-volt/30 transition-colors cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-volt/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-sm font-medium text-gray-300 mb-1">Weekly Goal</p>
                    <div className="flex items-end gap-2 mb-3">
                        <span className="text-2xl font-mono font-bold text-white">4</span>
                        <span className="text-sm text-gray-400 mb-1">/ 5 days</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-volt w-[80%] rounded-full shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
                    </div>
                </div>
            </div>
        </aside >
    );
}
