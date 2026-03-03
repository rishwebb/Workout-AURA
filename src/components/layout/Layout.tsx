import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { BottomNav } from './BottomNav';

export function Layout() {
    return (
        <div className="min-h-screen flex bg-void text-white font-body selection:bg-electric/30">
            <Sidebar />
            <main className="flex-1 md:ml-64 pb-20 md:pb-0 relative overflow-x-hidden">
                {/* Top-gradient glow for vibe */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-electric/10 blur-[100px] pointer-events-none rounded-full" />

                <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10 w-full">
                    <Outlet />
                </div>
            </main>
            <BottomNav />
        </div>
    );
}
