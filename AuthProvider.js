import { createContext, useContext, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    const auth = getAuth();
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        console.log('no user');
        return;
      }
      const token = await user.getIdToken();
      console.log('token', token);
      console.log('user', user);
    });
  }, []);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const userAuth = () => useContext(AuthContext);
