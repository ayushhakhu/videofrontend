import { createContext, useState } from "react";

const AuthContextMetaData = {
  isAuthenticated: false,
  token: null,
  onLogin: (tokenValue, username) => {},
  onLogout: () => {},
  username: "",
};

export const AuthContext = createContext(AuthContextMetaData);

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setisAuthenticated] = useState(
    sessionStorage.getItem("token")
  );

  const [token, settoken] = useState(sessionStorage.getItem("token"));
  const [username, setusername] = useState(sessionStorage.getItem("username"));

  const onLogin = (tokenValue, username) => {
    sessionStorage.setItem("token", tokenValue);
    sessionStorage.setItem("username", username);
    settoken(tokenValue);
    setisAuthenticated(true);
    setusername(username);
  };

  const onLogout = () => {
    setisAuthenticated(false);
    sessionStorage.clear();
    settoken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        onLogin,
        onLogout,
        username,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
