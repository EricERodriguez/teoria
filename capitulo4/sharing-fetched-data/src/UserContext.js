import React, { createContext, useState, useEffect } from "react";

// creamos el objeto UserContext
export const UserContext = createContext();

function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: "Adam" });
    }, 1000);
  });
}

// creamos la componente UserProvider
// su  trabajo es llamar a fetchUser() y setear el estado a "user"
// como respuesta del aPI , usando los Hooks de useState y useEffect
export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "..." });

  useEffect(() => {
    fetchUser().then(user => {
      setUser(user);
    });
  }, []);
  
// renderiza el UserContext.Provider, pasandolo a cualquier hijo que lo reciba
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
