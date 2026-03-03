import { Play, Clock, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface WorkoutCardProps {
    id?: string;
    title: string;
    duration: number;
    level: string;
    category: string;
    imageUrl: string;
}

export function WorkoutCard({ id = '1', title, duration, level, category, imageUrl }: WorkoutCardProps) {
    return (
        <Link to={`/workout/${id}`} className="block">
            <motion.div
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-surface border border-white/5 hover:border-white/20 transition-colors"
            >
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-void">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent z-10" />
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full h-full opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white uppercase tracking-wider">
                            {category}
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                    <h3 className="text-xl font-heading font-bold text-white mb-2 leading-tight">
                        {title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                        <div className="flex items-center gap-1.5">
                            <Clock size={16} className="text-electric" />
                            <span>{duration} min</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Flame size={16} className={level === 'Advanced' ? 'text-blaze' : 'text-volt'} />
                            <span>{level}</span>
                        </div>
                    </div>
                </div>

                {/* Play Button Overlay on Hover */}
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full bg-white text-void flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <Play size={28} className="fill-void ml-1" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
