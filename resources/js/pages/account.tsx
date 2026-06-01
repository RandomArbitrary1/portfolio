import Header from '@/components/header';
import { router, useForm } from '@inertiajs/react';
export default function Account() {
    const hover_color = 'hover:bg-blue-600 bg-green-600 p-2 rounded-lg';
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    function logout() {
        router.post('/logout');
    }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/login');
    }
    return (
        <>
            <Header />
            <div className="flex flex-col items-center">
                <h1>Admin inlog:</h1>
                <br />
                <form onSubmit={submit}>
                    <input
                        className="rounded-lg bg-red-950 p-2"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        className="rounded-lg bg-red-950 p-2"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <br />
                    <br />
                    <button
                        type="submit"
                        className={hover_color}
                        disabled={processing}
                    >
                        Log in
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        onClick={logout}
                        className={hover_color}
                    >
                        Log out (if logged in)
                    </button>

                    {errors.email && <div>{errors.email}</div>}
                    {errors.password && <div>{errors.password}</div>}
                </form>
            </div>
        </>
    );
}
