import { signIn } from 'next-auth/react'
import { useState } from 'react';
import { Button } from './ui/button';

export function GoogleSignInButton() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithGoogle = async () => {
        try {
            setIsLoading(true);
            await signIn('google', { callbackUrl: "/" });
        } catch (err) {
            setIsLoading(false);
        } finally {
            setIsLoading(false);

        }
    }
    return (
        <Button
            disabled={isLoading}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            onClick={loginWithGoogle}
        >
            {isLoading && (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-4 w-4 mr-2 animate-spin'
                >
                    <path d='M21 12a9 9 0 1 1-6.219-8.56' />
                </svg>
            )}
            Se Connecter avec Google
        </Button>
    )
}