import { createContext, useState } from "react";

export const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  const closeForm = () => setShowForm(false);
  const openForm = () => setShowForm(true);

  return (
    <appContext.Provider value={{ showForm, closeForm, openForm }}>
      {children}
    </appContext.Provider>
  );
};
