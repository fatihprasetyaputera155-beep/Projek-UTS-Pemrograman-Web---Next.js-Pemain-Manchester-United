'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.message || 'Login gagal.');
      }
    } catch (error) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-500 to-red-400 px-5 py-5 font-sans">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-2xl">

        <div className="mb-8 text-center">
          <img
            src="/1201350-removebg-preview.png"
            className="h-28 mx-auto mb-6"
            alt="Logo MU"
          />
          <h1 className="mb-2 text-3xl font-extrabold text-slate-900">Login</h1>
          <p className="text-sm text-slate-600">Masuk ke halaman admin Manchester United</p>
        </div>

        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              required
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              required
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 rounded-lg bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-md shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 rounded-lg bg-slate-50 px-4 py-3 text-center text-xs text-slate-600">
          <strong className="text-slate-800">Akun Demo:</strong>
          <br />
          Username: admin | Password: admin123
        </div>

      </div>
    </main>
  );
}