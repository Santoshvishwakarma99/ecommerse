import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk, selectAuth } from '../features/auth/authSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuth);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    (async () => {
      try {
        await dispatch(loginThunk(email, password, remember));
        // On success, auth slice sets user; navigate to home
        navigate('/');
      } catch (e) {
        setError('Login failed');
      }
    })();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
          <div className="px-8 pt-8 pb-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-500">Sign in to continue to Gordon & Bros</p>
          </div>
          <form onSubmit={handleLogin} className="px-8 pb-8 space-y-4">
            {error && (
              <div className="bg-red-50 text-red-700 text-sm px-3 py-2 rounded border border-red-200">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black px-3 py-2 rounded-md outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link to="#" className="text-xs text-gray-600 hover:text-black">Forgot?</Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
                className="w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black px-3 py-2 rounded-md outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded border-gray-300" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                Remember me
              </label>
              <Link to="/signup" className="text-sm text-blue-600 hover:underline">Create account</Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 rounded-md text-white font-medium transition ${loading ? 'bg-gray-400' : 'bg-black hover:bg-gray-900'}`}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
