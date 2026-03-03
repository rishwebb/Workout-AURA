import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, Calendar, BarChart2, User } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Dumbbell, label: 'Workouts', path: '/workouts' },
    { icon: Calendar, label: 'Programs', path: '/programs' },
    { icon: BarChart2, label: 'Stats', path: '/stats' },
    { icon: User, label: 'Profile', path: '/profile' },
];

export function BottomNav() {
    const location = useLocation();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface/90 backdrop-blur-lg border-t border-white/5 pb-safe">
            <ul className="flex justify-around items-center h-16 px-4">
                {NAV_ITEMS.map(({ icon: Icon, label, path }) => {
                    const isActive = location.pathname === path;
                    return (
                        <li key={path} className="relative flex-1">
                            <Link
                                to={path}
                                className={clsx(
                                    'flex flex-col items-center justify-center w-full h-full gap-1 transition-colors',
                                    isActive ? 'text-electric' : 'text-gray-400 hover:text-white'
                                )}
                            >
                                <div className="relative">
                                    <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                    {isActive && (
                                        <motion.div
                                            layoutId="bottomNavIndicator"
                                            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-electric"
                                        />
                                    )}
                                </div>
                                <span className="text-[10px] font-medium tracking-wide">
                                    {label}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
