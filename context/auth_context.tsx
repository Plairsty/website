/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
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
  user: boolean;
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
  user: false,
});
// New
export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(false);
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
    if (isTokenExpired(accessToken!) || isTokenExpired(refreshToken!)) {
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
    return false;
  };
  const login = (accessToken: string, refreshToken: string) => {
    setUser(true);
    setUserAuthInfo({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    console.log('Success');
  };
  const logout = () => {
    setUser(false);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  const value = {
    authState,
    setAuthState: setUserAuthInfo,
    isUserAuthenticated,
    login,
    logout,
    user,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
