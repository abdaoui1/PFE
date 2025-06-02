// app/Sidebar.tsx — client component
'use client';

import { useState, useEffect } from 'react';

export default function AdminSidebar({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsLargeScreen(window.innerWidth >= 1024);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const drawerOpen = isLargeScreen || isOpen;

    return (
        <div className={`drawer ${drawerOpen ? 'drawer-open' : ''}`}>
            <div className="drawer-content">
                {!isLargeScreen && (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰ Toggle drawer
                    </button>
                )}
                {children}
            </div>
            <div className="drawer-side">
                {!isLargeScreen && (
                    <label
                        className="drawer-overlay"
                        onClick={() => setIsOpen(false)}
                    ></label>
                )}
                <ul className="menu p-4 w-80 bg-base-200">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </div>
    );
}
