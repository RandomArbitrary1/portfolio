import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Header() {
    const hover_color =
        'hover:bg-pink-700 hover:text-white px-5 py-2 rounded-lg';
    const { auth } = usePage().props as any;

    return (
        <header
            style={{
                padding: '1rem',
                background: '#5b0088',
                display: 'flex',
                gap: '1rem',
            }}
        >
            <div className="mx-auto flex items-center gap-4">
                <Link className={hover_color} href="/biography">
                    Biography
                </Link>
                <Link className={hover_color} href="/projects">
                    Projects
                </Link>
                <Link className={hover_color} href="/contact">
                    Contact
                </Link>
                <Link className={hover_color} href="/login">
                    Admin
                </Link>
                {auth.user && (
                    <button className="text-green-400">Logged in!!</button>
                )}
            </div>
        </header>
    );
}
