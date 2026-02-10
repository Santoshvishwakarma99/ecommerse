import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('auth_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {}
    }
    setLoading(false);
  }, []);

  const login = async (email, password, remember) => {
    setLoading(true);
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      await new Promise(r => setTimeout(r, 600));
      if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        throw new Error('Invalid credentials');
      }
      const authPayload = { email };
      setUser(authPayload);
      if (remember) {
        localStorage.setItem('auth_user', JSON.stringify(authPayload));
      } else {
        localStorage.removeItem('auth_user');
      }
      return { ok: true };
    } catch (e) {
      return { ok: false, message: e.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  const value = useMemo(() => ({ user, loading, isAuthenticated: !!user, login, logout }), [user, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
