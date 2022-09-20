import React from 'react';
import parseJwt from '../utils/parse-jwt';

type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

type AuthContext = {
  authState: AuthTokens;
  setAuthState: (userAuthInfo: AuthTokens) => void;
  isUserAuthenticated: () => boolean;
};
const AuthContext = React.createContext<AuthContext>({
  authState: {
    accessToken: '',
    refreshToken: '',
  },
  setAuthState: (userAuthInfo: AuthTokens) => {},
  isUserAuthenticated: () => false,
});

const { Provider } = AuthContext;

const AuthProvider = (children: React.ReactNode) => {
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
    if (!authState.accessToken || !authState.refreshToken) {
      return false;
    }
    if (
      isTokenExpired(authState.accessToken) ||
      isTokenExpired(authState.refreshToken)
    ) {
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

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo: AuthTokens) =>
          setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};
export { AuthContext, AuthProvider };
