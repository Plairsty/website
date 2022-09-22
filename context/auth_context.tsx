/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import Router from 'next/router';
import React, { useContext, useState } from 'react';
import parseJwt from '../utils/parse-jwt';

type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

type AuthContext = {
  authState: AuthTokens;
  setAuthState: (userAuthInfo: AuthTokens) => void;
  isUserAuthenticated: () => boolean;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  user: string;
  role: string;
};
const AuthContext = React.createContext<AuthContext>({
  authState: {
    accessToken: '',
    refreshToken: '',
  },
  setAuthState: (userAuthInfo: AuthTokens) => {},
  isUserAuthenticated: () => false,
  login: () => {},
  logout: () => {},
  user: '',
  role: 'user',
});
// New
export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<string>('');
  const [role, setRole] = useState<string>('user');
  const [authState, setAuthState] = React.useState({
    accessToken: '',
    refreshToken: '',
  });
  const setUserAuthInfo = (data: AuthTokens) => {
    localStorage.setItem('access_token', data.accessToken);
    localStorage.setItem('refresh_token', data.refreshToken);
    setAuthState({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    });
  };
  const isUserAuthenticated = () => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (!accessToken && !refreshToken) {
      return false;
    }
    if (isTokenExpired(refreshToken!)) {
      return false;
    }
    if (isTokenExpired(accessToken!)) {
      // TODO: Refresh token
      return false;
    }

    return true;
  };

  const isTokenExpired = (token: string) => {
    const decodedToken = parseJwt(token);
    const currentTime = new Date().getTime() / 1000;
    if (decodedToken.exp < currentTime) {
      return true;
    }
    // Check the role
    setRole(decodedToken.role);
    // set the user
    setUser(decodedToken.username);
    return false;
  };
  const login = (accessToken: string, refreshToken: string) => {
    // Bug here! Any token is valid
    // Implement signing key checks to verify the token
    setUserAuthInfo({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  };
  const logout = () => {
    setUser('');
    setRole('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    console.log('Logged out');
    Router.reload();
  };

  const value = {
    authState,
    setAuthState: setUserAuthInfo,
    isUserAuthenticated,
    login,
    logout,
    user,
    role,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
