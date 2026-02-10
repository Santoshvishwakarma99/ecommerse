import { createSlice } from '@reduxjs/toolkit';

const saved = (() => {
  try { return JSON.parse(localStorage.getItem('auth_user')) || null; } catch { return null; }
})();

const initialState = {
  user: saved,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Login failed';
    },
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('auth_user');
    }
  }
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;
export const selectIsAuthenticated = (state) => !!state.auth.user;

export const loginThunk = (email, password, remember) => async (dispatch) => {
  try {
    dispatch(loginStart());
    // Simulate async API
    await new Promise(r => setTimeout(r, 500));
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      throw new Error('Invalid credentials');
    }
    const authPayload = { email };
    if (remember) localStorage.setItem('auth_user', JSON.stringify(authPayload));
    dispatch(loginSuccess(authPayload));
  } catch (e) {
    dispatch(loginFailure(e.message));
  }
};

export default authSlice.reducer;
