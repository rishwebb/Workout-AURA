import { motion } from 'framer-motion';
import { Settings, LogOut, User, Bell, Shield, Smartphone, ChevronRight, Edit2 } from 'lucide-react';

export function Profile() {
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
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 max-w-4xl mx-auto">

            {/* Header & User Info Card */}
            <motion.div variants={item} className="relative glass rounded-3xl p-8 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-electric/20 rounded-full blur-[80px] pointer-events-none" />

                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    {/* Avatar */}
                    <div className="relative group">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface shadow-[0_0_20px_rgba(0,229,255,0.3)] bg-void relative">
                            <img
                                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            {/* Edit overlay */}
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <Edit2 className="text-white" size={24} />
                            </div>
                        </div>
                        {/* Status dot */}
                        <div className="absolute bottom-2 right-2 w-5 h-5 bg-volt rounded-full border-4 border-surface shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-4xl font-heading font-extrabold mb-1">Alex Mercer</h1>
                        <p className="text-electric font-mono font-medium mb-4">CYBER ATHLETE • Lvl 42</p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium">
                                Joined 2024
                            </div>
                            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-gray-400">
                                alex@cyberfit.io
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Account Settings */}
                <motion.div variants={item} className="glass rounded-3xl p-6">
                    <h3 className="text-xl font-heading font-bold mb-6 text-gray-400">Account</h3>
                    <div className="space-y-4">
                        {[
                            { icon: User, label: 'Personal Information' },
                            { icon: Shield, label: 'Password & Security' },
                            { icon: Bell, label: 'Notifications' },
                        ].map((setting, i) => (
                            <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-void rounded-xl border border-white/5 group-hover:border-electric/50 transition-colors">
                                        <setting.icon size={20} className="text-gray-300 group-hover:text-electric transition-colors" />
                                    </div>
                                    <span className="font-medium text-gray-200">{setting.label}</span>
                                </div>
                                <ChevronRight size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* App Settings */}
                <motion.div variants={item} className="glass rounded-3xl p-6">
                    <h3 className="text-xl font-heading font-bold mb-6 text-gray-400">Preferences</h3>
                    <div className="space-y-4">
                        {[
                            { icon: Settings, label: 'App Settings' },
                            { icon: Smartphone, label: 'Connected Devices' },
                        ].map((setting, i) => (
                            <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-void rounded-xl border border-white/5 group-hover:border-volt/50 transition-colors">
                                        <setting.icon size={20} className="text-gray-300 group-hover:text-volt transition-colors" />
                                    </div>
                                    <span className="font-medium text-gray-200">{setting.label}</span>
                                </div>
                                <ChevronRight size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                            </button>
                        ))}

                        {/* Danger Zone */}
                        <div className="pt-4 mt-4 border-t border-white/10">
                            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-blaze/10 hover:bg-blaze/20 transition-colors group text-blaze">
                                <div className="p-2 bg-blaze/20 rounded-xl">
                                    <LogOut size={20} />
                                </div>
                                <span className="font-bold">Log Out</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
}
