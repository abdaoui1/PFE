'use client'
import React, { useState } from 'react';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setemail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        setError('');
        // onLogin(email, password); 
        const result = await signIn("credentials", {
            email, password,
            redirect: false,
        });

        if (result?.error) {
            setError("mismatch of password or email, try again!");
            return;
        }

        router.push('/');
        router.refresh();

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

                {error && (
                    <div className="mb-4 text-red-600 text-sm">{error}</div>
                )}

                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">
                        email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-1 font-medium">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Login;
