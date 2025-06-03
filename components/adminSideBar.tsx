// app/Sidebar.tsx — client component
'use client';

import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/utils';

export default function AdminSidebar({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    

    useEffect(() => {
        function handleResize() {
            setIsOpen(window.innerWidth >= 768);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    

    return (
        <div className='flex h-screen'>
            {isOpen && (
                <div className='h-full bg-yellow-100'>
                    <ul className="menu p-4 w-80 bg-base-200 bg-slate-300">
                        <li><Link href={`${getBaseUrl()}/admin`}>Page d'Acceuil</Link></li>
                        <li><Link href={`${getBaseUrl()}/admin/prof/liste-prof`}>Professuers</Link></li>
                        <li><Link href={`${getBaseUrl()}/admin/etudiant/liste-etudiant`}>Etudiants</Link></li>
                        <li><Link href={`${getBaseUrl()}/admin/classe/liste-classe`}>Classes</Link></li>
                        <li><Link href={`${getBaseUrl()}/admin/filieres/liste-filiere`}>Filieres</Link></li>
                        <li><Link href={`${getBaseUrl()}/admin/lieu/liste-lieu`}>Locaux</Link></li>
                        <li><Link href={`${getBaseUrl()}/admin/modules-fac/liste-module`}>Modules</Link></li>
                        <li><Link href={`${getBaseUrl()}/admin/emplois`}>Emplois</Link></li>
                    </ul>
                </div>
            )}
           
            <main>
                <Button onClick={()=> setIsOpen(!isOpen)}>{isOpen? '<':'>'}</Button>
                {children}
            </main>

        </div>
    );
}
